import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


function Sidebar({ items }) {
    return (
        // <List disablePadding dense>
        //     {
        //         items.map(({ name, label, items: subItems, ...rest }) =>
        //         (
        //             <ListItem style={{ paddingLeft: 18 }} key={name} button {...rest}>
        //                 <ListItemText>{label}</ListItemText>
        //                 {Array.isArray(subItems) ? (
        //                     <List disablePadding>
        //                         {subItems.map((subItem) => (
        //                         <ListItem key={subItem.name} button>
        //                             <ListItemText className="sidebar-item-text">
        //                                 {subItem.label}
        //                             </ListItemText>
        //                         </ListItem>
        //                         ))}
        //                     </List>

        //                 ) : null}
        //             </ListItem>
        //         ))}
        //     {/* <ListItem button>
        //         <ListItemText>BareActs</ListItemText>
        //     </ListItem> */}
        // </List>
        <div>
            <h2>Court Judgements</h2>
            <ul>
                <li><a href="browse/Allahabad High Court">Allahabad High Court</a> </li>
                <li><a href="Bombay High Court">Bombay High Court</a> </li>
                <li><a href="Calcutta High Court">Calcutta High Court</a> </li>
                <li><a href="Chattisgarh High Court">Chattisgarh High Court</a> </li>
                <li><a href="Delhi High Court">Delhi High Court</a> </li>
                <li><a href="High Court of Meghalaya">High Court of Meghalaya</a> </li>
                <li><a href="Karnataka High Court">Karnataka High Court</a> </li>
                <li><a href="Madhya Pradesh High Court">Madhya Pradesh High Court</a> </li>
            </ul>
        </div>

    )
}

export default Sidebar
