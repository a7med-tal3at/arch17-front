import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import profile from "../../src/profiles.jpg";
import { IoMdSettings, IoIosMail } from "react-icons/io";
import { IoPersonAddSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import collection1 from "../../src/collection-1.png";
import collection2 from "../../src/collection-2.jpg";
import collection3 from "../../src/collection-3.jpg";
import collection4 from "../../src/h-1.png";
import collection5 from "../../src/h-2.png";
class DesignProfile extends Component {
 state = {
  isOwner: false,
 };
 render() {
  let { isOwner } = this.state;
  return (
   <React.Fragment>
    <div id="designer-profile" className="bg-white mg-page">
     <Container fluid>
      <Row className="justify-content-md-center">
       <Col md={{ span: 12 }}>
        <div className="profile-section">
         <div className="profile-img">
          <img src={profile} alt="profile" />
         </div>
         <div className="profile-heading">
          <h2 className="name">Muhamed Mahdy</h2>
          {isOwner ? (
           <div className="profile-btns">
            <button className="profile-settings-btn">
             <IoMdSettings /> Settings
            </button>
           </div>
          ) : (
           <div className="profile-btns">
            <button>
             <IoPersonAddSharp />
            </button>{" "}
            <button>
             <IoIosMail />
            </button>
           </div>
          )}
          <p className="profile-title">Interior Designer</p>
          <div className="profile-stats">
           Views <span className="views">164K </span> Followers{" "}
           <span className="follwers">164K</span>
          </div>
          <div className="profile-loc">
           <span>
            <MdLocationOn />
           </span>
           Shenzhen, China
          </div>
          <div className="profile-about">
           Interior designer specialized in medium and large scale residential
           and commercial buildings. Nearly 5 years of progressive experience in
           <span>See More</span>
          </div>
          <div className="profile-services">
           <h6>Services</h6>
           <ul>
            <li>Archeticture</li>
            <li>Interior Design</li>
            <li>Product Design</li>
            <li>Landscape</li>
            <li>Urpan Plan</li>
           </ul>
          </div>
         </div>
        </div>
       </Col>
       <Col md={{ span: 12 }} className="profile-mobile">
        <div className="profile-tabs">
         <Tabs>
          <TabList>
           <Tab>Projects</Tab>
           <Tab>Blogs & News</Tab>
           <Tab>Products</Tab>
           <Tab>Collection</Tab>
           <Tab>Follwing</Tab>
           <Tab>BOQ Lists</Tab>
          </TabList>
          <TabPanel>
           <div className="user-profile-tab">
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
            </Container>
           </div>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
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

export default DesignProfile;
