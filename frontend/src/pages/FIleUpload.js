import axios from 'axios';
import React, { Component } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Navbar, Container, Nav, Spinner, Row, Col } from 'react-bootstrap'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LaptopWindows } from '@material-ui/icons';
import { Link, Route, Switch } from 'react-router-dom'


export class FIleUpload extends Component {
    state = {
        loading: false,
        file: null,
        formFilledData: null
    }

    fileUploadChangeHandler = async (event) => {
        event.preventDefault();
        this.setState({ file: event.target.files[0] })
    }


    handleSubmit = async (event) => {
        event.preventDefault();
        toast.info("Please wait while your details are being sent.")
        this.setState({ loading: true });
        const data = new FormData(event.target);

        let formdata = new FormData();
        formdata.append(`files.media`, this.state.file, this.state.file.name);
        formdata.append('data', JSON.stringify({
            "firstName": data.get('firstName'),
            "lastName": data.get('lastName'),
            "contactNumber": data.get('contactNumber'),
            "currentAddress": data.get('currentAddress'),
            "permanentAddress": data.get('permanentAddress'),
            "experienceDetails": data.get('experienceDetails'),
            "isLookingForChange": data.get('isLookingForChange'),
            "yearOfExperience": data.get('yearOfExperience'),
            "willingToRelocate": data.get('willingToRelocate'),
            "email": data.get('email')
        }))


        console.log(this.state.file);
        const upload_res_1 = await axios({
            method: 'POST',
            url: 'http://caselaws.org:1337/careers',
            data: formdata
        });

        if (upload_res_1.status == 200) {
            toast.success("Thank you for submitting your form, we will contact you shortly through email.", {
                position: "bottom-center",
                autoClose: 6000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: 0,
            });
        }

        setTimeout(() => {
            window.location.reload(false);
            this.setState({ loading: false });
        }, 6000);
    }

    


    render() {
        return (
            <Container flex>
                <div className="form-group" >
                    <form onSubmit={this.handleSubmit} id="fileUploadForm" >
                        {/* Same as */}
                        <fieldset className="container" >
                            <legend> Personal Details: </legend>
                            <input className="full-width-input" required type="text" name="firstName" ref="firstName" placeholder="First name" ></input>
                            <input className="full-width-input" required type="text" name="lastName" placeholder="Last name" ></input>
                            <input className="full-width-input" required type="text" name="contactNumber" placeholder="Contact number" ></input>
                            <input className="full-width-input" required type="text" name="email" placeholder="Email" ></input>
                            <textarea className="full-width-input" required name="currentAddress" rows="4" placeholder="Enter your current address" ></textarea>
                            <textarea className="full-width-input" required name="permanentAddress" rows="4" placeholder="Enter your Permanent address" ></textarea>
                        </fieldset>

                        <fieldset className="container" >
                            <legend > Professional Details: </legend>
                            <input className="full-width-input" required type="text" name="isLookingForChange" placeholder="Are you looking for job ? (Yes or No)" ></input>
                            <input className="full-width-input" required type="text" name="yearOfExperience" placeholder="How many years of experience do you have ?" ></input>
                            <input className="full-width-input" required type="text" name="willingToRelocate" placeholder="Are you willing to relocate ? (yes or No)" ></input>
                            <textarea className="full-width-input" required name="experienceDetails" rows="4" placeholder="Describe your experience in short." ></textarea>
                            <div className="custom-file" >
                                <input placeholder="Upload Resume" type="file" onChange={this.fileUploadChangeHandler} name="media" className="custom-file-input" id="validatedCustomFile" required></input>
                                <label className="custom-file-label"  > {this.state.file != null ? this.state.file.name : 'Upload Resume (doc,docx, pdf, JPEG format)'} </label>
                            </div>
                        </fieldset>
                        <br></br>
                        <div className="container fieldset" >
                            <button className="full-width-input btn-primary" disabled={this.state.loading}>  {this.state.loading ? 'Please wait...' : 'Submit'} </button>
                            <button className="full-width-input btn-danger" type="reset"> Reset </button>
                        </div>

                        <ToastContainer
                            position="bottom-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                        />
                    </form>
                </div>
            </Container>
        )
    }
}

export default FIleUpload