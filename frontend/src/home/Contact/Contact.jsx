import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./Contact.css";

const ContactForm = () => {
  return (
    <Container className="contact-container">
      <h2 className="header">Contact Us</h2>
      <Row className="content">
        <Col md={4}>
          <h4 className="sub-header">Address</h4>
          <p>Ali Town Station</p>
          <p>Lahore,Punjab,Pakistan</p>
        </Col>
        <Col md={4}>
          <h4 className="sub-header">Phone</h4>
          <p>+92-303-0957344</p>
        </Col>
        <Col md={4}>
          <h4 className="sub-header">Email</h4>
          <p>muhammadamir4406@.com</p>
        </Col>
      </Row>
      <Row className="content">
        <Col md={6}>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter your email" />
            </Form.Group>
            <Form.Group controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your message"
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6}>
          <div className="map-responsive">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/d/embed?mid=1CYaMf9qsEtBnZXGoeMhyMPbMcE4&hl=en_US&ehbc=2E312F"
              width="100%"
              height="450"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactForm;
