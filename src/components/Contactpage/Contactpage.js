import React from "react";
import "../../pages/style.css";
import { Container, Row } from "react-bootstrap";

function Contactpage() {
  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I’m currently searching for opportunities for a Full Stack developer
          role. <br /> If there is any vacancy my inbox is always open. Whether
          <br /> you have any further questions or just want to say hi, <br />
          I’ll try my best to get back to you!
        </p>
        <Row>
          <button
            className="contactbtn"
            onClick={() => {
              window.open("https://www.linkedin.com/in/abdul-rahman-3350a91a9");
            }}
          >
            Say Hello in Linkedin
          </button>
          <button
            className="contactbtn"
            onClick={() => {
              window.open("https://github.com/Abdul-43");
            }}
          >
            Github
          </button>
          <button
            className="contactbtn"
          >
            <a className="mailto" href="mailto:abdulpnoit.ar@gmail.com">Gmail</a>
          </button>
        </Row>
      </Container>
    </div>
  );
}

export default Contactpage;
