import React from "react";
import axios from 'axios'
import { Form, Col, Button, Container, Row } from 'react-bootstrap'

class Employer extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            contactNumber: '',
            companyName: '',
            address: '',
            profileType: '',
            jobType: '',
            jobDescription: '',
            profileDescription: '',
            salaryOffered: '',
            numberOfOpenings: '',
            disclaimer: ''
        }
    }

    changeHandler = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        const url = "http://155.138.197.117:1337/employers";
        const formData = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            contactNumber: this.state.contactNumber,
            companyName: this.state.companyName,
            address: this.state.address,
            profileType: this.state.profileType,
            jobType: this.state.jobType,
            jobDescription: this.state.jobDescription,
            profileDescription: this.state.profileDescription,
            salaryOffered: this.state.salaryOffered,
            numberOfOpenings: this.state.numberOfOpenings,
            disclaimer: this.state.disclaimer
        }
        axios.post(url, formData)
            .then(response => {
                console.log("Response"); console.log(response);
                if (typeof response.data.response) {
                   console.log(response);
                   alert("Thank your ! we have recieved your request, we will reach out you on your submitted contact details.")
                } else {
                    alert("Oops! We coudn't save your details, please retry");
                }
            })
            .then(error => {
                console.log(error)
            });

    }

    render() {
        const { firstName, lastName, email, contactNumber, companyName, address, profileType, jobType, jobDescription, profileDescription, salaryOffered, numberOfOpenings, disclaimer } = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <br></br>
                        <h1>Employer Request </h1>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="firstName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter first name"
                                        name="firstName"
                                        value={firstName}
                                        onChange={this.changeHandler}
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="forLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Enter last name"
                                        name="lastName"
                                        value={lastName}
                                        onChange={this.changeHandler} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control required type="email" placeholder="Enter email"
                                        name="email"
                                        value={email}
                                        onChange={this.changeHandler} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="forcompanyName">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control required type="text" placeholder="+91 980000000"
                                        name="contactNumber"
                                        value={contactNumber}
                                        onChange={this.changeHandler} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="forCompanyName">
                                <Form.Label>Company Name</Form.Label>
                                <Form.Control required placeholder="e.g : ABC Pvt. Ltd."
                                    name="companyName"
                                    value={companyName}
                                    onChange={this.changeHandler} />
                            </Form.Group>

                            <Form.Group controlId="address">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="e.g : 1234 Main St"
                                    name="address"
                                    value={address}
                                    onChange={this.changeHandler} />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.SelectCustomSizeSm">
                                <Form.Label>Employee/Candidate Profile Details</Form.Label>
                                <Form.Control as="select" size="md" name="profileType" custom value={profileType} onChange={this.changeHandler}>
                                    <option>--Select--</option>
                                    <option>Interns</option>
                                    <option>Experienced</option>
                                    <option>Both</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                                <Form.Label>Job type </Form.Label>
                                <Form.Control as="select" size="md" custom name="jobType" value={jobType} onChange={this.changeHandler}>
                                    <option>--Select--</option>
                                    <option value={"parttime"}>Part Time</option>
                                    <option>Full Time</option>
                                    <option>Both</option>
                                </Form.Control>
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>Job Description</Form.Label>
                                    <Form.Control
                                        name="jobDescription"
                                        value={jobDescription}
                                        onChange={this.changeHandler} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Profile/Post</Form.Label>
                                    <Form.Control
                                        name="profileDescription"
                                        value={profileDescription}
                                        onChange={this.changeHandler} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="salaryOffered">
                                    <Form.Label>Salary Offered</Form.Label>
                                    <Form.Control
                                        name="salaryOffered"
                                        value={salaryOffered}
                                        onChange={this.changeHandler} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="numberOfOpenings">
                                    <Form.Label>Number of Openings</Form.Label>
                                    <Form.Control as="select" size="md" custom name="numberOfOpenings" value={numberOfOpenings} onChange={this.changeHandler}>
                                        <option>--Select--</option>
                                        <option>1-5</option>
                                        <option>5-10</option>
                                        <option>10-15</option>
                                        <option>15+</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            {/* <Form.Group controlId="formGridCheckbox">
                                <Form.Label>Disclaimer ! <i>I agree and give my consent to  Caselaws and their representatives to contact me on submitted contact number and address. </i> </Form.Label>
                                <Form.Check type="checkbox" label="I agree" name="disclaimer" value={disclaimer} onChange={this.changeHandler} />
                            </Form.Group> */}

                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    };
}

export default Employer;
