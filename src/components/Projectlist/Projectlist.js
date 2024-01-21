import React from 'react'
import '../../pages/style.css';
import ProjectCard from "./ProjectCard";
import { Container, Row, Col } from 'react-bootstrap'
import chatApp from '../../Assets/chatApp dp.png'
import Todolist from '../../Assets/Todo-list.png'
import zenClass from '../../Assets/zen class.png'


function Projectlist() {
  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h3 className='aboutmetext' style={{ display: "flex", justifyContent: "center" }} >Projects </h3>
            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={chatApp}
                isBlog={false}
                title="Chat App"
                description="This is a Chat App created with React js, Bootstrap, Node js, Express js, and MongoDB to build this entire application. It's a real-time application to chat with someone. Express.js and Node.js handle the backend logic, providing seamless event management functionality. MongoDB serves as the database for efficient storage and retrieval of event data."
                ghLink="https://enchanting-torrone-b257ed.netlify.app"
                feLink="https://github.com/Abdul-43/chatApp-client.git"
                beLink="https://github.com/Abdul-43/chatApp-server.git"
              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={Todolist}
                isBlog={false}
                title="Todo list App"
                description="To-Do App that build will allow a user to add a task to a list of to-do items. Once the task is added, the user will be able to delete it as completed once it has done. This app was built using MongoDb, Express, NodeJS and ReactJS (MERN stack)."
                ghLink="https://creative-bunny-3e6c82.netlify.app"
                feLink="https://github.com/Abdul-43/Todo-list-client.git"
                beLink="https://github.com/Abdul-43/Todo-list-server.git"

              />
            </Col>

            <Col md={4} className="project-card">
              <ProjectCard
                imgPath={zenClass}
                isBlog={false}
                title="Zen Class Event Management App"
                description="Developed a comprehensive event management application using the MERN (MongoDB, Express.js, React, Node.js) stack. The Zen Class app simplifies the process of organizing and managing zen and mindfulness events. It features user-friendly event creation and registration and real-time updates. "
                ghLink="https://soft-duckanoo-304444.netlify.app"
                feLink="https://github.com/Abdul-43/Zen-class-Event-Management-for-students-frontend.git"
                beLink="https://github.com/Abdul-43/Zen-class-Event-Management-for-students-backend.git"

              />
            </Col>

          </Row>
        </Container>
      </Container>
    </div>
  )
}
export default Projectlist