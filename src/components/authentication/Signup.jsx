import React, { Component } from "react";
import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
import { Container, Col, Row } from "react-bootstrap";
import { signup, isLogin } from "../../auth";
// import SignBtn from "../btns/SignBtn";
// import axios from "axios";
import Navigation from "../Navigation";
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
  console.log(isLogin());
  signup(this.state);
 };
 render() {
  return (
   <React.Fragment>
    <Navigation />
    <div id="wrapper" className="auth-form">
     <Container fluid>
      <Row className="justify-content-md-center">
       <Col
        lg={{ span: 6 }}
        md={{ span: 8 }}
        sm={{ span: 10 }}
        className="m-auto p-5 bg-white rounded"
       >
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

         {/* <SignBtn /> */}
         <button className="coninue-btn regular-auth" type="submit">
          Continue
         </button>

         <div className="form-separator"></div>
         <button className="coninue-btn facebook-auth" type="submit">
          Continue With Facebook
         </button>
         <button className="coninue-btn linkedin-auth" type="submit">
          Continue With Linkedin
         </button>
         <button className="coninue-btn wechat-auth" type="submit">
          Continue With WeChat
         </button>
        </Form>
       </Col>
      </Row>
     </Container>
    </div>
   </React.Fragment>
  );
 }
}

export default Signup;
