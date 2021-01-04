import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";
class Signup extends Component {
 state = {};
 render() {
  return (
   <div id="wrapper" className="">
    <Container>
     <Row className="justify-content-md-center">
      <Col md={{ span: 6 }}>
       <Form>
        <Form.Group controlId="formBasicEmail">
         <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
         <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
         Submit
        </Button>
       </Form>
      </Col>
     </Row>
    </Container>
   </div>
  );
 }
}

export default Signup;
