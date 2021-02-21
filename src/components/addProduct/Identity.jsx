import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";

class Identity extends Component {
 state = {};
 render() {
  return (
   <div className="step-form">
    <Form>
     <div className="form-block">
      <Form.Group>
       <Form.Row>
        <Col>
         <Form.Label>Product Name</Form.Label>
         <Form.Control placeholder="First name" />
        </Col>
       </Form.Row>
      </Form.Group>
     </div>
     <div className="form-block">
      <Form.Group as={Row}>
       <Form.Label column md={12}>
        Product Category
       </Form.Label>
       <Form.Label column md={2} className="sub-label">
        Category *
       </Form.Label>
       <Col md={4}>
        <Form.Control as="select" defaultValue="Choose...">
         <option>Choose...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
        </Form.Control>
       </Col>
       <Form.Label column md={2} className="sub-label">
        Kind
       </Form.Label>
       <Col md={4}>
        <Form.Control as="select" defaultValue="Choose...">
         <option>Choose...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
        </Form.Control>
       </Col>
      </Form.Group>
      <Form.Group as={Row}>
       <Form.Label column md={2} className="sub-label">
        Type
       </Form.Label>
       <Col md={4}>
        <Form.Control as="select" defaultValue="Choose...">
         <option>Choose...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
        </Form.Control>
       </Col>
       <Form.Label column md={2} className="sub-label">
        Shape
       </Form.Label>
       <Col md={4}>
        <Form.Control as="select" defaultValue="Choose...">
         <option>Choose...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
        </Form.Control>
       </Col>
      </Form.Group>
      <Form.Group as={Row}>
       <Form.Label column md={2} className="sub-label">
        Style
       </Form.Label>
       <Col md={4}>
        <Form.Control as="select" defaultValue="Choose...">
         <option>Choose...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
        </Form.Control>
       </Col>
       <Form.Label column md={2} className="sub-label">
        Material
       </Form.Label>
       <Col md={4}>
        <Form.Control as="select" defaultValue="Choose...">
         <option>Choose...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
        </Form.Control>
       </Col>
      </Form.Group>
      <Form.Group as={Row}>
       <Form.Label column md={2} className="sub-label">
        Base
       </Form.Label>
       <Col md={4}>
        <Form.Control as="select" defaultValue="Choose...">
         <option>Choose...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
        </Form.Control>
       </Col>
       <Form.Label column md={2} className="sub-label">
        Seats
       </Form.Label>
       <Col md={4}>
        <Form.Control as="select" defaultValue="Choose...">
         <option>Choose...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
         <option>...</option>
        </Form.Control>
       </Col>
      </Form.Group>
     </div>
     <div className="form-blc">
      <Form.Group as={Row}>
       <Col md={12}>
        <Form.Label>Is this Video made for kids ? (Required)</Form.Label>
       </Col>
       <Col md={1}>
        <Form.Check
         type="radio"
         label="Yes"
         name="formHorizontalRadios"
         id="formHorizontalRadios1"
        />
       </Col>
       <Col md={1}>
        <Form.Check
         type="radio"
         label="No"
         name="formHorizontalRadios"
         id="formHorizontalRadios2"
        />
       </Col>
       <Col md={12}>
        <p className="light">
         Please check on yes if this products made spicily for kids.
        </p>
       </Col>
      </Form.Group>
     </div>
     <Form.Group as={Row}>
      <Col md={6}>
       <Form.Label>Collections / Sereies</Form.Label>
       <Form.Control placeholder="Search or create a new series" />
       <p className="light">
        Collect each series’s products in one collection.
       </p>
      </Col>
     </Form.Group>
     <Form.Group as={Row}>
      <Col md={6}>
       <Form.Label>Designer</Form.Label>
       <Form.Control placeholder="Search Designers by name or email" />
       <p className="light">
        Search and tag the product’s designer, If you can’t in find the designer
        click here to invite.
       </p>
      </Col>
     </Form.Group>
     <Form.Group as={Row}>
      <Col md={12}>
       <Form.Label>Product Files</Form.Label>
      </Col>
      <Col md={1}>
       <Form.Check
        type="radio"
        label="CAD"
        name="formHorizontalRadios"
        id="formHorizontalRadios1"
       />
      </Col>
      <Col md={1}>
       <Form.Check
        type="radio"
        label="3D"
        name="formHorizontalRadios"
        id="formHorizontalRadios2"
       />
      </Col>
      <Col md={12}>
       <p className="light">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti!
       </p>
      </Col>
     </Form.Group>
     <Form.Group>
      <Form.Row>
       <Col>
        <Form.Label>Product Tags </Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Enter Tags" />
       </Col>
      </Form.Row>
     </Form.Group>
     <Form.Group as={Row}>
      <Col md={6}>
       <Form.Label>Product Country or Origin</Form.Label>
       <Form.Control as="select" defaultValue="Choose...">
        <option>Choose...</option>
        <option>...</option>
        <option>...</option>
        <option>...</option>
        <option>...</option>
        <option>...</option>
       </Form.Control>
      </Col>
     </Form.Group>
    </Form>
   </div>
  );
 }
}

export default Identity;
