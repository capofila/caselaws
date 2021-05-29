import React from 'react'
import { Form, Col, Button, Container, Row } from 'react-bootstrap'
import axios from 'axios';


export default class Career extends React.Component {
    constructor() {
        super();
        this.state = {
            identifier: '',
            password: ''
        }
    }

    

changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
}

loadData = (e) => {
    const { data } =  axios.post('http://caselaws.org:1337/auth/local', {
        identifier: 'info@capofila.in',
        password: 'interOP@123',
    }).then(response => {
        console.log(response)
    });

    
}

submitHandler = (e) => {
    const url = "http://155.138.197.117:1337/auth/local";
    e.preventDefault();
    const formData = {
        identifier: this.state.identifier,
        password: this.state.password
    }
    // console.log("Submitting :"); 
    // console.log(formData);
    axios.post(url, formData)
        .then(response => {
            // console.log(response);
            this.props.history.push(":1337/admin/auth/login");
        })
        .catch((error) => {
            if(error.name =='Error'){
                alert("Incorrect login credentials, check username or password")
                console.log(JSON.stringify(error))
            }
        });
}

render() {
    const { email, password } = this.state;
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
                            <Form.Control name="identifier" type="email" placeholder="Enter email" value={email} required onChange={this.changeHandler} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" placeholder="Password" value={password} required onChange={this.changeHandler} />
                        </Form.Group>
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
