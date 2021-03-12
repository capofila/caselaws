import React from "react";
import { MDBRow, MDBCol, MDBCard, MDBCardBody, MDBIcon, MDBBtn, MDBInput, MDBContainer } from "mdbreact";

const Contact = () => {
    return (
        <section className="my-5">
            <MDBContainer>     <h2 className="h1-responsive font-weight-bold text-center my-5">
                Contact us
      </h2>
                <p className="text-center w-responsive mx-auto pb-5">
                We are always committed to provide better and authentic services to our users and we believe in the best quality service. Please let us know how we may serve you better or give us an email in case you need some information regarding the services we offer.
      </p>
                <MDBRow>
                    <MDBCol lg="5" className="lg-0 mb-4">
                        <MDBCard>
                            <MDBCardBody>
                                <div className="form-header blue accent-1">
                                    <h3 className="mt-2">
                                        <MDBIcon icon="envelope" /> Write to us:
                </h3>
                                </div>
                                <p className="dark-grey-text">
                                    We don't spam, don't hesitage to let us know your views.
              </p>
                                <div className="md-form">
                                    <MDBInput
                                        icon="user"
                                        label="Your name"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-name"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="envelope"
                                        label="Your email"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-email"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="tag"
                                        label="Subject"
                                        iconClass="grey-text"
                                        type="text"
                                        id="form-subject"
                                    />
                                </div>
                                <div className="md-form">
                                    <MDBInput
                                        icon="pencil-alt"
                                        label="Icon Prefix"
                                        iconClass="grey-text"
                                        type="textarea"
                                        id="form-text"
                                    />
                                </div>
                                <div className="text-center">
                                    <MDBBtn color="light-blue">Submit</MDBBtn>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="7">
                        <div
                            id="map-container"
                            className="rounded z-depth-1-half map-container"
                            style={{ height: "400px" }}
                        >
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76765.98321148289!2d-73.96694563267306!3d40.751663750099084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spl!2spl!4v1525939514494"
                                title="This is a unique title"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                style={{ border: 0 }}
                            />
                        </div>
                        <br />
                        <MDBRow className="text-center">
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating color="blue" className="accent-1">
                                    <MDBIcon icon="map-marker-alt" />
                                </MDBBtn>
                                <p>New Delhi, 110001</p>
                                <p className="mb-md-0">India</p>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating color="blue" className="accent-1">
                                    <MDBIcon icon="phone" />
                                </MDBBtn>
                                <p></p>
                                <p className="mb-md-0"></p>
                            </MDBCol>
                            <MDBCol md="4">
                                <MDBBtn tag="a" floating color="blue" className="accent-1">
                                    <MDBIcon icon="envelope" />
                                </MDBBtn>
                                <p>info@caselaws.org</p>
                                <p className="mb-md-0">www.caselaws.org</p>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

export default Contact;
