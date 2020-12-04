import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import '../css/collapse.css';
import renderHTML from 'react-render-html';

class CollapseComponent extends Component{
  constructor(props){
    super(props);
   
    this.toggle = this.toggle.bind(this);
    this.downloadPdf = this.downloadPdf.bind(this);
    this.state = {
      activeTab: '1'
    };

  }
  toggle(tab){
    if(this.state.activeTab !== tab){
      this.setState({
        activeTab: tab
      })
    }
  }
  
  downloadPdf(){
     console.log(this.props.judgement_html);
      fetch('',{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        PDFData: this.props.judgement_html,
      }),
    })
  }

  render(){
  //console.log("[collapse Body : ] "  + renderHTML("'" + this.props.judgementHtml+ "'"));
  
    return(
      <div>
      <Nav tabs>
        <NavItem className="">
          <NavLink
            className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggle('1'); }} style={{backgroundColor:'#0091ea',color:'white',fontWeight:'bold'}}>
                Judgement
          </NavLink>
        </NavItem>

        {/*<NavItem>
          <NavLink
            className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggle('2'); }}>
              Tab3
          </NavLink>
        </NavItem>*/}

 </Nav>

 <TabContent activeTab={this.state.activeTab}>
   <TabPane tabId="1">
     <Row>
       <Col sm="12">
         <div className="judgement_block">
              <div id={this.props.judgementId}>
              {renderHTML("'" + this.props.judgementHtml+ "'")}
              </div> 
         </div>
       </Col>
     </Row>
   </TabPane>
   <TabPane tabId="2">
     <Row>
       <Col sm="12">

       </Col>
     </Row>
   </TabPane>
 </TabContent>
</div>
    );
  }

}
export default CollapseComponent;
