import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={4} className="text-start">
            <h5 className="fw-bold">GET IN TOUCH</h5>
            <p>Email: AhmedKhaled@email.com</p>
            <p>Phone: 01112985769</p>
          </Col>

          <Col md={4} className="text-center">
            <Button variant="outline-light">CONTACT ME</Button>
          </Col>

          <Col md={4} className="text-end">
            <p>LinkedIn | Facebook | Twitter</p>
            <p className="mt-2">&copy; 2025 AHMED</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
