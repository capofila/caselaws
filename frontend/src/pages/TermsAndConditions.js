import React from 'react'
import { Button, Modal } from 'react-bootstrap' //npm install react-bootstrap bootstrap
import { useEffect, useState } from "react";

export default function TermsAndConditions() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function createMarkup() {
        return {__html: `
        <ul>
        <li><strong>GENERAL TERMS</strong></li>
        </ul>
        <p>Your use of CaseLaws Platform and all related content, including but not limited to software, online data converters, documentation, images, etc., is subject to these Terms of Service. Please read the&nbsp;Terms and Conditions&nbsp;carefully before using the Platform.</p>
        <p>The CaseLaws Platform may only be accessed and used by the by any individual in accordance with these Terms of Service and such access by the individual shall constitute an acceptance of these Terms of Service. User Agreement is being concluded and executed at New Delhi, India. By accessing or using CaseLaws Services, you agree to be bound by everything in this Agreement, and to the collection and use of your information as set forth in the&nbsp;CaseLaws Privacy Policy, whether or not you are a registered user of our Services. <strong>If you don't agree, please don't use CaseLaws Platform</strong>.</p>
        <p>We offer the platform "AS IS" and without warranties. If you are registering an account or using the Portal on behalf of an individual or entity other than yourself, you represent that you are authorized by such individual or entity to accept these Terms of Use on such individual or entity's behalf.</p>
        <p>By using the portal, and/or by registering with us, you signify that you agree to these terms of use, including that you consent to the information practices disclosed in our Privacy Policy,&nbsp;which is incorporated herein by reference, and that you are agree to comply with applicable laws, governed and interpreted by the country (hereinafter referred to as &ldquo;India&rdquo;).</p>
        <p>CaseLaws retains the right to alter, remove, improve or adapt any, including but not limited to, service and features offered at any time at its sole discretion without giving any notice.</p>
        <ul>
        <li><strong>LIMITATION OF USE</strong></li>
        </ul>
        <p>The Content on the Web portal is for personal use only and not for commercial exploitation.</p>
        <p>You may not decompile, reverse engineer, disassemble, rent, lease, loan, sell, sub-license, or create derivative works from the Web Portal or the Content. Nor may you use any network monitoring or discovery software to determine the Portal architecture, or extract information about usage or users.</p>
        <p>You may not use any robot, spider, other automatic device, or manual process to monitor or copy our Web Portal or the Content without CaseLaws prior written permission.</p>
        <p>You may not alter, add, amend, copy, modify, reproduce, republish, distribute, display, or transmit for commercial, non-profit or public purposes all or any portion of the Web Portal, except to the extent permitted above.</p>
        <p>You may not use or otherwise export or re-export the Web Portal or any portion thereof, the Content or any software available, on or through the Web Portal in violation of the export control laws and regulations of India. Any unauthorized use of the Web Portal or its Content is prohibited Combine the whole or any part of the Data with any other software, data or material.</p>
        <p>The performance of the Caselaws platform Service will vary with the hardware on which it is used.</p>
        <p>Downloaded Data shall not be stored or used in an archival database or other searchable database except as expressly permitted by this Agreement.</p>
        <p>user shall use its reasonable endeavors to keep any Downloaded Data secure and to prevent any third party duplicating or otherwise reproducing in whole or in part Downloaded Data or any part thereof other than for the exercise of the rights granted by this Agreement, and shall use its reasonable endeavors to prevent whether by act or omission such duplication or reproduction except as permitted by the terms of this Agreement.</p>
        <p>The text of all the judgments provided on the portal are computer generated. The authenticity, correctness and preciseness of the text of the judgments must be verified from the certified copy of the judgment.</p>
        <ul>
        <li><strong>WEBPORTAL USAGE TERMS</strong></li>
        </ul>
        <p>The services so offered by CaseLaws, are subject to the user agreeing to all the terms and conditions. Notwithstanding any / all clauses, the terms shall be applicable mutatis mutandis on user.</p>
        <p>CaseLaws grants the user a non-exclusive, non-transferable, revocable, limited right to access and use for research purpose the online services and materials from time to time made available.</p>
        <p>No material/content downloaded from the Web Portal of CaseLaws shall be reproduced, transmitted or stored in any other Web Portal nor shall any of its pages be disseminated, either in electronic or non-electronic form, or included in any public or private electronic retrieval system or service without the prior written permission of CaseLaws.</p>
        <p>It is made abundantly clear that CaseLaws does not have absolute control over the contents posted on the web portal and hence does not guarantee the accuracy, quality or integrity of such content. The views expressed in the article section of the web portal are those of the respective authors and not of CaseLaws. Any illegal or offensive content posted on the portal, if detected, should be brought to CaseLaws attention for immediate action. CaseLaws will not be responsible in any manner for any defamatory or contemptuous matter posted herein.</p>
        <p>You may not misidentify yourself or impersonate any person or entity, or falsely state or otherwise misrepresent your affiliation with a person or entity (e.g., pretend to be a different person or from a different company or organization).</p>
        <p>The Portal may only be used in good faith and may not be used to transmit or otherwise make available any information that is false or that you do not have a right to make available under any law or under contractual relationships (such as inside information, proprietary and confidential information learned or disclosed as part of employment relationships or under nondisclosure agreements), to threaten, abuse, harass, or invade the rights of any person or entity, to infringe on any person or entity's intellectual property rights, or in any other way that could reasonably be deemed unethical, illegal, or offensive.</p>
        <p>Unless you have our prior written consent, you will not post advertisements or promotional materials, solicit participants and/or visitors of the Portal, reproduce, duplicate, copy, sell, resell or exploit for any commercial purposes, any portion of the Portal or its Services, use of the Portal or it Services, or access to the Portal or its Services.</p>
        <p>You are prohibited from using any type of computer 'worm,' 'virus' or any other device that is intended or is likely to disrupt, overload, or otherwise impair the workings of any part of the Portal. If you do engage in such conduct, the resulting damage will be hard to quantify as a fixed amount and thus you hereby agree to pay us liquidated damages in the amount of Rs. 2,00,000 for each day that the Portal is damaged until the Portal is completely repaired and further unquantified damages which will occur due to your act will be accessed and you shall be liable to pay the same. This amount is derived by estimating the value of (1) the loss of good will caused by an inoperable portal, (2) the time and money it will take to repair the Portal and to address the concerns of visitors. We are required to use reasonable efforts to repair the Portal as quickly as possible. This clause will not prohibit us from seeking additional compensation if your conduct injures us in a way not expressly contemplated herein.</p>
        <p>You are not permitted to collect or store personal data about other users.</p>
        <p>You are not permitted to access the Portal for the purpose of data mining or extracting content from the Portal beyond your personal end use.</p>
        <p>You are permitted to use the Portal to find a job and to search judgements or any other services introduced or offered by CaseLaws Platform in future. You are not permitted to use the Portal for any other reason other than described above. Things which are not allowed shall include, but are not limited to, using the Portal to order to solicit, hire, engage or otherwise work with the employees or affiliates of caselaws.org or the Lawyers, to interfere or attempt to interfere in the relationship between caselaws.org and such employees, affiliates, Lawyers, or for any other purpose other than described herein. If you do engage in such conduct, the resulting damage will be hard to quantify as a fixed amount and thus you hereby agree to pay us liquidated damages in the amount of Rs.3,50,000&nbsp;for each Use, and further unquantified damages which will occur due to your act will be accessed and you shall be liable to pay the same. You further agree that this liquidated damages provision reasonably approximates actual costs, losses, and expenses which would be incurred by caselaws.org due to any such Impermissible Use. You also agree that nothing in this section is intended to limit caselaws.org&rsquo;s right to obtain injunctive and other relief as may be appropriate.</p>
        <p>You may not forge headers or otherwise manipulate identifiers in order to disguise the origin of any Content transmitted through the Portal.</p>
        <p>In the event you submit information through the Portal, you agree to provide true, accurate, current and complete information and agree to promptly update the information to keep it true, accurate, current and complete. If you provide any information that is untrue, inaccurate, not current or incomplete, and/or we have reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, we have the right to suspend or terminate your participation in the Portal and/or refuse any and all current or future use of the Portal or its services (or any portion thereof).</p>
        <p>You understand and agree that all information, statistical data, text, software, music, sound, photographs, graphics, video, messages or other materials (Content), whether publicly posted or privately transmitted by you and other users of our service, are the sole responsibility of the person from which such Content originated. This means that you, and not us, are entirely responsible for all Content that you upload, post, email or otherwise transmit via the Portal. We do not control all of the Content posted via the Portal and, as such, do not guarantee the accuracy, integrity or quality of such Content. You understand that by using the Portal, you may be exposed to Content that is offensive, indecent or objectionable. Under no circumstances will we be liable in any way for any Content, including, but not limited to, for any errors or omissions in any Content, or for any loss or damage of any kind incurred as a result of the use of any Content posted, emailed or otherwise transmitted via the Portal.</p>
        <p>You acknowledge that we may or may not pre-screen Content, but that our designees and we shall have the right (but not the obligation) in our sole discretion to prescreen, refuse, or move any Content that is available via the Portal. Without limiting the foregoing, our designees and we shall have the right (but not the obligation) to remove any Content that violates this agreement or is otherwise objectionable.</p>
        <p>We with an intention to provide the best service possible could ask you to share more information as and when needed.</p>
        <p>All rights are not expressly granted herein are reserved</p>
        <ul>
        <li><strong>MODIFICATIONS</strong></li>
        </ul>
        <p>The Platform may contain ambiguity or typographical errors or inaccuracies and may not be complete or current. We reserve the right to correct any errors, inaccuracies or omissions and to change or update information at any time, without prior notice.</p>
        <p>CaseLaws reserves the right to modify, add, or delete any feature at any time and in its sole discretion. Functionality and offerings may be added, removed or eliminated. Usage limits may be added or revised at any time with notice to you.</p>
        <p>All such error corrections, bug fixes, patches, updates or other modifications shall be the sole property of CaseLaws.</p>
        <p>CaseLaws reserves the right to modify the terms and at its sole discretion. Such modifications shall become effective after it is updated on webportal.</p>
        <p>CaseLaws has the right to prevent access to all or part of the Web Portal without notice, if the conduct of the user is in contravention with the Terms and Conditions of Use or the applicable laws.</p>
        <p>&nbsp;CaseLaws shall have a right to make such additions to, deletions from and other modifications, as it may deem fit, of the database and in the database, and/ or the manner of presenting and providing such databases, including the basic structure and features thereof, without giving notice.</p>
        <p>CaseLaws shall not be liable or responsible, whether under law or equity, for any delays, defaults or interruptions in the performance of the Service.</p>
        <p>CaseLaws has the right to discontinue service, or deny access to anyone who violates our policies or the terms and conditions stated herein, without prior notice or warning.</p>
        <ul>
        <li><strong>CONFIDENTIALITY</strong></li>
        </ul>
        <p>Each party agrees to keep confidential all confidential information disclosed to it by the other party in accordance herewith, and to protect the confidentiality thereof in the same manner it protects the confidentiality of similar information and data of its own (at all times exercising at least a reasonable degree of care in the protection of confidential information); provided, however, that neither party shall have any such obligation with respect to use of disclosure to others not parties to this Agreement of such confidential information as can be established to: (1) have been known publicly; (2) have been known generally in the industry before communication by the disclosing party to the recipient; (3) have become known publicly, without fault on the part of the recipient, subsequent to disclosure by the disclosing party; (4) have been known otherwise by the recipient before communication by the disclosing party; or (5) have been received by the recipient without any obligation of confidentiality from a source (other than the disclosing party) lawfully having possession of such information.</p>
        <p>CaseLaws retains the right to share your relevant information without giving you any notice or intimation to provide you better service, if you do not agree with that then do not use CaseLaws platform as it is required in career section.</p>
        <ul>
        <li><strong>INDEMNIFICATION</strong></li>
        </ul>
        <p>The User agrees that caselaws.org is not responsible for any harm that this service may cause. The User agrees to indemnify, defend, and hold caselaws.org harmless from and against any and all liability and costs incurred in connection with any loss, liability, claim, demand, damage, and expenses arising from or in connection with the contents or use of the Service. The User agrees that this defense and indemnity shall also apply to any breach by the User of the Agreement or the foregoing representations, warranties and covenants. The User further agrees that this defense and indemnity shall include without limitation lawyer fees and costs. The User also agrees that this defense and indemnity shall apply to caselaws.org, its founders, officers and employees. caselaws.org reserves the right, at its own expense, to assume the exclusive defense and control of any matter otherwise subject to indemnification by the User and the User shall not in any event settle any matter without the written consent of caselaws.org.</p>
        <ul>
        <li><strong>COMMUNICATIONS AND OTHER DATA</strong></li>
        </ul>
        <p>Caselaws.org is not responsible for any loss of data resulting from accidental or deliberate deletion, network or system outages, backup failure, file corruption, or any other reasons.&nbsp;</p>
        <ul>
        <li><strong>COPYRIGHT AND INTELLECTUAL PROPERTY RIGHT</strong></li>
        </ul>
        <p>The user is also cautioned against any conduct on his part that infringes or purports to infringe the copyright or other proprietary rights or laws. The user shall not, under any circumstances whatsoever, use the printouts of the material available on this Web Portal for any purpose that violates the copyright or any other proprietary rights of CaseLaws. The user shall not remove the copyright notices or other notices from the printouts of material taken from the Web Portal.</p>
        <p>Except as expressly provided in the Terms &amp; Conditions of Use of the Web Portal CaseLaws, nothing contained herein shall be construed as conferring any license or right, by implication, estoppel or otherwise, under copyright or other intellectual property rights.</p>
        <ul>
        <li><strong>TERMINATION</strong></li>
        </ul>
        <p>The services so offered by CaseLaws, are subject to the user agreeing to all the terms and conditions of the license. In case any of the terms are revoked, CaseLaws is entitled to terminate &amp; discontinue the user&rsquo;s right to access the Service.&nbsp;</p>
        <ul>
        <li><strong>ERRORS AND CORRECTIONS</strong></li>
        </ul>
        <p>CaseLaws makes reasonable effort to ensure that the information provided on the Web Portal is accurate but does not represent or warrant that the information available on or through the Web Portal will be correct, accurate, reliable, uninterrupted, or timely.</p>
        <p>CaseLaws does not represent or warrant that the Web Portal will be error free, free of viruses or other harmful components, or that the defects will be corrected.</p>
        <p>The user is responsible for implementing sufficient procedures and checkpoints to satisfy his particular requirements for accuracy of data, input and output and for maintaining a means, external to the Web Portal for the reconstruction of any lost data.</p>
        <ul>
        <li><strong>NO LEGAL ADVICE / PROCUREMENT REQUEST</strong></li>
        </ul>
        <p>Material or information contained on or made available through the Web Portal is not intended to and does not constitute legal advice nor does it, in any manner establish a client &ndash; advocate relationship. caselaws in the Court database provides its own citation and in addition also provides the equivalent citations applicable to relevant case law published by other publishers. By doing so caselaws is facilitating the user to access the database through various search features. Coverage of other/ all publisher citations should be incidental and not mandatory and user thus cannot claim the availability of other publisher citations as a matter of right. caselaws is not obliged to attend to procurement requests of users. Without prejudice to its rights, however, caselaws shall on its discretion procure the requested document which if procured shall be made available to user as part of its database.</p>
        <ul>
        <li><strong>ADVERTISEMENTS</strong></li>
        </ul>
        <p>CaseLaws may contain advertisements and sponsorships. Advertisers and sponsors are responsible for ensuring that material submitted for inclusion on the Web Portal is accurate and complies with applicable laws.</p>
        <p>CaseLaws will not be responsible for the illegality of, or any error or inaccuracy in advertisers or sponsors materials.</p>
        <ul>
        <li><strong>PRIVACY</strong></li>
        </ul>
        <p>The user of the Web Portal CaseLaws is subject to CaseLaws Privacy Policy.</p>
        <ul>
        <li><strong>NOTICE</strong></li>
        </ul>
        <p>Any notice required to be given pursuant to this Agreement shall be in writing and mailed by certified or registered mail, return receipt requested or delivered by a national overnight express service. Either party may change the address to which notice or payment is to be sent by written notice to the other party pursuant to the provisions of this paragraph.</p>
        <ul>
        <li><strong>SEVERABILITY OF PROVISIONS</strong></li>
        </ul>
        <p>The Terms and Conditions of Use incorporate by reference, any notices contained on the Web Portal, the Privacy Policy, Copyright, Terms and Conditions, which together constitute the entire agreement with respect to access and use of the Web Portal. If any provision of the terms of use is unlawful, void or unenforceable, then that provision shall be deemed severable from the remaining provisions and shall not affect the validity and enforceability of the remaining provisions.</p>
        <ul>
        <li><strong>REMEDIES FOR VIOLATIONS</strong></li>
        </ul>
        <p>CaseLaws reserves the right to seek all remedies available at law and equity for violations of the Terms and Conditions of Use, including but not limited to, the right to block access from a particular Internet address to CaseLaws webportal and its features.</p>
        <ul>
        <li><strong>GOVERNING LAW AND JURISDICTION</strong></li>
        </ul>
        <p>The Terms and Conditions of Use are governed by and construed in accordance with the Indian Law and any action arising out of, or relating to these terms shall be subject to the exclusive jurisdiction of the appropriate Courts at New Delhi only and you hereby consent and submit to the personal jurisdiction of such courts for the purpose of litigating any such action.</p>
        <ul>
        <li><strong>EXCLUSION OF LIABILITY</strong></li>
        </ul>
        <p>CaseLaws makes reasonable effort to ensure that the information provided on the Web Portal is accurate but does not guarantee or warrants its accuracy, adequacy, correctness, validity, completeness or suitability for any purpose.</p>
        <p>The information/material provided on the Web Portal is provided on an &ldquo;As Is&rdquo; basis. CaseLaws accepts no responsibility with respect to the information on the Portal expressly disclaims to the maximum limit permissible by law, all warranties, express or implied, including but not limiting to implied warranties of merchantability, fitness for a particular purpose and non-infringement.</p>
        <p>CaseLaws shall not be liable in contract, tort, delict or otherwise for any loss of whatsoever kind howsoever arising suffered in connection with the Service (whether or not caused by the negligence of CaseLaws)</p>
        <p>CaseLaws shall not be liable in contract, tort, delict or otherwise for any loss of revenue business, anticipated savings or profits, loss of goodwill or data or for any indirect or consequential loss whatsoever, howsoever arising suffered in connection with the Service (whether or not caused by the negligence of CaseLaws).</p>
        <p>Without prejudice, in no event shall CaseLaws, its Affiliates and/or Contributors be liable to end user for any claim(s) relating in any way to:</p>
        <ol>
        <li>User&rsquo;s inability or failure to perform legal or other research related work or to perform such legal or other research or related work properly or completely, even if assisted by CaseLaws, its Affiliates and/or Contributors or any decision made or action taken by user in reliance on the Data.</li>
        <li>any lost profits (whether direct or indirect) or any consequential, exemplary incidental, indirect or special damages relating in whole or in part to Subscribers&rsquo; rights under this Agreement or use of or inability to use the Service, Features or Data even if Suppliers, its Affiliates and/or Contributors have been advised of the possibility of such damages.</li>
        </ol>
        <p>user shall accept sole responsibility for and CaseLaws shall not be liable for the use of the Service by end user, or any User and shall hold Supplier harmless and fully indemnified against any claims, costs, damages, loss and liabilities arising out of any such use</p>
        <p>CaseLaws disclaims all responsibility for any loss, injury, liability or damage of any kind resulting from and arising out of, or any way related to:&nbsp;</p>
        <ol>
        <li>Any errors in or omissions from the Web Portal and its content, including but not limited to technical inaccuracies and typographical errors</li>
        <li>Any third party Web Portals or Content therein directly or indirectly accessed through links in the Portal, including but not limited to any errors in or omissions there from</li>
        <li>The unavailability of this Portal or any portion thereof;</li>
        <li>Your use of any equipment or software in connection with the Portal; or&nbsp;</li>
        <li>&nbsp;Your use of the Portal.</li>
        <li>CaseLaws. shall not be responsible if any information/page is downloaded from CaseLaws and after downloading complete/partial, text/information is altered/removed/obscured contained therein.</li>
        </ol>
        <ul>
        <li><strong>LIMITATION OF LIABILITY</strong></li>
        </ul>
        <p>you expressly understand and agree that we shall not be liable for any, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of revenues, profits, goodwill, use, data, failure to realize expected savings, or other intangible losses (even if we have been advised of the possibility of such damages), resulting from: (i) the use or the inability to use the portal; (ii) the cost of procurement of substitute goods and services resulting from any goods, data, information or services purchased or obtained or messages received or transactions entered into through or from the portal; (iii) invalid destinations, transmission errors, or unauthorized access to or alteration of your transmissions or data; (iv) statements or conduct of any third party on the portal; (v) your failure to receive any third party services or products requested through the portal or (vi) any other matter relating to the portal.</p>
        <ul>
        <li><strong>LINK TO OTHER WEBPORTALS AND LINKING DISCLAIMER</strong></li>
        </ul>
        <p>Third party Content may appear on the Web Portal or may be accessible via links from the Web Portal. CaseLaws shall not be responsible for and assumes no liability for any mistakes, misstatements of law, defamation, slander, libel, omissions, falsehood, obscenity, pornography or profanity in the statements, opinions, representations or any other form of Content contained in any third party Content appearing on the Web Portal. CaseLaws has no control or authority either over the Content or presentations thereof, which solely represent the thoughts of the author and is neither endorsed by, nor does it reflect the belief of CaseLaws. Any claim either in contract, tort or otherwise relating to damages, loss, injury or determined caused by, or on account of reliance on such Content, is wholly disclaimed by CaseLaws.</p>
        <ul>
        <li><strong>Force Majeure</strong></li>
        </ul>
        <p>CaseLaws&rsquo;s performance under this Agreement is subject to interruption and delay due to causes beyond its reasonable control such as acts of God, acts of any Government, war or other hostility, civil disorder, the elements, fire, explosion, power failure, failure of the Internet and other networks beyond the control of CaseLaws, equipment failure, industrial or labour dispute, inability to obtain essential supplies and the like</p>
        <ul>
        <li><strong>Dispute Resolution</strong></li>
        </ul>
        <p>Any dispute or difference between CaseLaws and end user arising out of or relating to the existence, validity, interpretation, performance or termination of, or otherwise in connection with this Agreement ("Dispute"), shall at first instance be attempted to be amicably settled between the parties through good faith negotiations. Either party shall be entitled to invoke such negotiations by giving to the other party a notice to that effect ("Dispute Notice"). If a Dispute is not resolved by way of good faith negotiations within a period of Sixty (60) days from the date when the Dispute Notice was received by the receiving party, then either party shall be entitled to refer the Dispute to arbitration in the manner described below</p>
        <p>Any Dispute not resolved by way of good faith negotiations within a period of sixty (60) days from the date when the Dispute Notice was received by the receiving party, shall be finally resolved by arbitration.</p>
        <p>The provisions of the Arbitration and Conciliation Act, 1996, as amended ("Arbitration Act"), will apply to such arbitration:</p>
        <p>The arbitration shall be conducted by a single arbitrator who shall be appointed by the mutual consent of both parties. If the parties are not able to reach a decision to appoint the arbitrator within sixty (60) days of the date when the good faith negotiations mentioned above have failed, then the Dispute shall be referred to a panel of three (3) arbitrators. One (1) arbitrator shall be appointed by each party within thirty (60) days of the parties failing to reach an agreement to appoint the sole arbitrator as aforesaid. The two (2) arbitrators so appointed by the parties shall appoint the third presiding arbitrator within thirty (30) days of their appointment, failing which the third presiding arbitrator shall be appointed in accordance with the provisions of the Arbitration Act.</p>
        <p>The arbitration proceedings shall be conducted in English.</p>
        <p>The place of arbitration shall be New Delhi, India.</p>
        <p>The award of the arbitrator(s) shall be final and binding on both parties. The arbitrator(s) shall state reasons for its/their findings in writing.</p>
        <p>The costs of arbitration shall be determined by the arbitrator(s)</p>
        <p>In relation to any arbitration proceedings, the parties agree that the courts at Delhi, shall have exclusive jurisdiction to the extent the court has jurisdiction under the Arbitration Act.</p>
        <ul>
        <li><strong>&nbsp;Disclaimer of Warranties</strong></li>
        </ul>
        <p>he user expressly agrees that use of the service is at the user's sole risk. the service is provided on an "as is" and "as available" basis. CaseLaws expressly disclaims all warranties of any kind, whether express or implied, including, but not limited to the implied warranties of merchantability, fitness for a particular purpose and non-infringement. CaseLaws makes no warranty that the service will meet user's requirements, that the service will be uninterrupted, timely, secure, or error-free; nor does CaseLaws make any warranty as to the results that may be obtained from the use of the service or as to the accuracy or reliability of any information obtained through the service or that defects in the software will be corrected. CaseLaws makes no warranty regarding any goods or services purchased or information obtained through the service or any transactions entered into through the service.</p>
        <p>no advice or information, whether oral or written, obtained by the user from CaseLaws shall create any warranty not expressly stated herein.</p>
        <ul>
        <li><strong>Entire Agreement</strong></li>
        </ul>
        <p>This Agreement incorporates by reference our Privacy Policy, constitutes the entire and whole Agreement between User and caselaws.org, and is intended as a complete and exclusive statement of the terms of the Agreement. This Agreement shall supersede all other communications between the parties with respect to the subject matter hereof and supersedes and replaces all prior or contemporaneous understandings or agreements, written or oral, regarding such subject matter. This Agreement may be amended only upon execution of a subsequent agreement or upon User's failure to object within 10 days to modifications posted on the caselaws.org webportal.</p>
        <h1><br /><br /><br /></h1>`};
      }
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Terms &amp; conditions.
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body dangerouslySetInnerHTML={createMarkup()}>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Decline</Button>
                    <Button variant="primary" onClick={handleClose}>Accept</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
