import React , {Component, Suspense} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Img } from 'react-image';
import  comingsoon  from "../../images/comingsoon.png";
import  help_1_1  from "../../images/help-1/help-1-1.png";
import  help_2_2  from "../../images/help-1/help-1-2.png";
import  help_3_3  from "../../images/help-1/help-1-3.png";
import  help_4_4  from "../../images/help-1/help-1-4.png";
import  help_5_5  from "../../images/help-1/help-1-5.png";
import './Help.css';

class help1 extends Component{

    render(){
        return(
            <React.Fragment>
                <div className="w-100 bg-white">
                    <div className="help-header py-5 mx-auto text-center w-50">
                        <h1 className="header-font">
                            Welcome to arch17
                        </h1>
                        <h2 className="header-desc-font">
                            The World Network for architecture and interior design.
                        </h2>
                        <p className="px-5 mt-3 header-desc-2-font pb-5">
                        Our Mission is to create a trusted source of design information 
                        for the building industry. Where people can reach high quality and 
                        reliable Design Services and products from china and all over the world
                        </p>
                    </div>
                    <Container >
                        <Row className="bg-help-item item-2-row" >
                            <Col 
                            xs={{span:'12',offset:'0' ,order:'last'}} 
                            sm={{span:'12',offset:'0' ,order:'last'}} 
                            md={{span:'6',offset:'0' ,order:'first'}} 
                            lg={{span:'6',offset:'0' ,order:'first'}} 
                            xl={{span:'6',offset:'0' ,order:'first'}}
                            className="help-item-2-desc"
                            >
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div className="px-5 help-item-2">
                                        <h3 className="f-w-600  my-4">
                                        What Is arch17 Network?
                                        </h3>
                                        <p className="item-2-desc">
                                        Arch17 is a professional social network for the Architecture industry worldwide.
                                        We connect people, projects, and products, giving the users a comprehensive
                                        solution to <span>get inspired , design and shop products.</span> 
                                        </p>
                                        <p className="item-2-desc">
                                        Arch17 network consist of four sectors,
                                        <span>Arch17 Web Portal, 17 Design Club, Arch17 Magazine and 17 Design Lab</span>, 
                                        they make up an active platform where the construction industry leaders – 
                                        <span>architects, designers, Brands, and customers</span> – interact in a stimulating way.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col
                                xs={{span:'12',offset:'0' ,order:'first'}} 
                                sm={{span:'12',offset:'0' ,order:'first'}} 
                                md={{span:'6',offset:'0' ,order:'last'}} 
                                lg={{span:'6',offset:'0' ,order:'last'}} 
                                xl={{span:'6',offset:'0' ,order:'last'}}
                                className="help-item-2-desc"
                                >
                                <div className="text-center help-image help-item-2">
                                    <Suspense fallback={<p> loading images from supsencd </p>} >
                                        <Img 
                                        src={help_1_1}
                                        key={help_1_1}
                                        loader={<p> loading images from supsencd </p>}
                                        unloader={<button  > failed </button>}
                                        className=" img-fluid"/>
                                    </Suspense>
                                </div>
                            </Col>
                            </Row>
                            <Row className="py-0">
                            <Col
                                xs={12} 
                                sm={12} 
                                md={6} 
                                lg={6} 
                                xl={6}
                                className=" text-center p-1"
                            >
                                <div className="bg-help-item h-100">
                                    <div className="help-item-desc">
                                        <h3>
                                        Arch17.com
                                        </h3>
                                        <p>
                                        The architecture & Design Web Portal
                                        </p>
                                        <p>
                                        Source Design ideas, news and products
                                        </p>
                                        <span>
                                            Learn more 
                                        </span>
                                    </div>
                                    <div className="help-item-image">
                                        <Suspense fallback={<p> loading images from supsencd </p>} >
                                            <Img 
                                            src={help_2_2}
                                            key={help_2_2}
                                            loader={<p> loading images from supsencd </p>}
                                            unloader={<button  > failed </button>}
                                            className=" img-fluid mw-75" style={{maxWidth:'690px'}}/>
                                        </Suspense>
                                    </div>
                                </div>
                            </Col>
                            <Col
                                xs={12} 
                                sm={12} 
                                md={6} 
                                lg={6} 
                                xl={6}
                                className=" text-center p-1"
                            >
                                <div className="bg-help-item">
                                    <div  className="help-item-desc">
                                        <h3>
                                        17 Designclub
                                        </h3>
                                        <p>
                                        For designers and professionals in the industry
                                        </p>
                                        <span>
                                            Learn more 
                                        </span>
                                    </div>
                                    <div className="help-item-image">
                                        <Suspense fallback={<p> loading images from supsencd </p>} >
                                            <Img 
                                            src={help_3_3}
                                            key={help_3_3}
                                            loader={<p> loading images from supsencd </p>}
                                            unloader={<button  > failed </button>}
                                            className=" img-fluid mw-75" style={{maxWidth:'535px'}} />
                                        </Suspense>
                                    </div>
                                </div>
                            </Col>
                            <Col
                                xs={12} 
                                sm={12} 
                                md={6} 
                                lg={6} 
                                xl={6}
                                className=" text-center p-1"
                            >
                                <div className="bg-help-item h-100"> 
                                    <div className="help-item-desc ">
                                        <h3>
                                        Arch17 Magazine
                                        </h3>
                                        <p>
                                        A new guid to great architecture and interior style
                                        </p>
                                        <span>
                                            Learn more 
                                        </span>
                                    </div>
                                    <div className="help-item-image">
                                        <Suspense fallback={<p> loading images from supsencd </p>} >
                                            <Img 
                                            src={help_4_4}
                                            key={help_4_4}
                                            loader={<p> loading images from supsencd </p>}
                                            unloader={<button  > failed </button>}
                                            className=" img-fluid mw-75" style={{maxWidth:'415px'}}/>
                                        </Suspense>
                                    </div>
                                </div>
                            </Col>
                            <Col
                                xs={12} 
                                sm={12} 
                                md={6} 
                                lg={6} 
                                xl={6}
                                className=" text-center p-1"
                            >
                                <div className="bg-help-item">
                                    <div className="help-item-desc">
                                        <h3>
                                        17 Design lab
                                        </h3>
                                        <p>
                                        Offline products and materials library
                                        </p>
                                        <span>
                                            Learn more 
                                        </span>
                                    </div>
                                    <div className="help-item-image">
                                        <Suspense fallback={<p> loading images from supsencd </p>} >
                                            <Img 
                                            src={help_5_5}
                                            key={help_5_5}
                                            loader={<p> loading images from supsencd </p>}
                                            unloader={<button  > failed </button>}
                                            className=" img-fluid mw-75" style={{maxWidth:'350px'}}/>
                                        </Suspense>
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
export default help1;