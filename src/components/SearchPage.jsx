import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { BiChevronDown, BiChevronLeft, BiChevronRight } from "react-icons/bi";
// import pr1 from "../../src/pr1.jpg";
// import collection3 from "../../src/collection-3.jpg";
// import collection1 from "../../src/collection-1.png";

import sqaure1 from "../../src/square1.jpg";
import sqaure2 from "../../src/square2.jpg";
import sqaure3 from "../../src/square3.jpg";
import sqaure4 from "../../src/square4.jpg";
import sqaure5 from "../../src/square5.jpg";
import sqaure6 from "../../src/square6.jpg";
import sqaure7 from "../../src/square7.jpg";
class SearchPage extends Component {
 state = {};
 render() {
  return (
   <React.Fragment>
    <div id="search-page">
     <Container fluid>
      <Row className="justify-content-md-center">
       <Col md={{ span: 4 }}>
        <div className="search-accordion">
         <Accordion className="p-4 search-page-accordian">
          <div className="nesting">
           <span>All Categories </span>
           <BiChevronRight /> <span> Furniture</span>
          </div>
          <div className="filters-tags">
           <h5>Filters</h5>
           <div className="search-tags">
            <div className="tagable">Furniture</div>
            <div className="tagable">Sofa</div>
            <div className="clear-btn">
             <span>Clear All</span>
            </div>
           </div>
          </div>
          <Card>
           <Accordion.Toggle as={Card.Header} eventKey="0">
            All Categories{" "}
            <span className="accordion-icon">
             <BiChevronLeft />
            </span>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the body</Card.Body>
           </Accordion.Collapse>
          </Card>
          <Card>
           <Accordion.Toggle as={Card.Header} eventKey="1">
            All Furnitures{" "}
            <span className="accordion-icon">
             <BiChevronDown />
            </span>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm another body</Card.Body>
           </Accordion.Collapse>
          </Card>
          <Card>
           <Accordion.Toggle as={Card.Header} eventKey="2">
            Types{" "}
            <span className="accordion-icon">
             <BiChevronDown />
            </span>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="2">
            <Card.Body>Hello! I'm another body</Card.Body>
           </Accordion.Collapse>
          </Card>
          <Card>
           <Accordion.Toggle as={Card.Header} eventKey="3">
            Shape{" "}
            <span className="accordion-icon">
             <BiChevronDown />
            </span>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="3">
            <Card.Body>Hello! I'm another body</Card.Body>
           </Accordion.Collapse>
          </Card>
          <Card>
           <Accordion.Toggle as={Card.Header} eventKey="4">
            Material{" "}
            <span className="accordion-icon">
             <BiChevronDown />
            </span>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="4">
            <Card.Body>Hello! I'm another body</Card.Body>
           </Accordion.Collapse>
          </Card>
          <Card>
           <Accordion.Toggle as={Card.Header} eventKey="5">
            Style{" "}
            <span className="accordion-icon">
             <BiChevronDown />
            </span>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="5">
            <Card.Body>Hello! I'm another body</Card.Body>
           </Accordion.Collapse>
          </Card>
          <Card>
           <Accordion.Toggle as={Card.Header} eventKey="6">
            Base{" "}
            <span className="accordion-icon">
             <BiChevronDown />
            </span>
           </Accordion.Toggle>
           <Accordion.Collapse eventKey="6">
            <Card.Body>Hello! I'm another body</Card.Body>
           </Accordion.Collapse>
          </Card>
         </Accordion>
        </div>
       </Col>
       <Col md={{ span: 8 }} id="right-search-side">
        <Container fluid>
         <Row md={{ span: 12 }} id="check-sort">
          <Col lg={6}>
           <div className="check-btns">
            <div className="check-btn">
             <span>
              <input type="checkbox" /> Outdoor
             </span>
            </div>
            <div className="check-btn">
             <span>
              <input type="checkbox" /> For Kids
             </span>
            </div>
            <div className="check-btn">
             <span>
              <input type="checkbox" /> CAD/3D
             </span>
            </div>
           </div>
          </Col>
          <Col lg={6} className="sorts">
           filters and Sorts
          </Col>
         </Row>
         <Row md={{ span: 12 }}>
          <Col lg={4} sm={6} xs={12}>
           <div className="product-box">
            <div
             className="product-img"
             style={{ backgroundImage: `url(${sqaure6})` }}
            >
             <button className="save-product-btn">Save</button>
             <div className="file-btns">
              <button className="file-product-btn">CAD</button>
              <button className="file-product-btn">3D</button>
             </div>
            </div>

            <h4 className="product-name">Product Name</h4>
            <div className="product-desc">ENZO Meeting Room Table</div>
            {/* <hr /> */}
            <div className="product-price">¥ 1395.00</div>
           </div>
          </Col>
          <Col lg={4} sm={6} xs={12}>
           <div className="product-box">
            <div
             className="product-img"
             style={{ backgroundImage: `url(${sqaure1})` }}
            >
             <button className="save-product-btn">Save</button>
             <div className="file-btns">
              <button className="file-product-btn">CAD</button>
              <button className="file-product-btn">3D</button>
             </div>
            </div>
            <h4 className="product-name">New Office</h4>
            <div className="product-desc">ENZO Meeting Room Table</div>
            {/* <hr /> */}
            <div className="product-price">¥ 1395.00</div>
           </div>
          </Col>
          <Col lg={4} sm={6} xs={12}>
           <div className="product-box">
            <div
             className="product-img"
             style={{ backgroundImage: `url(${sqaure2})` }}
            >
             <button className="save-product-btn">Save</button>
             <div className="file-btns">
              <button className="file-product-btn">CAD</button>
              <button className="file-product-btn">3D</button>
             </div>
            </div>
            <h4 className="product-name">New Office</h4>
            <div className="product-desc">ENZO Meeting Room Table</div>
            {/* <hr /> */}
            <div className="product-price">¥ 1395.00</div>
           </div>
          </Col>
          <Col lg={4} sm={6} xs={12}>
           <div className="product-box">
            <div
             className="product-img"
             style={{ backgroundImage: `url(${sqaure3})` }}
            >
             <button className="save-product-btn">Save</button>
             <div className="file-btns">
              <button className="file-product-btn">CAD</button>
              <button className="file-product-btn">3D</button>
             </div>
            </div>
            <h4 className="product-name">New Office</h4>
            <div className="product-desc">ENZO Meeting Room Table</div>
            {/* <hr /> */}
            <div className="product-price">¥ 1395.00</div>
           </div>
          </Col>
          <Col lg={4} sm={6} xs={12}>
           <div className="product-box">
            <div
             className="product-img"
             style={{ backgroundImage: `url(${sqaure4})` }}
            >
             <button className="save-product-btn">Save</button>
             <div className="file-btns">
              <button className="file-product-btn">CAD</button>
              <button className="file-product-btn">3D</button>
             </div>
            </div>
            <h4 className="product-name">New Office</h4>
            <div className="product-desc">Shehenzin, China | 2019</div>
            {/* <hr /> */}
            <div className="product-price">¥ 1395.00</div>
           </div>
          </Col>
          <Col lg={4} sm={6} xs={12}>
           <div className="product-box">
            <div
             className="product-img"
             style={{ backgroundImage: `url(${sqaure5})` }}
            ></div>
            <h4 className="product-name">New Office</h4>
            <div className="product-desc">Shehenzin, China | 2019</div>
            {/* <hr /> */}
            <div className="product-price">¥ 1395.00</div>
           </div>
          </Col>
          <Col lg={4} sm={6} xs={12}>
           <div className="product-box">
            <div
             className="product-img"
             style={{ backgroundImage: `url(${sqaure7})` }}
            ></div>
            <h4 className="product-name">New Office</h4>
            <div className="product-desc">Shehenzin, China | 2019</div>
            {/* <hr /> */}
            <div className="product-price">¥ 1395.00</div>
           </div>
          </Col>
         </Row>
        </Container>
       </Col>
      </Row>
     </Container>
    </div>
   </React.Fragment>
  );
 }
}

export default SearchPage;
