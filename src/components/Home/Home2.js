import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/abel.jpg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }} data-aos="fade-right">
              <span className="primary-header"> ABOUT </span> ME
            </h1>
            <p className="home-about-body" data-aos="fade-up">
              <br />
              I'm a{" "}
              <i className="primary-header">
                Computer Science and Engineering Graduate.
              </i>{" "}
              who loves solving problems and building Websites.
              <br />
              <br />I am passionate about{" "}
              <i className="primary-header">Web development technologies</i> and
              love to learn new things.
              <br />
              <br />I am more interested in building new
              <i>
                <i className="primary-header">
                  problem solving softwares and Products.
                </i>
              </i>
              <br />
              <br />I am always learning and extending my experience in
              developing products with <i className="primary-header">
                Node.js
              </i>{" "}
              and Modern Javascript Libraries and Frameworks like
              <i className="primary-header"> React.js,</i>
              <i className="primary-header"> Vue.js, and</i>
              <i className="primary-header"> Svelte.js.</i>
              <br />
              <br />
              Currently I am expanding my portfolio by building more{" "}
              <i className="primary-header">projects </i> that I can add here.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                data-aos="fade-left"
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ borderRadius: "50%", border: "5px solid lightblue" }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1 data-aos="fade-right">
              <span className="primary-header">CONNECT </span> WITH ME
            </h1>
            <p data-aos="fade-left">Feel free to connect with me</p>
            <ul className="home-about-social-links" data-aos="fade-up">
              <li className="social-icons">
                <a
                  href="https://github.com/abelgithub-astu"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="github"
                >
                  <AiFillGithub />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="mailto:abelastu13@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="email"
                >
                  <AiOutlineMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abel-yohannes-ba6b30239/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                  aria-label="linkedin"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
