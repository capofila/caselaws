import React, { useState } from 'react';
import { Button, Container, Dropdown, Form, Col } from 'react-bootstrap'
import './css/Search.css';
import useForm from "react-hook-form";
import AdvanceSearch from './AdvanceSearch';
import * as log from 'loglevel';
import logo from '../assets/logo_sm.png';


const SearchComponent = (props) => {
  const [mainCourtType, setMainCourtType] = useState("");
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange"
  });

  const handleCourtType = (e) => {
    setMainCourtType(e.target.value);
  }
  const callSearchFunction = (data) => {
    var s = data.txtMainSearch;
    props.search(s, mainCourtType);
  }
  const callAdvanceSearch = (DocOrCitationOrTitle, Title, CitationNumber, Author, Bench, OrderBy, FromDate, ToDate, mainCourtType) => {
    props.advanceSearch(DocOrCitationOrTitle, Title, CitationNumber, Author, Bench, OrderBy, FromDate, ToDate, mainCourtType);
  }

  const callRecent = () => {
    props.recentSearch();
    props.recentJudgements();
  }
  let courtArr = props.courtName;
  let courtNameArray = [];
  for (let i = 0; i < courtArr.length - 1;) {
    courtNameArray.push(courtArr[i]);
    i = i + 2;
  }

  // ;
  return (
    <Container>
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
      <Form onSubmit={handleSubmit(callSearchFunction)} >
        <Form.Row>
          <Col lg={7} md={4} sm={12} xs={12}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                required={true}
                placeholder="Ex. search judgement, tribunal, judge name etc."
                name="txtMainSearch"
                ref={register({ required: "This is Required" })}
              />
            </Form.Group>
          </Col>
          <Col lg={3} md={4} sm={12} xs={12}>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Control as="select" custom value={mainCourtType} onChange={handleCourtType} >
                <option value="All">All Court</option>
                {courtNameArray.pop('supreme court')} {/*do no delete this line, since we don't want to show supreme court as its duplicate*/}
                {courtNameArray.map((courtNames, index) => {
                  return <option key={index} value={courtNames}>{courtNames}</option>
                })}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col lg={2} md={4} sm={12} xs={12}>
            <Button variant="primary" type="submit" block>Search</Button>
          </Col>
        </Form.Row>
      </Form>

      <div className="col-12 col-md-12">
        <p className="error" style={{ textAlign: 'center', marginTop: '4px' }}>
          {errors.txtMainSearch && <span>{errors.txtMainSearch.message}</span>}
        </p>
        <AdvanceSearch
          callRecent={callRecent}
          advanceSearch={callAdvanceSearch}
          courtName={courtNameArray} />
      </div>
    </Container>
  );
}
export default SearchComponent;
