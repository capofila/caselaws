import axios from 'axios';
import React, { Component } from 'react'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { usePromiseTracker } from "react-promise-tracker";

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
        this.setState({ loading: true });
        event.preventDefault();
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

        console.log('file upload handle submit ', upload_res_1)
        if (upload_res_1.status == 200) {
            alert("Form submitted successfully");
            this.setState({ loading: false });
        }
    }


    render() {
        return (
            <div className="form-group" >
                <form onSubmit={this.handleSubmit} >
                    <div id="spinner">
                        {
                            this.state.loading == true ? < Loader
                                type="ThreeDots"
                                color="#00BFFF"
                                height={100}
                                width={50}
                            /> : ''
                        }
                    </div>
                    <fieldset className="container" >
                        <legend> Personal Details: </legend>
                        <input className="half-width-input" required="true" type="text" name="firstName" placeholder="First name" ></input>
                        <input className="half-width-input" required="true" type="text" name="lastName" placeholder="Last name" ></input>
                        <input className="half-width-input" required="true" type="text" name="contactNumber" placeholder="Contact number" ></input>
                        <input className="half-width-input" required="true" type="text" name="email" placeholder="Email" ></input>
                        <textarea className="half-width-input" required="true" name="currentAddress" rows="4" placeholder="Enter your current address" ></textarea>
                        <textarea className="half-width-input" required="true" name="permanentAddress" rows="4" placeholder="Enter your Permanent address" ></textarea>
                    </fieldset>

                    <fieldset className="container" >
                        <legend > Professional Details: </legend>
                        <input className="half-width-input" required="true" type="text" name="isLookingForChange" placeholder="Are you looking for job ? (Yes or No)" ></input>
                        <input className="half-width-input" required="true" type="text" name="yearOfExperience" placeholder="How many years of experience do you have ?" ></input>
                        <input className="half-width-input" required="true" type="text" name="willingToRelocate" placeholder="Are you willing to relocate ? (yes or No)" ></input>
                        <textarea className="full-width-input" required="true" name="experienceDetails" rows="4" cols="50" placeholder="Describe your experience in short. e.g. I have expereince of working under Mr. XYZ as XXX for N years." ></textarea>
                        <div className="custom-file" >
                            <input placeholder="Upload Resume" type="file" onChange={this.fileUploadChangeHandler} name="media" className="custom-file-input" id="validatedCustomFile" required></input>
                            <label className="custom-file-label" for="validatedCustomFile" > {this.state.file != null ? this.state.file.name : 'Click here to Upload Resume (doc,docx, pdf, JPEG format)'} </label>
                        </div>
                        <br></br>
                    </fieldset>
                    <br></br>
                    <div className="container fieldset" >
                        <button className="half-width-input btn-primary" > Submit </button>
                        <button className="half-width-input btn-danger" type="reset"> Reset </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default FIleUpload