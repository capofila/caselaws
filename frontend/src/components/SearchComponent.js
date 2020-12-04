import React, { useState } from 'react';
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
  return (
    <div className="row">
      {/**Search Form*/}
      <div className="col-md-12">
        <div className="d-flex justify-content-center">
          <form className="input-group col-md-8" onSubmit={handleSubmit(callSearchFunction)}>
            <input
              type="search"
              className="form-control"
              placeholder="Search"
              name="txtMainSearch"
              ref={register({ required: "This is Required" })}
            />

            <select value={mainCourtType} onChange={handleCourtType} className="custom-select-md" >
                <option value="All">All Court</option>
                {courtNameArray.map((courtNames, index) => {
                return <option key={index} value={courtNames}>{courtNames}</option>
              })}
            </select>
            <button type="submit" className="btn btn-secondary" style={{ marginLeft: '5px' }} onClick={callRecent}>Search</button>
            {/* <button type="submit" className="btn btn-secondary" style={{marginLeft: '5px'}}>Search</button> */}
          </form>
        </div>
      </div>
      {/**End of Search Form*/}
      <div className="col-12 col-md-12">
        <p className="error" style={{ textAlign: 'center', marginTop: '4px' }}>
          {errors.txtMainSearch && <p>{errors.txtMainSearch.message}</p>}
        </p>
        <AdvanceSearch
          callRecent={callRecent}
          advanceSearch={callAdvanceSearch}
          courtName={courtNameArray} />
      </div>
    </div>
  );
}
export default SearchComponent;
