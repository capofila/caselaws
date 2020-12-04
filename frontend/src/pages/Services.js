import React from 'react'
import { Container } from 'react-bootstrap'
import { Slide } from 'react-slideshow-image';

class Services extends React.Component {
    render() {
        const slideImages = [
            './supremecourt.jpg',
            '../Images/slide_3.jpg',
            '../Images/slide_4.jpg'
        ];
        return (
            <Container>
                <div>
                    <Slide>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[0]})` }}>
                                <span>Slide 1</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[1]})` }}>
                                <span>Slide 2</span>
                            </div>
                        </div>
                        <div className="each-slide">
                            <div style={{ 'backgroundImage': `url(${slideImages[2]})` }}>
                                <span>Slide 3</span>
                            </div>
                        </div>
                    </Slide>
                </div>
            </Container>
        );
    }
}

export default Services;




