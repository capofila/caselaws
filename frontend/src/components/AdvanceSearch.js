import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './css/Search.css';
import Browse from '../pages/Browse'
import { makeStyles } from '@material-ui/core/styles';
// import * as log from 'loglevel';
import TextField from '@material-ui/core/TextField';
//var _ = require('lodash');
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
  },
  menu: {
    width: 200,
  },
}));

const AdvanceSearch = (props) => {
  const classes = useStyles();
  const [Doc, setDocState] = useState("");
  const [Title, setTitleState] = useState("");
  const [Author, setAuthorState] = useState("");
  const [Bench, setBenchState] = useState("");
  const [OrderBy, setOrderBy] = useState("");
  const [FromDate, setFromDateState] = useState("");
  const [ToDate, setToDateState] = useState("");
  const [show, setShowState] = useState(false);
  const [mainCourtType, setMainCourtType] = useState("");
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const handleDocInputChanges = (e) => {
    if (e.target.value.length < 0) {
      setHelperText('Document/Title/Citation Required');
      setError(true);
    } else {
      setDocState(e.target.value);
      console.log("document/title" + e.target.value);

      setError(false);
      setHelperText("");
    }
  }
  const handleTitleInputChanges = (e) => {
    console.log("titile" + e.target.value);

    setTitleState(e.target.value);
  }
  const handleAuthorInputChanges = (e) => {
    console.log("author" + e.target.value);

    setAuthorState(e.target.value);
  }
  const handleBenchInputChanges = (e) => {
    console.log("bench" + e.target.value);

    setBenchState(e.target.value);
  }
  const handleOrderByInputChanges = (e) => {
    console.log("orderby" + e.target.value);

    setOrderBy(e.target.value);
  }
  const handleStartDate = (e) => {
    console.log("start date" + e.target.value);
    setFromDateState(e.target.value);
  }
  const handleEndDate = (e) => {
    console.log("End date" + e.target.value);
    setToDateState(e.target.value);
  }
  const handleClose = () => {
    setShowState(false);
  }
  const handleShow = () => {
    setShowState(true);
  }
  const handleCourtType = (e) => {
    setMainCourtType(e.target.value);
  }

  const callRecent = () => {
    props.callRecent();
  }
  const onSubmit = (event) => {
    event.preventDefault();
    // let title_citation = _.startCase(Doc);
    // let author = _.startCase(Author);
    // let bench = _.startCase(Bench);
    // console.log("Title is : " + title_citation);
    // let uppercaseTitle = title_citation.replace(/\s/g, "\\ ");
    // let uppercaseAuthor = author.replace(/\s/g, "\\ ");
    // let uppercaseBench = bench.replace(/\s/g, "\\ ");

    props.advanceSearch(Doc, Title, Author, Bench, OrderBy, FromDate, ToDate, mainCourtType);

    callRecent();
    handleClose();
  }

  return (
    <>
    <div>
      <p onClick={handleShow} className="advanceSearchBtn" style={{ color: 'blue', cursor: 'pointer', textAlign: 'center', marginTop: '10px ' }}>Advance Search</p>
        
        
      <Modal show={show} onHide={handleClose}>
        <form onSubmit={onSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Advance Search</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/*First Row*/}
            <div className="row">
              <div className="col-6 col-md-6">

                <TextField
                  id="outlined-with-placeholder"
                  label="Search By Judgemnt keywords"
                  value={Doc}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  name="doc"
                  error={error}
                  required
                  helperText={helperText}
                  onChange={handleDocInputChanges} />

              </div>

              <div className="col-6 col-md-6">

                <TextField
                  id="outlined-with-placeholder"
                  label="Search by Case Title"
                  value={Title}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  name="title"
                  onChange={handleTitleInputChanges} />


              </div>
            </div>
            {/*Second Row*/}
            <div className="row">
              <div className="col-6 col-md-6">
                <TextField
                  id="outlined-with-placeholder"
                  label="Judge"
                  value={Author}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  name="author"
                  onChange={handleAuthorInputChanges} />


              </div>
              <div className="col-6 col-md-6">
                <TextField
                  id="outlined-with-placeholder"
                  label="Bench"
                  value={Bench}
                  className={classes.textField}
                  margin="normal"
                  variant="outlined"
                  name="bench"
                  onChange={handleBenchInputChanges} />
              </div>
            </div>
            {/*Third Row*/}

            {/*Order By Fields*/}
            <div className="row">
              <div className="col-12 col-md-12">
                <label className="heading">OrderBy</label>
              </div>
            </div>

            <div className="row">
              <div className="col-md-2">Relevance</div>
              <div className="col-2 col-md-2">
                <input
                  type="radio"
                  value="Relevance"
                  name="orderBy"
                  onChange={handleOrderByInputChanges}
                />
              </div>
              <div className="col-md-2">Recent</div>
              <div className="col-2 col-md-2">
                <input
                  type="radio"
                  value="Recent"
                  name="orderBy"
                  onChange={handleOrderByInputChanges}
                />
              </div>
              <div className="col-md-2">Least Recent</div>

              <div className="col-2 col-md-2">
                <input
                  type="radio"
                  value="Least Recent"
                  name="orderBy"
                  onChange={handleOrderByInputChanges}
                />
              </div>
            </div>
            {/*Date Field Row*/}
            {/*Fifth Row*/}
            <div className="row">
              <div className="col-md-12">

              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="heading">Start Date</label>
                  <input type="date" name="bday" max="3000-12-31" min="1000-01-01" className="form-control" onChange={handleStartDate} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label className="heading">End Date</label>
                  <input type="date" name="bday" min="1000-01-01" max="3000-12-31" className="form-control" onChange={handleEndDate} />
                </div>
              </div>
            </div>
            {/*Sixth Row*/}
            <div className="row">
              <div className="col-md-4">
                <label className="heading">Court Name</label>
              </div>
              <div className="col-md-6">
                <select value={mainCourtType} onChange={handleCourtType}>
                  <option>All Courts</option>
                  {
                    props.courtName.map((courtNames, index) => {
                      return <option key={index} value={courtNames}>{courtNames}</option>
                    })
                  }
                </select>
              </div>
            </div>

            {/*Required field Text*/}
            <div className="row">
              <div style={{ fontSize: '10px', marginLeft: '2px' }}>* Required Fields</div>
            </div>
          </Modal.Body>
          <Modal.Footer>

            <Button type="submit" variant="primary">Search</Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </form>
      </Modal >
    </div>
    <Browse></Browse>
    </>
  );
}
export default AdvanceSearch;
