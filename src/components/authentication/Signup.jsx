import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";
import SignBtn from "../btns/SignBtn";
import axios from "axios";

class Signup extends Component {
 state = {
  fname: "",
  password: "",
  lname: "",
  email: "",
  password_confirmation: "Muhamed10",
 };

 handleSubmit = (e) => {
  e.preventDefault();
  console.log("clicked!");
  console.log(this.state);

  axios
   .post(
    "https://arch17.herokuapp.com/api/user/registration/signup",
    this.state
   )
   .then((res) => {
    console.log(res.data.Bearer_token);
    localStorage.setItem("token", res.data.Bearer_token);
   });
 };
 render() {
  return (
   <div id="wrapper">
    <Container fluid>
     <Row className="justify-content-md-center">
      <Col md={{ span: 7 }} sm={{ span: 8 }} className="m-auto">
       <div className="heading">
        <h2>Welcome to Arch17</h2>
        <h6>The world platform for architecture & design</h6>
       </div>
       <Form onSubmit={this.handleSubmit}>
        <Form.Group>
         <Form.Row>
          <Col>
           <Form.Control
            placeholder="First name"
            onChange={(e) => {
             this.state.fname = e.target.value;
            }}
           />
          </Col>
          <Col>
           <Form.Control
            placeholder="Last name"
            onChange={(e) => {
             this.state.lname = e.target.value;
            }}
           />
          </Col>
         </Form.Row>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
         <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
           this.state.email = e.target.value;
          }}
         />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
         <Form.Control
          type="password"
          placeholder="Password"
          onChange={(e) => {
           this.state.password = e.target.value;
          }}
         />
        </Form.Group>

        {/* <Button variant="primary" type="submit">
         Submit
        </Button> */}

        <SignBtn />
       </Form>
      </Col>
     </Row>
    </Container>
   </div>
  );
 }
}

export default Signup;
