import React from 'react';
import ResultList from '../ResultData/ResultList';
const Laws = (props) => props.law.map((res) => {
  return (
    <ResultList
      key={res.id}
      judgementId={res.id}
      {...res}
    />)
});

export default Laws;