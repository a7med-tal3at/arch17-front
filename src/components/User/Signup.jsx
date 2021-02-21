import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import { Container, Col, Row } from "react-bootstrap";
// import { signup, isLogin, FacebookAuth } from "../../auth";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
// import { initFacebookSdk } from "../../facebook";

import Navigation from "../UI/Navigation";
import axios from "axios";
class Signup extends Component {
 state = {};

 //  handleSubmit = (e) => {
 //   e.preventDefault();
 //   console.log(isLogin());
 //   signup(this.state);
 //  };

 facebook = (e) => {
  e.preventDefault();
//   axios.get("http://127:8000/auth/facebook").then((response) => {
//    console.log(response);
//   });
 };

 render() {
  return (
   <React.Fragment>
    {/* <Navigation /> */}
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
        <Form onSubmit={{}}>
         <Form.Group>
          <Form.Row>
           <Col>
            <Form.Control
             placeholder="First name"
             onChange={(e) => {
              //   this.state.fname = e.target.value;
             }}
            />
           </Col>
           <Col>
            <Form.Control
             placeholder="Last name"
             onChange={(e) => {
              //   this.state.lname = e.target.value;
             }}
            />
           </Col>
          </Form.Row>
         </Form.Group>
         <Form.Group controlId="formBasicEmail">
          <Form.Control
           type="email"
           placeholder="Enter email"
           //    onChange={(e) => {
           // this.state.email = e.target.value;
           //    }}
          />
         </Form.Group>
         <Form.Group controlId="formBasicPassword">
          <Form.Control
           type="password"
           placeholder="Password"
           //    onChange={(e) => {
           // this.state.password = e.target.value;
           //    }}
          />
         </Form.Group>
         <button className="coninue-btn regular-auth" type="submit">
          Continue
         </button>

         <div className="form-separator"></div>
         <button
          className="coninue-btn facebook-auth"
          onClick={this.facebook}
          //   type="submit"
          //   onClick={this.handleFacebookAuth}
         >
          <span>
           <FaFacebookF />
          </span>
          Continue With Facebook
         </button>
         <button
          className="coninue-btn linkedin-auth"
          //   onClick={}
          type="submit"
         >
          <span>
           <FaLinkedinIn />
          </span>{" "}
          Continue With Linkedin
         </button>
         <button className="coninue-btn wechat-auth" type="submit">
          <span>
           <AiFillWechat />
          </span>
          Continue With WeChat
         </button>
         <div class="terms">
          <p>
           By clicking on Continue you agreed to <span>Terms of use</span> and
           <span> Privacy</span> policy.
          </p>
         </div>
         <div className="switch">
          <p>
           Already have an Arch17 ID?
           <span> Sign in</span>
          </p>
         </div>
         <div></div>
         <div className="sign-footer">
          Create a Designer Account <span>i</span>
         </div>
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
