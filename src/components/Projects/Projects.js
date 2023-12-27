import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import alem from "../../Assets/Projects/Capture.PNG";
import port from "../../Assets/Projects/Captureport.PNG";
import azmera from "../../Assets/Projects/azmera.png";
import yt from "../../Assets/Projects/ytab.PNG";

import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={alem}
              title="AlemHelp"
              description="This is a fully functional forum application that I built for my client. It is made of React.js + Tailwindcss in the front-end, Express.js in back-end, and MongoDB for database."
              ghLink="#"
              demoLink="https://alemhelp-forum.onrender.com/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={yt}
              title="Youtube Clone"
              description="Customized youtube clone application using React.js, Material UI for styling, and RapidAPI for API endpoints. This applicaion can filter videos by categories like 'coding'"
              ghLink="https://github.com/abelgithub-astu/Youtube-clone-app"
              demoLink="https://ytabel.vercel.app/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={azmera}
              title="Azmera"
              description="Azmera is an agricultural e-commerce platform with payment system that I built for my GC project. It used Next.js and Tailwind in front-end, Express with Sequelize (ORM) back-end, and Mysql database."
              ghLink="#"
              demoLink="#"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={port}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode. It shows some of web application projects."
              ghLink="https://github.com/abelgithub-astu/Abelfolio"
              demoLink="https://abelfolio.vercel.app"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
