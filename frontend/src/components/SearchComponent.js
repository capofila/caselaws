import React, { useState } from 'react';
import { Button, Container, Dropdown, Form, Col } from 'react-bootstrap'
import './css/Search.css';
import useForm from "react-hook-form";
import AdvanceSearch from './AdvanceSearch';
import * as log from 'loglevel';

const SearchComponent = (props) => {
  // const [searchValue, setSearchState] = useState("");
  const [mainCourtType, setMainCourtType] = useState("");
  const { register, errors, handleSubmit } = useForm({
    mode: "onChange"
  });
  // const handleSearchInputChanges = (e) => {
  //     setSearchState(e.target.value);
  // }
  const handleCourtType = (e) => {
    log.warn("[SearchComponent] handleCourtType : " + e.target.value);
    setMainCourtType(e.target.value);
  }
  const callSearchFunction = (data) => {
    var s = data.txtMainSearch;
    // let finalSearchString = _.startCase(s);
    // var updated = finalSearchString.replace(/\s/g, "\\ ");

    props.search(s, mainCourtType);
  }
  const callAdvanceSearch = (DocOrCitationOrTitle, Title, CitationNumber, Author, Bench, OrderBy, FromDate, ToDate, mainCourtType) => {

    props.advanceSearch(DocOrCitationOrTitle, Title, CitationNumber, Author, Bench, OrderBy, FromDate, ToDate, mainCourtType);
    log.warn("advance Search Called");
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
      <Form onSubmit={handleSubmit(callSearchFunction)} >
        <Form.Row>
          <Col lg={7} md={4} sm={12} xs={12}>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                required="true"
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
                {courtNameArray.map((courtNames, index) => {
                  return <option key={index} value={courtNames}>{courtNames}</option>
                })}
              </Form.Control>
            </Form.Group>
          </Col>
          <Col lg={2} md={4} sm={12} xs={12}>
            <Button variant="primary" type="submit" block>
              Search
            </Button>
          </Col>

        </Form.Row>
      </Form>

      <div className="col-12 col-md-12">
        <p className="error" style={{ textAlign: 'center', marginTop: '4px' }}>
          {errors.txtMainSearch && <p>{errors.txtMainSearch.message}</p>}
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
