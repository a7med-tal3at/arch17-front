import React , { Component } from "react";
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import  PhoneInput  from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css';
import '../../css/forms.css'
class CreateStore extends Component{

    render(){
        return(
            
            <div>
                <Container fluid="md m-t-global">
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={8} lg={6} xl={6} className="form-container p-5">
                            <div>
                                <div className="form-header text-center">
                                    <h1 >Create Brand / Store</h1>
                                    <p>Reach Designers world wide to promote and sell your products and services</p>
                                </div>
                                <Form.Row>
                                    <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Form.Group >
                                            <Form.Control type="text" placeholder="Name *" />
                                        </Form.Group>
                                    </Col>
                                    <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Form.Group >
                                            <Form.Control as="select">
                                                <option value="no">Type *</option>
                                            </Form.Control>
                                        </Form.Group>                    
                                    </Col>
                                    <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Form.Group >
                                            <Form.Control as="select">
                                                <option value="no">Products Types *</option>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Form.Group >
                                            <Form.Control as="select">
                                                <option value="no">Country *</option>
                                                {/* {countryUpdate} */}
                                            </Form.Control>
                                        </Form.Group>
                                    </Col>
                                    <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Form.Group >
                                            <Form.Control type="email" placeholder="Email *" />
                                        </Form.Group>
                                    </Col>
                                    {/* <Col  xs={3} sm={3} md={3} lg={3} xl={3}>
                                        <Form.Group >
                                            <Form.Control as="select">
                                                <optgroup>
                                                    <option>Code *</option>
                                                </optgroup>
                                            </Form.Control>
                                        </Form.Group>
                                    </Col> */}
                                    <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Form.Group >
                                            {/* <Form.Control type="text" placeholder="Phone number *" /> */}
                                            <PhoneInput
                                                enableSearch={true}
                                                placeholder="Phone number *"
                                            />
                                        </Form.Group>
                                    </Col>
                                </Form.Row> 
                                <Col  xs={12} sm={12} md={12} lg={12} xl={12} className="px-0">
                                    <Button type="submit" className="w-100 btn-submit">Continue</Button>
                                </Col>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }

}

export default CreateStore;