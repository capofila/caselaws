import React from 'react';
import TermsAndConditions from '../pages/TermsAndConditions'
function Footer() {
  return (
    <div className="row" id="copyright">

      <div className="col-md-12">

        <footer className="page-footer font-small">

          <div className="footer-copyright text-center py-3 h-10">

          All rights reserved by www.caselaws.org &copy; 2020 Copyright: Caselaws

          </div>

        </footer>
        <TermsAndConditions></TermsAndConditions>
      </div>

    </div>
  )
}
export default Footer;
