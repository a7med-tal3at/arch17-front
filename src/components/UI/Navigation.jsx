import React from "react";
import logo from "../../logo-gray.png";
import {
 Container,
 Navbar,
 Nav,
 Form,
 FormControl,
 NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const Navigation = ({ user }) => {
 const handleLogout = () => {
  localStorage.removeItem("UserInfo");
  window.location.reload("/");
 };
 return (
  <div className="w-100 bg-white navbar-border-bottom sticky-top">
   <Container>
    <Navbar bg="white" expand="md" sticky="top">
     <Navbar.Brand>
      <NavLink to="/">
       <img id="nav-logo" src={logo} alt="Logo" />
      </NavLink>
     </Navbar.Brand>
     <Navbar.Toggle aria-controls="basic-navbar-nav" />
     <Navbar.Collapse id="basic-navbar-nav">
      <Form inline className="nav-search rounded col-md-8">
       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Products</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Magazine</NavDropdown.Item>
       </NavDropdown>
       <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2 border-0"
       />
      </Form>
      <Nav className="ml-auto">
       {!user.isLoggedin ? (
        <React.Fragment>
         {" "}
         <NavLink to="/signup" className="nav-link">
          sign up
         </NavLink>
         <NavLink to="/signin" className="nav-link">
          Sign in
         </NavLink>
        </React.Fragment>
       ) : (
        <span id="test-name">{user.fullName}</span>
       )}
       <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
       </NavDropdown>
      </Nav>
     </Navbar.Collapse>
    </Navbar>
   </Container>
  </div>
 );
};

const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(Navigation);
