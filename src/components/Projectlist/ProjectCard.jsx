import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";



function ProjectCard(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <hr />
        <div className="d-flex flex-wrap ">
          {props.ghLink && <Button className="viewbtn mx-2 mb-2" variant="primary" href={props.ghLink} target="_blank">
            Open App
          </Button>}
          {props.feLink && <Button className="viewbtn mx-2 mb-2" variant="primary" href={props.feLink} target="_blank">
            Frontend code
          </Button>}
          {props.beLink && <Button className="viewbtn mx-2 mb-2" variant="primary" href={props.beLink} target="_blank">
            Backend code
          </Button>}
        </div>
        {/* {console.log(props)}
        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >

            {"Demo"}
          </Button>
        )} */}
      </Card.Body>
    </Card>
  );
}
export default ProjectCard;