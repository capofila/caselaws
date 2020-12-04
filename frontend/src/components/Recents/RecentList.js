import React from 'react';

const RecentList = (props) => {
    return(
        <div className="w-100">
            <ul style={{ padding:'2px', cursor:'pointer', color: 'blue'}} onClick={props.click}>
                <p>{props.searchKeywords}</p>
            </ul>       
        </div>
    );
}
export default RecentList;