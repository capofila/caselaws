import React from 'react'
import { Form, Col, Button, Container, Row } from 'react-bootstrap'
import axios from 'axios';

export default class Career extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            contactNumber: '',
            currentAddress: '',
            permanentAddress: '',
            lookingForJob: '',
            typeOfJobLookingFor: '',
            yearOfExperience: '',
            experienceDetails: '',
            willingToRelocate: '',
            resumeFile: ''    
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {
        const url = "http://155.138.197.117:1337/careers";
        e.preventDefault();
        const formData = {
            firstName: this.state.firstName,
            lastName:  this.state.lastName,
            email:  this.state.email,
            contactNumber:  this.state.contactNumber,
            currentAddress:  this.state.currentAddress,
            permanentAddress:  this.state.permanentAddress,
            lookingForJob:  this.state.lookingForJob,
            typeOfJobLookingFor:  this.state.typeOfJobLookingFor,
            yearOfExperience:  this.state.yearOfExperience,
            experienceDetails:  this.state.experienceDetails,
            willingToRelocate:  this.state.willingToRelocate,
            resumeFile:  this.state.resumeFile
        }
        console.log("Submmiting :" ); console.log(formData);
        axios.post(url,formData)
        .then(response => {
            console.log(response);
            alert("Form submitted successfuly");
        })
        .then(error => {
            console.log(error);
        });
    }

    render() {
        const { firstName, lastName, email, contactNumber, currentAddress, permanentAddress, lookingForJob, typeOfJobLookingFor, yearOfExperience, experienceDetails, willingToRelocate, resumeFile } = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <br></br>
                        <h1>Job Seeker Form</h1>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="forFirstName">
                                    <Form.Label>First name</Form.Label>
                                    <Form.Control type="text" required placeholder="Enter first name" name="firstName" value={firstName} onChange={this.changeHandler} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="forLastName">
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type="text" required placeholder="Enter last name" name="lastName" value={lastName} onChange={this.changeHandler} />
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" required placeholder="Enter email" name="email" value={email} onChange={this.changeHandler} />
                                </Form.Group>

                                <Form.Group as={Col} controlId="forcompanyName">
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type="text" required placeholder="+91 980000000" name="contactNumber" value={contactNumber} onChange={this.changeHandler} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="forCurrentAddress">
                                <Form.Label>Current Address</Form.Label>
                                <Form.Control placeholder="Enter you current address" name="currentAddress" value={currentAddress} onChange={this.changeHandler} />
                            </Form.Group>

                            <Form.Group controlId="forCompanyAddress">
                                <Form.Label>Permanent Address</Form.Label>
                                <Form.Control placeholder="e.g : 1234 Main St" name="permanentAddress" value={permanentAddress} onChange={this.changeHandler} />
                            </Form.Group>
                            <hr></hr>
                            <Form.Row>
                                <Form.Group as={Col} controlId="exampleForm.SelectCustomSizeSm">
                                    <Form.Label>Looking for Job ?</Form.Label>
                                    <Form.Control as="select" size="md" custom  required name="lookingForJob" value={lookingForJob} onChange={this.changeHandler}>
                                        <option>--Select--</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="exampleForm.SelectCustomSizeSm">
                                    <Form.Label>If Yes, What type of Job ?</Form.Label>
                                    <Form.Control as="select" size="md" custom required name="typeOfJobLookingFor" value={typeOfJobLookingFor} onChange={this.changeHandler}>
                                        <option>--Select--</option>
                                        <option>Part Time</option>
                                        <option>Full Time</option>
                                    </Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="exampleForm.SelectCustomSizeLg" >
                                    <Form.Label>Expereince</Form.Label>
                                    <Form.Control as="select" size="md" custom required name="yearOfExperience" value={yearOfExperience} onChange={this.changeHandler}>
                                        <option>--Select--</option>
                                        <option>0 year</option>
                                        <option>1 year</option>
                                        <option>2 year</option>
                                        <option>3 year</option>
                                        <option>4 year</option>
                                        <option>5+ year</option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId="forCompanyAddress" >
                                    <Form.Label>Experience Details (if applicable)</Form.Label>
                                    <Form.Control placeholder="Example : I have 5 year of experience in criminal cases." name="experienceDetails" value={experienceDetails} onChange={this.changeHandler} />
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridZip" >
                                    <Form.Label>Willing to Relocate ?</Form.Label>
                                    <Form.Control as="select" size="md" custom required name="willingToRelocate" value={willingToRelocate} onChange={this.changeHandler}>
                                        <option>--Select--</option>
                                        <option>Yes - I can relocate to as per job requirements.</option>
                                        <option>No - I am strictly not willing to relocate at any circumstances.</option>
                                        <option>MayBe - It depends upon job and other factors. </option>
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <Form.Label>Resume Upload</Form.Label>
                                    <Form.File
                                        id="custom-file"
                                        label="Click here to upload your resume"
                                        custom
                                        name="resumeFile" required value={resumeFile} onChange={this.changeHandler}
                                    />
                                </Form.Group>
                            </Form.Row>
                            <Form.Group as={Col} id="formGridCheckbox">
                                <Form.Label>Disclaimer ! <i>By Clicking I agrre, your are agree and give my consent to  Caselaws and their representatives to contact me on submitted contact number and address. </i> </Form.Label>
                                <Form.Check type="checkbox" label="I agree" />
                            </Form.Group>
                            <Form.Row>
                                <Form.Group as={Col} id="formGridCheckbox">
                                    <Button variant="primary" type="submit">Submit</Button>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Button variant="primary" type="reset">Reset</Button>
                                </Form.Group>
                            </Form.Row>
                        </Form>
                    </Col>
                </Row>
                <br></br>
                <br></br>
            </Container>
        );
    };
}