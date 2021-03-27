import React , { Component } from "react";
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Form  from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../../css/forms.css'
class BusinessCenterLogin extends Component{    
    render(){
        return(
            <div>
                <Container fluid="md m-t-global">
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={8} lg={6} xl={6} className="form-container p-5">
                            <div className="form-header text-center py-3">
                                <h1 >Enter Passcode</h1>
                            </div>
                            <Form.Row>
                                <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Group  className="my-1 py-4">
                                        <Form.Control type="password" placeholder="Pass code *" />
                                    </Form.Group>
                                </Col>
                            </Form.Row> 
                            <Col  xs={12} sm={12} md={12} lg={12} xl={12} className="px-0">
                                <Button type="submit" className="w-100 btn-submit">Continue</Button>
                            </Col>  
                            <div className="form-footer py-3 text-center">
                                <p style={{'color':'#A6292E'}}>
                                    Forget Passcode
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>




            </div>
        );
    }

}

export default BusinessCenterLogin;