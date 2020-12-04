import React from 'react';

const RecentCase = (props) => {
    return(
        <div className="w-100" style={{margin:'2px'}}>
            <ul style={{padding:'2px',textColor:'#0000EE', cursor:'pointer'}} onClick={props.click}>
            <li>
               <a href="#recent">{props.recentCase}</a>
               </li>
            </ul>    
            
        </div>
    );
}
export default RecentCase;