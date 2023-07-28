import React from 'react'
import '../../pages/style.css';
import { Container, Row, Col } from 'react-bootstrap'


function Aboutpage() {
    return (
        <div className='aboutpagebackground'>
            <Container>
                <Row className='textbackground'>
                    <Col md={7} >
                        <h3 className='aboutmetext'>About <span>Me</span></h3>
                        <p className='aboutdetails'>Web development is my area of expertise as an enthusiastic and motivated MERN stack developer. As a newcomer to the field, I am keen to use my portfolio to highlight my abilities. I have designed dynamic and interactive online apps and am skilled in JavaScript, HTML, CSS, React, Node.js, MongoDB and Express. I'm dedicated to staying current on trends and providing top-notch user experiences. My portfolio serves as evidence of my capacity for teamwork and effective problem-solving. I am eager to develop as a MERN stack developer and contribute to cutting-edge projects.
                        </p>
                        <ul className='skilllist'>
                            <Row>
                                <h3>Skills</h3>
                                <Col md={7}>
                                    <li>HTML5/CSS3</li>
                                    <li>JavaScript</li>
                                    <li>Bootsrap 5</li>
                                    <li>React Js</li>
                                    <li>Redux Js</li>
                                </Col>
                                <Col md={5}>
                                    <li>Node Js</li>
                                    <li>Mongo DB</li>
                                    <li>Express Js</li>
                                    <li>Github</li>
                                    <li>AWS Cloud</li>
                                </Col>
                            </Row>
                        </ul>
                    </Col>
                    <Col md={5}>
                        <div className="webimage"></div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Aboutpage