import React,{ Component } from 'react';
import '../css/resultList.css';
import { Card,   CardBody, Collapse} from 'reactstrap';
import CollapseBody from './CollapseBody';
import pdf from './pdf.png';
import doc from './doc.png';
const config = require('../../config/AppConfig');

//webservice access:
const webserviceHost = config.webservice.host;
const webservicePort = config.webservice.port;
const webserviceIp = webserviceHost + ":" + webservicePort;
console.log(webserviceIp);

class DataComp extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = (
      {
        collapse:false,
        textClicked: true,
      }
    )
}

textClicked = () => {
  this.setState({textClicked: !this.state.textClicked});
}
toggle(){
  this.textClicked();
  this.setState( prev =>({
    collapse: !prev.collapse,
  }))
}
getImageName(){
return this.state.collapse ? 'up':'down'
}

render(){
  console.log("citation name + " + this.props.citation_name);
  let citationName = this.props.citation_name;
  // console.log(typeof(citationName));
  // console.log("[ResltList] | " + citationName);
  // let c = null;
  // if(citationName.includes("????")|| citationName.includes("....")){
  //       c = citationName.replace(citationName,'N/A');
       
  // }else{
  //   c = citationName;
  // }
  return(
    <div className="col-md-12" style={{marginTop:'20px'}}>
        <div className="card rounded result_card" style={{padding:'0px'}}>
          <div className="card-title "  style={{padding:'0px'}}>
             <center className="title">{this.props.case_title}</center>
        </div>

      <div className="card-body flex-column align-items-start">
        <div className="row">
           <div className="col-6 col-md-2 heading">Citation</div>
           <div className="col-6 col-md-3 value" >{citationName }</div>
           <div className="col-6 col-md-2 heading">Court</div>
           <div className="col-6 col-md-4 value" >{this.props.court_name}</div>
      </div>
        
      <div className="row">
          <div className="col-6 col-md-2 heading">Petitioner</div>
           <div className="col-6 col-md-3 value" >{this.props.petitioner_name}</div>
           <div className="col-6 col-md-2 heading">Judge</div>
           <div className="col-6 col-md-4 value">{this.props.judge_name}</div>
      </div>

      <div className="row">
           <div className="col-6 col-md-3"></div>
           <div className="col-4 col-md-3"></div>
           <div className="col-6 col-md-2 heading"></div>
           <div className="col-6 col-md-4 value"></div>
      </div>
        
      <div className="row">
           <div className="col-6 col-md-2 heading">Respondent</div>
           <div className="col-6 col-md-3 value">{this.props.respondent_name}</div>
           <div className="col-6 col-md-2 heading">Case Date</div>
           <div className="col-6 col-md-4 value">{this.props.date_of_judgement}</div>
      </div>

      <div className="row">
           <div className="col-8 col-md-3 heading"></div>
           <div className="col-4 col-md-3 value"></div>
           <div className="col-6 col-md-2 heading">{/*Case Number*/}</div>
           <div className="col-4 col-md-4 value">{/*Value case number*/}</div>
      </div>
        {/*<hr style={{marginLeft:'200px', marginRight:'200px'}}/>*/}

      <div className="row">
           <div className="col-6 col-md-2 heading">Download</div>
           <div className="col-6 col-md-2 value"><a href={webserviceIp + '/judgements/filter/download/doc?judgementId='+this.props.judgementId}><img src={doc} alt="doc"/></a>  | <a href={webserviceIp + '/judgements/filter/download/pdf?judgementId='+this.props.judgementId}><img src={pdf} alt="pdf"/></a></div>
           <div className="col-4 col-md-3 heading">{/*Case Number*/}</div>
           <div className="col-4 col-md-4 value">{/*Value case number*/}</div>
      </div>

      <div className="row">
          <div className="col-6 col-md-2  heading">Head Note</div>
          <div className="col-6 col-md-10 value">{this.props.head_note}</div>
      </div>
        <div className="row judgement_row">
        <div className="col-12 col-md-12 heading blink" onClick={this.toggle}><p className="judgement">{ this.state.textClicked ? 'Click To View Full Judgement' : 'Click To Hide Judgement  ' }</p></div>
          {/*<img src={imagesUrl[imageName]} alt="image_name" style={{float:'right'}} />*/}
        </div>
        
        <div className="row">
          <div className="col-sm-12 col-md-12">
            <Collapse isOpen={
              this.state.collapse}>
              <Card  style={{margin:'10px 10px 10px 0px'}}>
                <CardBody>
                  <CollapseBody
                      judgementId = {this.props.id}
                      JudgementDetails = {this.props.judgement}
                      judgementHtml = {this.props.judgement_html}  
                      HeadNotes = {this.props.head_note}
                    />
                </CardBody>
              </Card>
            </Collapse>
          </div>
        </div>
        </div>
    </div>
  </div>
  );
}
}
export default DataComp;