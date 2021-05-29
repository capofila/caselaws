import ReactGA from 'react-ga';
import React, { Component } from 'react';
import { Navbar, ProgressBar, Nav } from 'react-bootstrap'
import axios from 'axios';
import { BrowserRouter as Switch, Route } from 'react-router-dom' //npm install react-router-dom --save
import './App.css';
import SearchComponent from '../components/SearchComponent';
import * as log from 'loglevel';
import SpinnerPage from '../components/LoadingSpinner';
import RecentList from '../components/Recents/RecentList';
import RecentCase from '../components/Recents/RecentCase';
import Laws from '../components/Laws/Laws';
import About from '../pages/About'
import Career from '../pages/Career'
import Policy from '../pages/Policy'
import Employer from '../pages/Employer'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Browse from '../pages/Browse'
import Dashboard from '../pages/Dashboard'
import TermsAndConditions from '../pages/TermsAndConditions'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const config = require('../config/AppConfig');

//solr acccess: 
const solrHost = config.solr.host;
const solrPort = config.solr.port;

const serverIp = solrHost + `:` + solrPort;

//webservice access:
const webserviceHost = config.webservice.host;
const webservicePort = config.webservice.port;
const webserviceIp = webserviceHost + ":" + webservicePort;
console.log(webserviceIp);

class App extends Component {
  state = {
    law: [],
    recent: [],
    loading: false,
    showRecent: false,
    recentCase: [],
    row: 20,
    start: 0,
    searchString: '*:*',
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

      axios.get(serverIp + `/solr/caselaws_v2/select?q=judgement_html:\"${this.state.searchString}\" ${(this.state.courtType === 'all' || this.state.courtType === '') ? '' : ' AND court_name:'+ this.state.courtType}&rows=${row}&start=${start}` )
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
          //console.log(response.data.response.docs);
          this.setState((prevState) => ({
            law: [...response.data.response.docs],
            loading: false,
            showRecent: true,
            start: prevState.start + 20,
          }));
        } else {
          this.style_anchor = { display: 'none' };
          this.setState({ loading: false })
          return toast('Sorry, we did not find information matching with your search keywords. Please try different keywords.');
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
    // ReactGA.initialize('G-DJ4F2RDBQ2')
    // ReactGA.pageview(window.location.pathname + window.location.search);
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
  /*
  fl=case_title,judge_name,id,judgement_html,judgement,date_of_judgement,citation_name,respondent_name,court_name,petitioner_name&q=judgement_html:"maneka" AND 
case_title:"maneka" AND court_name:"Delhi High Court"
  */

  AdvanceSearch = (Doc, Title, Author, Bench, OrderBy, FromDate, ToDate, mainCourtType) => {
    this.setState({
      loading: true,
    });
    let modifiedToDate = ToDate + 'T00:00:00Z';

    let url = `/solr/caselaws_v2/select?q=(judgement_html:\"${Doc}\"
    ${Title === '' ? '':' OR case_title:\"'+Title+'\"'}
    ${Author === '' ? '':' OR judge_name:\"' + Author+'\"'})
    ${(mainCourtType === 'all' || mainCourtType === '')?'':'AND court_name:\"'+mainCourtType+'\"'}
    &rows=${this.state.row}&start=${this.state.start}`;

    let sql = url;
    console.log("final String is : " + serverIp + sql);
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
    axios.get(serverIp + `/solr/caselaws_v2/select?fl=case_title,id&q=*:*&rows=20`)
      .then(response => {
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
    this.setState({ loading: true })
    const { row, start, law, loadMoreCount } = this.state;
    this.setState(prevState => ({
      start: prevState.start + 20,
      loadMore: prevState.loadMore + 1,
    }))
    
    axios.get(serverIp + `/solr/caselaws_v2/select?q=judgement_html:\"${this.state.searchString}\" ${(this.state.courtType === 'all' || this.state.courtType === '') ? '' : ' AND court_name:'+ this.state.courtType}&rows=${row}&start=${start}` )
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
            alert('not found');
            return
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
    let spinnerFlag = false;

    if (this.state.loading && !this.spinnerFlag) {
      loading = (<SpinnerPage />);
      this.spinnerFlag = true
    } else {
      law = (
        <div style={{ marginBottom: '300px' }}>
          <Laws law={this.state.law} />
          <center style={{ marginTop: '5px', cursor: 'pointer', color: 'blue' }}><p onClick={this.loadMore} style={this.style_anchor}>{this.state.loading ? 'Loading...' : 'Load More'}</p></center>
        </div>
      );
    }

//This was used for advance search component
 

    // if (!this.state.showRecent && this.state.law !== null) {
    //   recent = (
    //     <div className="card rounded recentCaseCard">
    //       <div className="card-title recentCaseHeading">
    //         <h6 style={{ textAlign: 'center' }} className="">Recent Judgement</h6>
    //       </div>
    //       <marquee direction='down'>
    //         {this.state.recentCase.map((res) => {
    //           return (
    //             <RecentCase
    //               click={(event) => this.recentCaseClick(res.id)}
    //               key={res.id}
    //               id={res.id}
    //               recentCase={res.case_title} />
    //           )
    //         })} </marquee>
    //     </div>
    //   );

    // } else {
    //   recent = (null);
    // }

    return (
      <div className="custom" margin="4%">

        <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="http://www.caselaws.org">Case Laws</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            {/*<Nav className="mr-auto">
            <Nav.Link href="#judgements">Judgements</Nav.Link>
            <Nav.Link href="#recentCase">RecentCase</Nav.Link>
            <NavDropdown title="More" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/forum">Forum</NavDropdown.Item>
              <NavDropdown.Item href="#action/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/shop">Shop</NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item href="https://forms.gle/CAPUnrM9Lcjdsgov7">Career</NavDropdown.Item>
            </NavDropdown>
          </Nav>*/}
            <Nav className="mr-auto">
            </Nav>

            {/*<Nav>
            <Nav.Link href="https://forms.gle/CAPUnrM9Lcjdsgov7">Careers</Nav.Link>
              <Nav.Link href="https://forms.gle/6Q1ZoDxsJ6VCsijK6">Employers</Nav.Link>
              <Nav.Link eventKey={2} href="/about">About</Nav.Link>
            </Nav>*/}
            <Nav>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/career">Careers</Nav.Link>
              <Nav.Link href="/employer">Employers</Nav.Link>
              <Nav.Link eventKey={2} href="/about">About</Nav.Link>
              <Nav.Link href="/policy">Policy</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/browse">Browse</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <br></br>
        <br></br>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/policy" component={Policy}></Route>
          <Route path="/career" component={Career}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/employer" component={Employer}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/browse" component={Browse}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>


          <Route exact path="/" component={() => (<SearchComponent
            search={this.search}
            courtName={this.state.courtNames}
            recentSearch={this.searchHistory}
            recentJudgements={this.recentJudgements}
            advanceSearch={this.AdvanceSearch}
          />)} />
        </Switch>

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

          {/* RecentList Component */}
          <div className="col-md-12 col-sm-2 col-xs-2 padding-right collapse" style={{ marginTop: '20px' }}>
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
                      searchKeywords={res.recentSearch} />
                  )
                })
                }
              </div>) : null}
          </div>
        </div>

        <footer className="page-footer font-small blue footer">
          <div className="footer-copyright text-center py-3">All right reserved by CaseLaws © 2018-21 Copyright: www.caselaws.org
          <TermsAndConditions></TermsAndConditions>
          </div>
        </footer>
        {/*footer Ends*/}

      </div>

    );
  }
}



export default App;
