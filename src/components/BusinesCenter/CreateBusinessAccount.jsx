import React , { Component } from "react";
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../css/forms.css'
class CreateBusinessAccount extends Component{    
    render(){
        return(
            <div>
                <Container fluid="md m-t-global">
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={8} lg={6} xl={6} className="form-container p-5">
                            <div>
                                <div className="form-header text-center">
                                    <h1 >Create Business Center</h1>
                                    <p>Manage all your business from one place</p>
                                </div>
                                <Form.Row>
                                    <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Form.Group  className="my-1">
                                            <Form.Control type="password" placeholder="Pass code *" />
                                        </Form.Group>
                                    </Col>
                                </Form.Row> 
                                <div className="input-footer">
                                    <p>
                                        Please input a pass code of four digits,
                                        you will need to input every time you manage any part of your business on arch17.com
                                    </p>
                                </div>
                                <Col  xs={12} sm={12} md={12} lg={12} xl={12} className="px-0">
                                    <Button type="submit" className="w-100 btn-submit">Continue</Button>
                                </Col>  
                                <div className="form-footer py-3">
                                    <p>
                                    You can create and manage your online store /
                                    brand page from the business center. You can reach your business center from the user panel
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>




            </div>
        );
    }

}

export default CreateBusinessAccount;