import React from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { IoIosArrowBack } from 'react-icons/io';
import { Nav } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
const addProjectTabs = (props) =>{

    return (
        <React.Fragment>
                <div className="w-100 bg-white py-3 ">
                    <Container className=" bg-white align-items-center">
                        <Row className="justify-content-center">
                            <Col> 
                                <div className="add-project-nav d-flex justify-content-between align-items-center">
                                        <button className="add-project-back-btn mx-1">
                                            <IoIosArrowBack />   Back
                                        </button>
                                    <Nav className="nav-container">
                                        <Nav.Item>
                                            <NavLink activeClassName="add-project-nav-active" className="add-project-nav-link" to={"/addproject/info"} >1. Project Info</NavLink>
                                        </Nav.Item>
                                        <span className="nav-link-separator">|</span>
                                        <Nav.Item>
                                            <NavLink activeClassName="add-project-nav-active" className="add-project-nav-link" to={"/addproject/content"}  >2. Content</NavLink>
                                        </Nav.Item>
                                        <span className="nav-link-separator">|</span>
                                        <Nav.Item>
                                            <NavLink activeClassName="add-project-nav-active" className="add-project-nav-link" to={"/addproject/role"}  >3. Role</NavLink>
                                        </Nav.Item>
                                        <span className="nav-link-separator">|</span>
                                        <Nav.Item>
                                            <NavLink activeClassName="add-project-nav-active" className="add-project-nav-link" to={"/addproject/products"}  >4. Tag Products</NavLink>
                                        </Nav.Item>
                                        <span className="nav-link-separator">|</span>
                                        <Nav.Item>
                                            <NavLink activeClassName="add-project-nav-active" className="add-project-nav-link" to={"/addproject/cover"}  >5. Cover</NavLink>
                                        </Nav.Item>
                                    </Nav>
                                    <div className="add-project-nav-btns">
                                        <button className="add-project-skip-btn mx-1" >
                                            Skip
                                        </button>
                                        <button className="add-project-save-btn mx-1" onClick={props.saveBtn}>
                                            Save & Continue
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
    );
}
export default addProjectTabs;