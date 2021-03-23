import React, { Component } from "react";
import { Row, Container, Col } from "react-bootstrap";
import sqaure1 from "../../src/square1.jpg";
import sqaure2 from "../../src/square2.jpg";
import sqaure3 from "../../src/square3.jpg";
import sqaure4 from "../../src/square4.jpg";
import sqaure5 from "../../src/square5.jpg";
import sqaure6 from "../../src/square6.jpg";
import sqaure7 from "../../src/square7.jpg";
class AllCategories extends Component {
 state = {};
 render() {
  return (
   <React.Fragment>
    <div id="all-categories-page">
     <Container fluid>
      <Row md={{ span: 12 }}>
       <Col md={12}>
        <p>All Categories</p>
       </Col>
       <Col md={12}>
        <h3>Products Categories</h3>
       </Col>
       <Col md={4} sm={6} xs={12} className="category-col">
        <div className="category-box">
         <div
          className="category-img"
          style={{ backgroundImage: `url(${sqaure6})` }}
         ></div>
         <div className="category-name">
          <h2>Furniture</h2>
         </div>
        </div>
       </Col>
       <Col md={4} sm={6} xs={12} className="category-col">
        <div className="category-box">
         <div
          className="category-img"
          style={{ backgroundImage: `url(${sqaure2})` }}
         ></div>
         <div className="category-name">
          <h2>Lighting</h2>
         </div>
        </div>
       </Col>
       <Col md={4} sm={6} xs={12} className="category-col">
        <div className="category-box">
         <div
          className="category-img"
          style={{ backgroundImage: `url(${sqaure3})` }}
         ></div>
         <div className="category-name">
          <h2>Decore</h2>
         </div>
        </div>
       </Col>
       <Col md={4} sm={6} xs={12} className="category-col">
        <div className="category-box">
         <div
          className="category-img"
          style={{ backgroundImage: `url(${sqaure4})` }}
         ></div>
         <div className="category-name">
          <h2>Outdoor Furniture</h2>
         </div>
        </div>
       </Col>
       <Col md={4} sm={6} xs={12} className="category-col">
        <div className="category-box">
         <div
          className="category-img"
          style={{ backgroundImage: `url(${sqaure1})` }}
         ></div>
         <div className="category-name">
          <h2>Wellness</h2>
         </div>
        </div>
       </Col>
       <Col md={4} sm={6} xs={12} className="category-col">
        <div className="category-box">
         <div
          className="category-img"
          style={{ backgroundImage: `url(${sqaure7})` }}
         ></div>
         <div className="category-name">
          <h2>Kitchen</h2>
         </div>
        </div>
       </Col>
       <Col md={4} sm={6} xs={12} className="category-col">
        <div className="category-box">
         <div
          className="category-img"
          style={{ backgroundImage: `url(${sqaure7})` }}
         ></div>
         <div className="category-name">
          <h2>Finishes Materials</h2>
         </div>
        </div>
       </Col>
       <Col md={4} sm={6} xs={12} className="category-col">
        <div className="category-box">
         <div
          className="category-img"
          style={{ backgroundImage: `url(${sqaure2})` }}
         ></div>
         <div className="category-name">
          <h2>Kids Products</h2>
         </div>
        </div>
       </Col>
       <Col md={4} sm={6} xs={12} className="category-col">
        <div className="category-box">
         <div
          className="category-img"
          style={{ backgroundImage: `url(${sqaure5})` }}
         ></div>
         <div className="category-name">
          <h2>Construction Products</h2>
         </div>
        </div>
       </Col>
      </Row>
     </Container>
    </div>
   </React.Fragment>
  );
 }
}

export default AllCategories;
