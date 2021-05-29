import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MDBRow, MDBCol, MDBIcon, MDBBtn, MDBContainer } from "mdbreact";

class Contact extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      mobile: '',
      message: ''
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    const url = 'http://155.138.197.117:1337/contact-uses'
    axios.post(url, this.state)
      .then(response => {
        console.log(response);
        if (typeof response.data.response) {
          toast.success("Thank your ! we have received your request, we will reach out you on your submitted contact details.")
          this.resetForm()
        } else {
          toast.error("Oops! We couldn't save your details, please retry", { autoClose: false });
        }

      })
      .catch(error => {
        toast.error("Failed to send detail, please check all fields and submit again.");
        console.log(JSON.stringify(error.response));
      });
  }

  resetForm() {
    this.setState({ name: '', email: '', mobile: '', message: '' })
  }

  render() {
    return (
        <MDBContainer>
          <h2 className="h1-responsive font-weight-bold text-center my-5">Contact us</h2>
          <MDBRow>
            <MDBCol lg="5" className="lg-0 mb-4">
              <ToastContainer autoClose={false} />
              <div className="App">
                <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile</label>
                    <input type="text" className="form-control" id="mobile" value={this.state.mobile} onChange={this.onMobileChange.bind(this)} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
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
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }
  onMobileChange(event) {
    this.setState({ mobile: event.target.value })
  }
}

export default Contact;