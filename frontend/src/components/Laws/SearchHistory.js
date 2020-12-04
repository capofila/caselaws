import React from 'react';
import RecentList from '../Recents/RecentList';

const SearchHistory = (props) => props.recent.map((res) => {
  return (
    <RecentList
      click={(event) => this.recentSearchClick(res.recentSearch)}
      key={res.recentSearchId}
      searchKeywords={res.recentSearch} />)
});
export default SearchHistory;