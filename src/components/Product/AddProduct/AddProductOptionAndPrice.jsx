import React , {Component} from 'react';
import Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import Form  from 'react-bootstrap/Form';
import { FaCloudUploadAlt } from 'react-icons/fa';
import '../../../css/forms.css';
import './Addproduct.css';
import { BsTrash  } from "react-icons/bs";
import {  BiPlusMedical } from "react-icons/bi";
class AddProductOptionAndPrice extends Component{

    render(){

        return (
            <React.Fragment>
                <Container className="add-product-box bg-white p-0 pt-5 pl-5 pr-5">
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                            <Row className="justify-content-center text-center">
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                                    <h4 className="p-r-heading"> Option & Price </h4>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="mt-5 role-row px-5 py-4">
                                    <Row className="text-center justify-content-space-between align-items-center role-head">
                                        <Col xl={11} lg={11}>
                                            <Row>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} className="text-center px-0">
                                            Picture
                                        </Col>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} className="text-center px-0">
                                            <Form.Check
                                            required
                                            name="Material"
                                            label="Material"
                                            />
                                        </Col>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} className="text-center px-0">
                                            <Form.Check
                                            required
                                            name="Size"
                                            label="Size"
                                            />
                                        </Col>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} className="text-center px-0">
                                            <Form.Check
                                            required
                                            name="Price"
                                            label="Price"
                                            />
                                        </Col>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} className="text-center px-0">
                                            <Form.Check
                                            required
                                            name="Offer Price"
                                            label="Offer Price"
                                            />
                                        </Col>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} className="text-center px-0">
                                            Quantity
                                        </Col>
                                        </Row>
                                        </Col>
                                        <Col lg={1} xl={1}>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} >
                                            Delete
                                        </Col>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} xl={12} className="my-3 role-row px-5 py-4">
                                    <Row className="text-center justify-content-space-between align-items-center role-head">
                                        <Col xl={11} lg={11}>
                                            <Row>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} className="text-center " >
                                            <FaCloudUploadAlt style={{color:'#888888',fontSize:'50px'}} />
                                            <br />
                                            <span style={{color:'#888888',fontSize:'12px',textDecoration:'underline'}} >Upload Picture</span>
                                        </Col>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} className="text-center d-flex justify-content-center align-items-center" style={{color:'#888888'}}>
                                        <BiPlusMedical />
                                        </Col>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} className="text-center d-flex justify-content-center align-items-center" style={{color:'#888888'}}>
                                        <BiPlusMedical />
                                        </Col>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} className="text-center d-flex justify-content-center align-items-center" style={{color:'#888888'}}>
                                        <BiPlusMedical />
                                        </Col>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} className="text-center d-flex justify-content-center align-items-center" style={{color:'#888888'}}>
                                        <BiPlusMedical />
                                        </Col>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2} className="text-center d-flex justify-content-center align-items-center" style={{color:'#888888'}}>
                                        <BiPlusMedical />
                                        </Col>
                                        </Row>
                                        </Col>
                                        <Col lg={1} xl={1}>
                                        <Col xs={9} sm={9} md={4} lg={2} xl={2}  style={{justifyContent:'end'}} className="text-center d-flex align-items-center">
                                        <button className="btn-trash"> <BsTrash /> </button>
                                        </Col>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col className="d-flex text-center flex-direction-column justify-content-center align-items-center py-3 mt-5">
                                    <button className="btn-plus">
                                        <BiPlusMedical />
                                    </button>
                                    <p className="btn-desc py-3">Add Option</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }


    
}


export default AddProductOptionAndPrice;




