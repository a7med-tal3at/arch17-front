import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container, Col, Row } from "react-bootstrap";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { AiFillWechat } from "react-icons/ai";
import { connect } from "react-redux";
import loginUser from "../../redux/actions/AuthActionCreator";
const Signin = ({ dispatchLoginAction }) => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 const handleLogin = (e) => {
  e.preventDefault();
  dispatchLoginAction(
   email,
   password,
   () => console.log("account created! "),
   (message) => console.log("Error: " + message)
  );
 };
 return (
  <React.Fragment>
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
       <Form noValidate>
        <Form.Group>
         <Form.Control
          type="email"
          name="email"
          id="email"
          noValidate
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
         />
        </Form.Group>
        <Form.Group>
         <Form.Control
          type="password"
          name="password"
          id="password"
          noValidate
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
         />
        </Form.Group>
        <button
         className="coninue-btn regular-auth"
         type="submit"
         onClick={(e) => {
          e.preventDefault();
          handleLogin();
         }}
        >
         Continue
        </button>

        <div className="form-separator"></div>
        <button className="coninue-btn facebook-auth" type="submit">
         <span>
          <FaFacebookF />
         </span>
         Continue With Facebook
        </button>
        <button className="coninue-btn linkedin-auth" type="submit">
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
          Don’t have an Arch17 ID?
          <span> Register Now </span>
         </p>
        </div>
       </Form>
      </Col>
     </Row>
    </Container>
   </div>
  </React.Fragment>
 );
};

// export default Signin;
const mapDispatchToProps = (dispatch) => ({
 dispatchLoginAction: (email, password, onSuccess, onError) =>
  dispatch(loginUser({ email, password }, onSuccess, onError)),
});
export default connect(null, mapDispatchToProps)(Signin);
