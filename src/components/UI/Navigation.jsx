import React, { Component } from "react";
import logo from '../../logo-gray.png';
import {
 Navbar,
 Nav,
 Form,
 Button,
 FormControl,
 NavDropdown,
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
 state = {};
 render() {
  return (
   <Navbar bg="white" expand="md" sticky="top">
    <Navbar.Brand >
    <NavLink to="/"><img id="nav-logo" src={logo} alt="Logo" /></NavLink>
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
     <NavLink to="/signup" className="nav-link">sign up</NavLink>
      <NavLink to="/signin" className="nav-link">Sign in</NavLink>
      <NavDropdown title="Dropdown" id="basic-nav-dropdown">
       <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
       <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
       <NavDropdown.Divider />
       <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
     </Nav>
    </Navbar.Collapse>
   </Navbar>
  );
 }
}

export default Navigation;
