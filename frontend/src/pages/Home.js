import React from 'react'

import * as log from 'loglevel';

import logo from '../assets/logo.png';
import RecentList from '../components/Recents/RecentList';
import axios from 'axios';
import SearchComponent from '../components/SearchComponent';
import { Component } from 'react';

import SpinnerPage from '../components/LoadingSpinner';
import RecentCase from '../components/Recents/RecentCase';
import Laws from '../components/Laws/Laws';
const config = require('../config/AppConfig');
const solrHost = config.solr.host;
const solrPort = config.solr.port;
const serverIp = solrHost + `:` + solrPort;
const webserviceHost = config.webservice.host;
const webservicePort = config.webservice.port;
const webserviceIp = webserviceHost + ":" + webservicePort;

class Home extends Component {

    state = {
        law: [],
        recent: [],
        loading: false,
        showRecent: false,
        recentCase: [],
        row: 20,
        start: 0,
        searchString: null,
        courtType: '*',
        courtNames: [],
        noOfPages: null,
        loadMoreCount: 1,
    }

    style_anchor = {
        marginTop: '100px',
        display: 'none',
        textAlign: 'center',
        cursor: 'pointer',
    }

    /**
     * ---------------------------------------
     * Normal Search using @param search text
     * and @param court Type
     * ---------------------------------------
     */

    search = (searchValue, mainCourtType) => {
        this.setState({ start: 0, });
        const { row, start } = this.state;

        this.setState({
            searchString: searchValue,
            courtType: mainCourtType,
            loading: true,
        });

        axios.get(webserviceIp + `/judgements/postData?query=${searchValue}`)
            .then(
                console.log("entry made to recent search registry for " + searchValue)
            ).then(error => { console.log(error) })

        axios.get(serverIp + `/solr/caselaws_v2/select?${this.state.courtType === 'all' || this.state.courtType === '' ? '' : 'fq=court_name: ' + this.state.courtType + '&'}q=case_title: "${this.state.searchString}" OR judgement: "${this.state.searchString}" OR petitioner_name: "${this.state.searchString} " OR citation_name: "${this.state.searchString}" OR respondent_name: "${this.state.searchString} " OR judge_name: "${this.state.searchString}" &rows=${row}&start=${start}`)
            .then(response => {
                /**
                 * Pagination calculations.....
                 * @info totalCont -->total count  no of records found
                 * @info noOfPages --> total num. of pages created, 20 records per page,
                 * @info set num of pages created to the state...
                 */
                let totalCount = response.data.response.numFound;
                let noOfPages = Math.ceil(totalCount / 20);
                this.setState({ noOfPages: noOfPages });

                if (typeof response.data.response.docs[0] != "undefined") {

                    this.setState((prevState) => ({
                        law: [...response.data.response.docs],
                        loading: false,
                        showRecent: true,
                        start: prevState.start + 20,
                    }));
                } else {
                    this.style_anchor = { display: 'none' };
                    this.setState({ loading: false })
                    return window.alert('Sorry! we did not found judgement related to ' + this.state.searchString + ' and Court ' + this.state.courtType);
                }
            }
            ).then(
                this.style_anchor = {
                    display: 'block'
                }
            ).catch(e => {
                console.log(e)
            })
    }

    componentDidMount() {
        axios.get(serverIp + `/solr/court_names/select?facet.field=court_name&facet=on&fl=court_name&q=*%3A*`)
            .then(response => {
                this.setState({
                    courtNames: response.data.facet_counts.facet_fields.court_name,
                })
            });
    }

    /**
     * -------------------------------------------------------------------------------------------------
     * Advance Search require 
     * @param citationName/title/document, @param only title, @param only citation name, @param author,
     * @param bench, @param orderBy, @param startDate/FromDate, @param endDate/ToDate, @param courtType,
     * --------------------------------------------------------------------------------------------------
     */

