import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { IoMdShare, IoIosMail } from "react-icons/io";

import { IoEarthSharp, IoLocate } from "react-icons/io5";
import collection2 from "../../src/collection-2.jpg";
import profile from "../../src/profiles.jpg";
import collection3 from "../../src/collection-3.jpg";
import collection1 from "../../src/collection-1.png";
import collection4 from "../../src/h-1.png";
import collection5 from "../../src/h-2.png";
import pr1 from "../../src/pr1.jpg";
import pr2 from "../../src/pr2.jpg";
import pr3 from "../../src/pr3.jpg";
import pr4 from "../../src/pr4.jpg";
import pr5 from "../../src/pr5.png";
import store1 from "../../src/store1.jpg";
import grado from "../../src/grado.jpg";

class BrandPage extends Component {
 state = {};
 render() {
  return (
   <React.Fragment>
    <div id="prand-page" className="bg-white mg-page">
     <Container fluid>
      <Row className="justify-content-md-center">
       <Col md={{ span: 12 }}>
        <div className="cover-container-hero">
         <div
          className="cover-image-conatiner"
          style={{ backgroundImage: `url(${store1})` }}
         ></div>
        </div>
       </Col>
       {/* <Col md={{ span: 12 }} className="brand-profile">
        <div className="store-profile-box">
          <img className="profile-img" src={profile} alt="" />
         </div>
        <div className="profile-head-info">
         <h2>Muhamed Gomaa</h2>
        </div>
        <div className="store-btns">
         <button>Website</button>
         <button>Share</button>
         <button>Contact</button>
         <button>Follow</button>
        </div>
       </Col> */}

       <div className="row unmargin-row">
        <Col md={{ span: 2 }}>
         <div className="store-profile-box">
          <img className="profile-img" src={profile} alt="" />
         </div>
        </Col>
        <Col md={{ span: 4 }}>
         <div className="profile-head-info">
          <h2>Light Space</h2>
          <div className="loc-desc">
           <p className="br">Brand</p>
           <p>
            {/* <IoLocate /> */}
            Guangzuo, China
           </p>
          </div>
         </div>
        </Col>
        <Col md={{ span: 6 }}>
         <div className="store-btns">
          <button>
           <span>
            <IoEarthSharp />
           </span>
           <span>Website</span>
          </button>
          <button>
           <span>
            <IoMdShare />
           </span>
           <span>Share</span>
          </button>
          <button>
           <span>
            <IoIosMail />
           </span>
           <span>Contact</span>
          </button>
          <button className="follow-btn">
           <span></span>
           <span>Follow</span>
          </button>
         </div>
        </Col>
       </div>
       <Col md={{ span: 12 }} className="profile-pattern-content">
        <div className="profile-tabs store-tabs">
         <Tabs>
          <TabList>
           <Tab>Overveiw</Tab>
           <Tab>Products</Tab>
           <Tab>Projects</Tab>
           <Tab>Blogs</Tab>
           <Tab>Reseller</Tab>
           <Tab>Showrooms</Tab>
           <Tab>Designers</Tab>
          </TabList>
          <TabPanel>
           <div id="store-page-tab">
            <div className="about">
             <h2>About</h2>
             <p>
              lightspace’s vision is to be the most creative brand in public
              space furniture. Originality is our language. Design is our life.
              The constant expression of design using spatial awareness,
              creating identity and delivering functionality is the blood that
              runs through our brand. Our mission is to bridge the divide
              between Eastern and Western design and unite world leading
              designers from across the globe and in our native mainland to
              bring ideas and creatives together with high end manufacturing
              capabilities to create outstanding original design furniture using
              world class materials and manufacturing processes. We aim to be an
              internationally recognized brand for public space furniture that
              is focused on our core values of being always youthful, fun,
              collaborative and inspiring… lightspace, your inspiration…
             </p>
            </div>

            <div className="types">
             <h2>Product Types</h2>
             <div className="types-boxes">
              <div
               className="type-box no-opacity"
               style={{ backgroundImage: `url(${pr3})` }}
              ></div>
              <div
               className="type-box no-opacity"
               style={{ backgroundImage: `url(${pr4})` }}
              ></div>
              <div className="type-box"></div>
              <div className="type-box"></div>
              <div className="type-box"></div>
             </div>
            </div>
            <div className="store-collection">
             <h2>Collections</h2>
             <Container fluid>
              <Row md={{ span: 12 }}>
               <Col lg={4} sm={6} xs={12} className="collection-col">
                <div className="collection-box">
                 <div
                  className="rect rect-0"
                  style={{ backgroundImage: `url(${collection1})` }}
                 ></div>
                 <div
                  className="rect rect-1"
                  style={{ backgroundImage: `url(${collection2})` }}
                 ></div>
                 <div
                  className="rect rect-2"
                  style={{ backgroundImage: `url(${collection3})` }}
                 ></div>
                </div>
                <div className="collection-text">
                 <h5>Collection Name</h5>
                 <p>NO Topics . Created By Creator of the collection</p>
                </div>
               </Col>
               <Col lg={4} sm={6} xs={12} className="collection-col">
                <div className="collection-box">
                 <div
                  className="rect rect-0"
                  style={{ backgroundImage: `url(${collection5})` }}
                 ></div>
                 <div
                  className="rect rect-1"
                  style={{ backgroundImage: `url(${collection4})` }}
                 ></div>
                 <div
                  className="rect rect-2"
                  style={{ backgroundImage: `url(${collection2})` }}
                 ></div>
                </div>
                <div className="collection-text">
                 <h5>Collection Name</h5>
                 <p>NO Topics . Created By Creator of the collection</p>
                </div>
               </Col>
               <Col lg={4} sm={6} xs={12} className="collection-col">
                <div className="collection-box">
                 <div className="rect rect-0"></div>
                 <div className="rect rect-1"></div>
                 <div className="rect rect-2"></div>
                </div>
                <div className="collection-text">
                 <h5>Collection Name</h5>
                 <p>NO Topics . Created By Creator of the collection</p>
                </div>
               </Col>
              </Row>
             </Container>
            </div>
            {/* </Col> */}
            {/* </Container> */}
           </div>
          </TabPanel>
          <TabPanel>
           <Container fluid>
            <Row md={{ span: 12 }}>
             <Col lg={3} sm={4} xs={12}>
              <div className="product-box">
               <div
                className="product-img"
                style={{ backgroundImage: `url(${pr5})` }}
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
             <Col lg={3} sm={4} xs={12}>
              <div className="product-box">
               <div
                className="product-img"
                style={{ backgroundImage: `url(${pr2})` }}
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
             <Col lg={3} sm={4} xs={12}>
              <div className="product-box">
               <div
                className="product-img"
                style={{ backgroundImage: `url(${pr3})` }}
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
             <Col lg={3} sm={4} xs={12}>
              <div className="product-box">
               <div
                className="product-img"
                style={{ backgroundImage: `url(${pr4})` }}
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
             <Col lg={3} sm={4} xs={12}>
              <div className="product-box">
               <div
                className="product-img"
                style={{ backgroundImage: `url(${pr3})` }}
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
             <Col lg={3} sm={4} xs={12}>
              <div className="product-box">
               <div
                className="product-img"
                style={{ backgroundImage: `url(${collection2})` }}
               ></div>
               <h4 className="product-name">New Office</h4>
               <div className="product-desc">Shehenzin, China | 2019</div>
               {/* <hr /> */}
               <div className="product-price">¥ 1395.00</div>
              </div>
             </Col>
             <Col lg={3} sm={4} xs={12}>
              <div className="product-box">
               <div
                className="product-img"
                style={{ backgroundImage: `url(${collection5})` }}
               ></div>
               <h4 className="product-name">New Office</h4>
               <div className="product-desc">Shehenzin, China | 2019</div>
               {/* <hr /> */}
               <div className="product-price">¥ 1395.00</div>
              </div>
             </Col>
            </Row>
           </Container>
          </TabPanel>
          <TabPanel>
           <Container fluid>
            <Row md={{ span: 12 }}>
             <Col lg={4} sm={6} xs={12} className="project-col">
              <div className="project-box">
               <div
                className="project-img"
                style={{ backgroundImage: `url(${collection5})` }}
               ></div>
               <h4 className="project-name">New Office</h4>
               <div className="project-loc">Shehenzin, China | 2019</div>
               <hr />
               <div className="project-tag">Interior Design</div>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="project-col">
              <div className="project-box">
               <div
                className="project-img"
                style={{ backgroundImage: `url(${collection4})` }}
               ></div>
               <h4 className="project-name">New Office</h4>
               <div className="project-loc">Shehenzin, China | 2019</div>
               <hr />
               <div className="project-tag">Interior Design</div>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="project-col">
              <div className="project-box">
               <div
                className="project-img"
                style={{ backgroundImage: `url(${collection1})` }}
               ></div>
               <h4 className="project-name">New Office</h4>
               <div className="project-loc">Shehenzin, China | 2019</div>
               <hr />
               <div className="project-tag">Interior Design</div>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="project-col">
              <div className="project-box">
               <div
                className="project-img"
                style={{ backgroundImage: `url(${collection1})` }}
               ></div>
               <h4 className="project-name">New Office</h4>
               <div className="project-loc">Shehenzin, China | 2019</div>
               <hr />
               <div className="project-tag">Interior Design</div>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="project-col">
              <div className="project-box">
               <div
                className="project-img"
                style={{ backgroundImage: `url(${collection2})` }}
               ></div>
               <h4 className="project-name">New Office</h4>
               <div className="project-loc">Shehenzin, China | 2019</div>
               <hr />
               <div className="project-tag">Interior Design</div>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="project-col">
              <div className="project-box">
               <div
                className="project-img"
                style={{ backgroundImage: `url(${collection3})` }}
               ></div>
               <h4 className="project-name">New Office</h4>
               <div className="project-loc">Shehenzin, China | 2019</div>
               <hr />
               <div className="project-tag">Interior Design</div>
              </div>
             </Col>
            </Row>
           </Container>{" "}
          </TabPanel>
          <TabPanel>{/* <BocList /> */}</TabPanel>
          <TabPanel>
           <Container fluid>
            <Row md={{ span: 12 }}>
             <Col lg={4} sm={6} xs={12} className="collection-col">
              <div className="collection-box">
               <div className="rect rect-0"></div>
               <div className="rect rect-1"></div>
               <div className="rect rect-2"></div>
              </div>
              <div
               className="brand-img"
               style={{ backgroundImage: `url(${grado})` }}
              ></div>
              <div className="collection-text">
               <h5>Name</h5>
               <p>Type . No Items</p>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="collection-col">
              <div className="collection-box">
               <div className="rect rect-0"></div>
               <div className="rect rect-1"></div>
               <div className="rect rect-2"></div>
              </div>
              <div className="brand-img"></div>
              <div className="collection-text">
               <h5>Brand Name</h5>
               <p>Brand . 50 Product</p>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="collection-col">
              <div className="collection-box">
               <div className="rect rect-0"></div>
               <div className="rect rect-1"></div>
               <div className="rect rect-2"></div>
              </div>
              <div className="brand-img"></div>
              <div className="collection-text">
               <h5>Store Name</h5>
               <p>multi brand store . 50 Product</p>
              </div>
             </Col>
            </Row>
           </Container>
          </TabPanel>
          <TabPanel>
           <Container fluid>
            <Row md={{ span: 12 }}>
             <Col lg={4} sm={6} xs={12} className="project-col">
              <div className="project-box">
               <div
                className="project-img"
                style={{ backgroundImage: `url(${collection5})` }}
               ></div>
               <h4 className="project-name">New Office</h4>
               <div className="project-loc">Shehenzin, China | 2019</div>
               <hr />
               <div className="project-tag">Interior Design</div>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="project-col">
              <div className="project-box">
               <div
                className="project-img"
                style={{ backgroundImage: `url(${collection4})` }}
               ></div>
               <h4 className="project-name">New Office</h4>
               <div className="project-loc">Shehenzin, China | 2019</div>
               <hr />
               <div className="project-tag">Interior Design</div>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="project-col">
              <div className="project-box">
               <div
                className="project-img"
                style={{ backgroundImage: `url(${collection1})` }}
               ></div>
               <h4 className="project-name">New Office</h4>
               <div className="project-loc">Shehenzin, China | 2019</div>
               <hr />
               <div className="project-tag">Interior Design</div>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="project-col">
              <div className="project-box">
               <div
                className="project-img"
                style={{ backgroundImage: `url(${collection1})` }}
               ></div>
               <h4 className="project-name">New Office</h4>
               <div className="project-loc">Shehenzin, China | 2019</div>
               <hr />
               <div className="project-tag">Interior Design</div>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="project-col">
              <div className="project-box">
               <div
                className="project-img"
                style={{ backgroundImage: `url(${collection2})` }}
               ></div>
               <h4 className="project-name">New Office</h4>
               <div className="project-loc">Shehenzin, China | 2019</div>
               <hr />
               <div className="project-tag">Interior Design</div>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="project-col">
              <div className="project-box">
               <div
                className="project-img"
                style={{ backgroundImage: `url(${collection3})` }}
               ></div>
               <h4 className="project-name">New Office</h4>
               <div className="project-loc">Shehenzin, China | 2019</div>
               <hr />
               <div className="project-tag">Interior Design</div>
              </div>
             </Col>
            </Row>
           </Container>{" "}
          </TabPanel>
          <TabPanel>
           <Container fluid>
            <Row md={{ span: 12 }}>
             <Col lg={4} sm={6} xs={12} className="collection-col">
              <div className="collection-box">
               <div className="rect rect-0"></div>
               <div className="rect rect-1"></div>
               <div className="rect rect-2"></div>
              </div>
              <div
               className="brand-img"
               style={{ backgroundImage: `url(${grado})` }}
              ></div>
              <div className="collection-text">
               <h5>Designer Name</h5>
               <p>Designer Company</p>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="collection-col">
              <div className="collection-box">
               <div className="rect rect-0"></div>
               <div className="rect rect-1"></div>
               <div className="rect rect-2"></div>
              </div>
              <div className="brand-img"></div>
              <div className="collection-text">
               <h5>Designer Name</h5>
               <p>Brand . 50 Product</p>
              </div>
             </Col>
             <Col lg={4} sm={6} xs={12} className="collection-col">
              <div className="collection-box">
               <div className="rect rect-0"></div>
               <div className="rect rect-1"></div>
               <div className="rect rect-2"></div>
              </div>
              <div className="brand-img"></div>
              <div className="collection-text">
               <h5>Designer Name</h5>
               <p>multi brand store . 50 Product</p>
              </div>
             </Col>
            </Row>
           </Container>
          </TabPanel>
         </Tabs>
        </div>
       </Col>
      </Row>
     </Container>
    </div>
   </React.Fragment>
  );
 }
}

export default BrandPage;
