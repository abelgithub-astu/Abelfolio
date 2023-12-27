import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import "./footer.css";

function Footer() {
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright"></Col>
        <Col md="4" className="footer-copywright">
          <span>&copy;2023</span> Abel Yohannes
        </Col>
        <Col md="4" className="footer-body"></Col>
      </Row>
    </Container>
  );
}

export default Footer;
