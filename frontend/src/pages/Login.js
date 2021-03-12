import React from 'react'
import { Form, Col, Button, Container, Row } from 'react-bootstrap'
import axios from 'axios';

export default class Career extends React.Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = (e) => {
        const url = "http://155.138.197.117:1337/login";
        e.preventDefault();
        const formData = {
            username: this.state.username,
        }
        console.log("Submmiting :"); console.log(formData);
        axios.post(url, formData)
            .then(response => {
                console.log(response);
                alert("Form submitted successfuly");
            })
            .then(error => {
                alert("Failed to login")
                console.log(error);
            });
    }

    render() {
        const {  email, password } = this.state;
        return (
            <Container>
                <Row>
                    <Col>
                        <br></br>
                        <h1>Admin Login</h1>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Form onSubmit={this.submitHandler}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control name="email" type="email" placeholder="Enter email" value={email} required onChange={this.changeHandler} />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control name= "password" type="password" placeholder="Password" value={password} required onChange={this.changeHandler} />
                            </Form.Group>
                            {/* <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" value={check}/>
                            </Form.Group> */}
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
                <br></br>
                <br></br>
            </Container>
        );
    };
}
