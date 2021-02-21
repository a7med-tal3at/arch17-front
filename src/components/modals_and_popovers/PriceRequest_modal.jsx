import React, { Component, useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
// import PriceRequest from './PriceRequest_modal';

function PriceRequest() {
 const [lgShow, setLgShow] = useState(false);
 //  let setShow = () => {
 setLgShow(this.props.is_open);
 //  };
 return (
  <>
   {/* <Button onClick={() => setLgShow(true)}>Large modal</Button> */}

   <Modal
    size="lg"
    show={lgShow}
    onHide={() => setLgShow(false)}
    aria-labelledby="example-modal-sizes-title-lg"
   >
    <Modal.Header closeButton>
     <Modal.Title id="example-modal-sizes-title-lg">Large Modal</Modal.Title>
    </Modal.Header>
    <Modal.Body>...</Modal.Body>
   </Modal>
  </>
 );
}

export default PriceRequest;