    AdvanceSearch = (Doc, Title, Author, Bench, OrderBy, FromDate, ToDate, mainCourtType) => {
        this.setState({
            loading: true,
        });
        console.log("[App.js | value of document/title]" + Doc)
        console.log("[App.js | value of title ] " + Title);
        console.log("[App.js | value of court Name ] " + mainCourtType);
        console.log("[App.js | value of citation ] " + Author);
        console.log("[App.js | value of bench ] " + Bench);
        console.log("[App.js | from date ] " + FromDate);
        console.log("[App.js | To date ] " + ToDate);

        let modifiedFromDate = FromDate + 'T00:00:00Z';
        let modifiedToDate = ToDate + 'T00:00:00Z';

        let sql = `/solr/caselaws_v2/select?fq=`;
        let flag = false;

        if (Doc !== "") {
            sql = sql.concat(`judgement: "${Doc}" &q=*:* `);
        }

        if (Title !== "") {
            sql = sql.concat(`AND case_title: "${Title}" `);
        }

        if (mainCourtType !== "") {
            sql = sql.concat(`AND court_name: "${mainCourtType}" `);
        }
        if (Author !== "") {
            sql = sql.concat(`AND citation_name: "${Author}" `);
        }
        if (!Bench === "") {
            sql = sql.concat(`AND judge_name: "${Bench}" `);
        }

        // if (modifiedFromDate !== "" && modifiedToDate !== "") {
        //   sql = sql.concat(`AND solr_date: [${modifiedFromDate} TO ${modifiedToDate}]`);
        // }

        if (OrderBy === "Recent") {
            sql = sql.concat(`&sort=solr_date desc`);
        }
        if (OrderBy === "Least Recent") {
            sql = sql.concat(`&sort=solr_date asc`);
        }

        if (sql === `/solr/caselaws_v2/select?fq=`) {
            sql = `/solr/caselaws_v2/select?q=*:*`;
        }
        console.log("final String is : " + serverIp + sql);
        //http://155.138.197.117:8983/solr/caselaws_v2/select?fq=case_title:shah bano*&fq=judgement:shah bano*fq=case_title:shah bano*
        //axios.get(serverIp + `/judgements/filter/advance?citation=${citation}&title=${title}&author=${author}&bench=${bench}&startDate=${startDate}&endDate=${endDate}&courtType=${mainCourtType}`)
        axios.get(serverIp + sql)
            .then(response => {
                if (response.error) {
                    this.setState({ loading: false })
                }
                if (typeof response.data.response.docs != "undefined" && response.data.response.docs != null && response.data.response.docs.length != null && response.data.response.docs.length > 0) {
                    this.setState({
                        law: response.data.response.docs,
                        loading: false,
                        showRecent: true
                    });
                } else {
                    window.alert('No Data Found!');
                    this.setState({
                        loading: false,
                    })
                }
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                }
            });
    }
    /**
     * -----------------------------------------
     * Get top 10 recent Search From users.
     * ------------------------------------------
     */
    searchHistory = () => {
        axios.get(webserviceIp + "/judgements/searchHistory")
            .then(response => this.setState({ recent: response.data }))
            .catch(error => {
                log.debug(error.Message);
            })
    }
    /**
     * ---------------------------
     * Fetch all the recentJudgements
     * ---------------------------
     */
    recentJudgements = () => {
        axios.get(serverIp + `/solr/caselaws_v2/select?fl=case_title%2Cid&q=*%3A*&rows=20&sort=_docid_%20desc`)
            .then(response => {
                //console.log(response.data.response.docs); 
                this.setState({
                    recentCase: response.data.response.docs
                })
            }
            )
            .catch(error => {
                log.debug(error.Message)
            })
    }
    /**
     * --------------------------------------
     * Handle Click on the recentJudgements List
     * ---------------------------------------
     */
    recentCaseClick = (id) => {
        axios.get(serverIp + `/solr/caselaws_v2/select?fq=id:${id}&q=*%3A*`)
            .then(response => {
                this.setState({
                    law: response.data.response.docs,
                })
            }, this.style_anchor = { display: 'none' })
    }

    /**
     * ---------------------------------------
     * Handle Click on the recent search List
     * ---------------------------------------
     */

    recentSearchClick = (keyword) => {
        this.setState({
            loading: true,
        })
        fetch(webserviceIp + `/judgements/clickedKeyword?keyword=${keyword}`)
            .then(response => response.json())
            .then(res => {
                this.setState({
                    law: res,
                    loading: false,
                })
            }).then(error => {
                console.log(error);
            })
    }
    /**
     * ------------------------------
     * Handle the state of pagination
     * ---------------------------------
     */
    loadMore = () => {
        const { row, start, law, loadMoreCount } = this.state;
        this.setState(prevState => ({
            start: prevState.start + 20,
            loadMore: prevState.loadMore + 1,
        }))
        //axios.get(serverIp + `/solr/caselaws_v2/select?fq=court_name:"${this.state.courtType}"&q=case_title:${this.state.searchString}* OR petitioner_name:${this.state.searchString}* OR citation_name:${this.state.searchString}* OR respondent_name:${this.state.searchString}* OR judge_name:${this.state.searchString}&rows=${row}&start=${start}`)
        //${this.state.courtType === 'all' || this.state.courtType === '' ? '' : 'fq=court_name: ' + this.state.courtType + '&'}
        axios.get(serverIp + `/solr/caselaws_v2/select?${this.state.courtType === 'all' || this.state.courtType === '' ? '' : 'fq=court_name: ' + this.state.courtType + '&'}q=case_title:${this.state.searchString}* OR petitioner_name:${this.state.searchString}* OR citation_name:${this.state.searchString}* OR respondent_name:${this.state.searchString}* OR judge_name:${this.state.searchString}&rows=${row}&start=${start}`)
            .then(response => {

                if (this.state.noOfPages > 0) {

                    let clickableLoadMore = Math.ceil(this.state.noOfPages / 10);

                    if (loadMoreCount <= clickableLoadMore) {
                        if (typeof response.data.response.docs != "undefined" && response.data.response.docs != null && response.data.response.docs.length != null && response.data.response.docs.length > 0) {
                            this.setState({
                                law: [...law, ...response.data.response.docs],
                                loading: false,
                                showRecent: true,
                            });
                        } else {
                            this.style_anchor = { display: 'none' };
                            this.setState({ loading: false })
                            return window.alert('No Data Found');
                        }
                    } else {
                        this.style_anchor = { display: 'none' };
                        this.setState({ loading: false })
                        return window.alert('No Data Found');
                    }
                }
            }
            ).then(
                this.style_anchor = {
                    display: 'block'
                }
            )
    }
    /**
     * Render method starts..........
     */
    render() {

        let law = null;
        let loading = null;
        let recent = null;

        if (this.state.loading) {
            loading = (<SpinnerPage />);
        } else {
            law = (
                <div style={{ marginBottom: '300px' }}>

                    <Laws
                        law={this.state.law} />
                    <center style={{ marginTop: '5px', cursor: 'pointer', color: 'blue' }}><p onClick={this.loadMore} style={this.style_anchor}>Load More</p></center>
                    <div>
                    </div>
                </div>
            );
        }

        if (this.state.showRecent && this.state.law !== null) {
            recent = (
                <div className="card rounded recentCaseCard">
                    <div className="card-title recentCaseHeading">
                        <h6 style={{ textAlign: 'center' }} className="">Recent Judgements</h6>
                    </div>
                    <marquee direction='down'>
                        {this.state.recentCase.map((res) => {
                            return (
                                <RecentCase
                                    click={(event) => this.recentCaseClick(res.id)}
                                    key={res.id}
                                    id={res.id}
                                    recentCase={res.case_title} />
                            )
                        })}
                    </marquee>
                </div>
            );

        } else {
            recent = (null);
        }

        return (
            <div className="custom" margin="4%">
                <div className="h-100">
                    {/*Logo*/}
                    <div className="row">
                        <div className="col-12 col-md-12" >
                            <center>
                                <a href="http://www.caselaws.org"> <img className="logo1" src={logo} alt="logo" /></a>
                            </center>
                        </div>

                        <div className="col-12 col-md-12">
                            <center>
                                <h1 className="main_title">INDIAN CASE LAWS</h1>
                            </center>
                        </div>
                    </div>

                    {/**Search Form*/}
                    <SearchComponent
                        search={this.search}
                        courtName={this.state.courtNames}
                        recentSearch={this.searchHistory}
                        recentJudgements={this.recentJudgements}
                        advanceSearch={this.AdvanceSearch}
                    />
                    {/**End of Search Form*/}

                </div>

                <div className="row h-100">
                    {/*Empty col */}
                    <div className="col-md-2 col-sm-2 col-xs-2 padding-left" style={{ marginTop: '20px' }}>
                        {recent}
                    </div>


                    {/*middle result page*/}

                    <div className="col-md-8 col-sm-8 col-xs-8 padding-center" style={{ height: '100%' }}>
                        <div style={{
                            margin: '0',
                            position: 'absolute',
                            top: '50%', left: '50%'
                        }}>
                            {loading}
                        </div>
                        {law}

                    </div>

                    {/* Empty column */}
                    <div className="col-md-2 col-sm-2 col-xs-2 padding-right" style={{ marginTop: '20px' }}>
                        {this.state.showRecent ? (
                            <div className="card rounded searchHistoryCard">
                                <div className="card-title recent_heading">
                                    <h6 style={{ textAlign: 'center' }} >Recent Search</h6>
                                </div>

                                {this.state.recent.map((res) => {
                                    return (
                                        <RecentList
                                            click={() => this.recentSearchClick(res.recentSearch)}
                                            key={res.recentSearchId}
                                            searchKeywords={res.recentSearch} />)
                                })
                                }
                            </div>) : null}
                    </div>
                </div>

                {/*footer starts*/}
                <footer className="page-footer font-small blue footer">
                    <div className="footer-copyright text-center py-3">All right reserved by CaseLaws © 2020 Copyright: wwww.caselaws.org</div>
                </footer>
                {/*footer Ends*/}

            </div>
        );
    }
}

export default Home;
