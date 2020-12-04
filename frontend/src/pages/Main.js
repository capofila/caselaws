import React, { useState } from 'react'
import { Collapse, Form, Col, Button, Container, Row, Card, CardColumns } from 'react-bootstrap'
//import logo from '../assets/logo.png';
import 'holderjs';
import useJudgementSearch from '../components/useJudgementSearch'
import delhi from '../assets/delhi.PNG'
import allahabad from '../assets/allahabad.PNG'
import calcutta from '../assets/Calcutta.PNG'
import madras from '../assets/madras.PNG'
import maharashtra from '../assets/maharasthra.PNG'
import rajasthan from '../assets/rajasthan.PNG'
import supremecourt from '../assets/supremecourt.jpg'
import orrisa from '../assets/orrisa.PNG'
import karnataka from '../assets/karnataka.PNG'
import chhatisgar from '../assets/chhatisgarh.PNG'
import meghalya from '../assets/meghalya.PNG'


function Main() {
    const [query, setQuery] = useState('*');
    const [pageNumber, setPageNumber] = useState(1);
    const [open, setOpen] = useState(false);
    function handleSearch(e) {
        setQuery(e.target.value)
        setPageNumber(1)
    }

    const {
        judgements,
        hasMore,
        loading,
        error
    } = useJudgementSearch(query, pageNumber)

    return (
        <>
            <Container>
                <br></br><br></br><br></br><br></br>
                <Row className="justify-content-center">
                    <Col xs={12} md="auto">
                        <div ></div>
                        <h1>Indian Judgement Search</h1>
                        <hr></hr>
                    </Col>
                </Row>
                <br></br><br></br><br></br>
                <Form >
                    <Row>
                        <Col xs={12} md={6}>
                            <Form.Group>
                                <Form.Control required placeholder="Search judgement by case title, text, judgename etc"
                                    name="searchString"
                                    onChange={handleSearch} />
                            </Form.Group>
                        </Col>

                        <Col xs={12} md={4}>
                            {/* <Form.Group>
                                    <Form.Control as="select" size="md" name="selectedCourt" custom value={selectedCourt} onChange={this.changeHandler}>
                                        <option>--Select--</option>
                                        {console.log(this.state.courtNameList)}
                                        {this.state.courtNameList.map((courtName) => <option key={courtName} value={courtName}>{courtName}</option>)}
                                    </Form.Control>
                                </Form.Group> */}
                        </Col>
                        <Col xs={12} md={2}><Button variant="primary" size="xs" block type="submit">Submit</Button></Col>
                    </Row>
                </Form>
            </Container>

            <br></br>
            <br></br>
            <br></br>
            <Container>
                <CardColumns>
                    {judgements.map(judgement => {
                        return (
                            <Card key={judgement.id}>
                                <Card.Img variant="top" src={judgement.court_name === "Delhi High Court" ? delhi : ''} />
                                <Card.Img variant="top" src={judgement.court_name === "Calcutta High Court" ? calcutta : ''} />
                                <Card.Img variant="top" src={judgement.court_name === "Supreme Court of India" ? supremecourt : ''} />
                                <Card.Img variant="top" src={judgement.court_name === "Madras High Court" ? madras : ''} />
                                <Card.Img variant="top" src={judgement.court_name === "Karnataka High Court" ? karnataka : ''} />
                                <Card.Img variant="top" src={judgement.court_name === "High Court of Meghalaya" ? meghalya : ''} />
                                <Card.Img variant="top" src={judgement.court_name === "Orissa High Court" ? orrisa : ''} />
                                <Card.Img variant="top" src={judgement.court_name === "Chattisgarh High Court" ? chhatisgar : ''} />
                                <Card.Img variant="top" src={judgement.court_name === "Rajasthan High Court" ? rajasthan : ''} />
                                <Card.Img variant="top" src={judgement.court_name === "Allahabad High Court" ? allahabad : ''} />
                                <Card.Body>
                                    <Card.Title>{judgement.case_title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{judgement.citation_name}</Card.Subtitle>
                                    <Card.Text>
                                        <small className="text-muted">
                                            Petetioner : <cite title="Petitioner">{judgement.petitioner_name}</cite>
                                        </small>
                                    </Card.Text>
                                    <Card.Text>
                                        <small className="text-muted">
                                            Respondent : <cite title="Respondent">{judgement.respondent_name}</cite>
                                        </small>
                                    </Card.Text>
                                    <Collapse in={open}>
                                        <Card.Text>
                                            {judgement.judgement}
                                        </Card.Text>
                                    </Collapse>
                                    <Card.Link href={'/judgements:'+judgement.id}> Read Full</Card.Link>
                                    <Card.Link href={'/downloads:'+judgement.id}>Download</Card.Link>
                                </Card.Body>
                                <Card.Footer>
                                    <small className="text-muted">
                                        Judgement By  <cite title="Source Title">{judgement.judge_name}</cite>
                                    </small>
                                </Card.Footer>
                            </Card>
                        );
                    })}
                </CardColumns>
                <div>{loading && 'Loading...'}</div>
                <div>{error && 'Error'}</div>
            </Container>
        </>
    )
}

export default Main;
