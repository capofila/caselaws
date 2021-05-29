import React from 'react'
import { Container,  Card } from 'react-bootstrap'

export default function About() {
    return (
        <Container>
            <br></br>
            <Card>
                <Card.Header>
                    About Us
                </Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <p>
                            {' '}
                            <p>CaseLaws is a legal portal with an aim to help the people working in legal industry. We have a legal
                            search engine where lawyers, advocates, legal interns and any other person can search the judgments
                            made by Hon’ble Supreme Courts and High Courts only. These judgement are available at public domain
                            and anybody can access it from there but what makes us different is that we provide the information
                            which is available at different domain at one single place in condensed format with just a single click an
                            individual can find a judgement of various courts at one place. We only provide judgement of Hon’ble
                            Supreme Court and Hon’ble High Courts only. At CaseLaws we also have a career section where we help
                            law graduates, Legal interns, Advocates…etc. to find jobs in their interested domain and also we help law
            firms to find legal interns and Advocates for them.</p>{' '}
                        </p>
                        <footer className="blockquote-footer">
                            We are committed to serve you better. <cite title="Source Title">Caselaws</cite>
                        </footer>
                    </blockquote>
                </Card.Body>
            </Card>

        </Container>
    )
}
