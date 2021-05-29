import React, { Component } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import ResultComponent from './ResultComponent'
import { Navbar, Container, Nav, Spinner } from 'react-bootstrap'


const style = {
    height: 30,
    border: "1px solid green",
    margin: 6,
    padding: 8
};

const stylegap = {
    height: 15
}

export class InfiniteResultComponent extends Component {

    state = {
        items: Array.from({ length: 0 }),
        start: 10,
    };

    componentDidMount = () => {
        fetch(`http://155.138.197.117:8983/solr/caselaws_v2/select?q=*%3A*&rows=20&start=` + this.state.start)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    items: this.state.items.concat(res.response.docs),
                    start: this.state.start + 20
                })
            })
            .catch(e => {
                console.log(e);
            });
    }

    fetchMoreData = () => {
        // a  async api call
        setTimeout(() => {
            fetch(`http://155.138.197.117:8983/solr/caselaws_v2/select?q=*%3A*&rows=20&start=` + this.state.start)
                .then(res => res.json())
                .then(res => {
                    this.setState({
                        items: this.state.items.concat(res.response.docs),
                        start: this.state.start + 20
                    })
                })
                .catch(e => {
                    console.log(e);
                });
        }, 1500);
    };


    render() {
        return (
            <Container flex>
                <h1>Browse Judgements</h1>
                <hr />
                <InfiniteScroll
                    dataLength={this.state.items.length}
                    next={this.fetchMoreData}
                    hasMore={true}
                    loader={<Spinner animation="grow" />}
                >

                    {
                        this.state.items.map((judgements, index) => (
                            <div key={index}>
                                <ResultComponent judgementData={judgements}></ResultComponent>
                                <div style={stylegap}></div>
                            </div>

                        ))

                    }
                </InfiniteScroll>
            </Container>
        );
    }
}

export default InfiniteResultComponent