import React , {Component, Suspense} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Img } from 'react-image';
import  comingsoon2s  from "../../images/comingsoon2.png";
import  comingsoon  from "../../images/comingsoon.png";
import {AiOutlineSearch} from 'react-icons/ai'; 
import { IoChatbubbles, IoDocumentTextOutline } from 'react-icons/io5';
import { FaHandHoldingUsd, FaLayerGroup } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';
import { BsScrewdriver } from 'react-icons/bs';

import './Help.css';
class help2 extends Component{
    render(){
        return(
            <React.Fragment>
                <div className="w-100 bg-white">
                    <Container>
                        <div className="help-2-header py-5 mx-auto text-center " style={{backgroundImage:'url('+comingsoon2s+')'}}>
                            <div className="text-center help-image help-2-item ">
                                <h1 className="header-font f-w-500">
                                www.arch17.com
                                </h1>
                                <h2 className="header-desc-font">
                                Source Design ideas, news and products
                                </h2>
                            </div>
                        </div>
                        <Row className="item-2-row" >
                            <Col
                                xs={{span:'12',offset:'0' ,order:'last'}} 
                                sm={{span:'12',offset:'0' ,order:'last'}} 
                                md={{span:'6',offset:'0' ,order:'first'}} 
                                lg={{span:'6',offset:'0' ,order:'first'}} 
                                xl={{span:'6',offset:'0' ,order:'first'}}
                                className="help-item-2-desc none-mobile"
                                >
                                <div className="text-center help-image help-item-2">
                                    <Suspense fallback={<p> loading images from supsencd </p>} >
                                        <Img 
                                        src={comingsoon}
                                        key={comingsoon}
                                        loader={<p> loading images from supsencd </p>}
                                        unloader={<button  > failed </button>}
                                        className="w-auto h-auto"/>
                                    </Suspense>
                                </div>
                            </Col>
                            <Col 
                                xs={{span:'12',offset:'0' ,order:'first'}} 
                                sm={{span:'12',offset:'0' ,order:'first'}} 
                                md={{span:'6',offset:'0' ,order:'last'}} 
                                lg={{span:'6',offset:'0' ,order:'last'}} 
                                xl={{span:'6',offset:'0' ,order:'last'}}
                                className="help-item-2-desc "
                            >
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div className="help-2-item-2  ">
                                        <h3 className="f-w-600 my-4">
                                        Source Design Ideas, News, Trends and Products
                                        </h3>
                                        <div className="text-center help-image help-2-item-2 none-descktop">
                                            <Suspense fallback={<p> loading images from supsencd </p>} >
                                                <Img 
                                                src={comingsoon}
                                                key={comingsoon}
                                                loader={<p> loading images from supsencd </p>}
                                                unloader={<button  > failed </button>}
                                                className="w-auto h-auto"/>
                                            </Suspense>
                                        </div>
                                        <p className="item-2-desc">
                                        Arch17.com consists of two parts, 
                                        Product sourcing, where users can discover thousands of design products.
                                        The online magazine where users can find design ideas and inspirations in projects,
                                        Design blogs, and news.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                            
                        <Row className="item-2-row" >
                        <Col 
                            xs={{span:'12',offset:'0' ,order:'last'}} 
                            sm={{span:'12',offset:'0' ,order:'last'}} 
                            md={{span:'6',offset:'0' ,order:'first'}} 
                            lg={{span:'6',offset:'0' ,order:'first'}} 
                            xl={{span:'6',offset:'0' ,order:'first'}}
                                className="help-item-2-desc "
                            >
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div className="help-2-item-2  ">
                                        <h3 className="f-w-600 my-4">
                                        Find Furniture, Lighting and Materials
                                        </h3>
                                        <div className="text-center help-image help-2-item-2 none-descktop">
                                            <Suspense fallback={<p> loading images from supsencd </p>} >
                                                <Img 
                                                src={comingsoon}
                                                key={comingsoon}
                                                loader={<p> loading images from supsencd </p>}
                                                unloader={<button  > failed </button>}
                                                className="w-auto h-auto"/>
                                            </Suspense>
                                        </div>
                                        <p className="item-2-desc">
                                        Discover new Products for every type of project ,
                                        Search by space, type, style, material and price rang
                                        from our online catalogue with Thousands of items from 
                                        Dozens of brands Our daily updated collections daily updated collections.
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
                                className="help-item-2-desc none-mobile"
                                >
                                <div className="text-center help-image help-item-2">
                                    <Suspense fallback={<p> loading images from supsencd </p>} >
                                        <Img 
                                        src={comingsoon}
                                        key={comingsoon}
                                        loader={<p> loading images from supsencd </p>}
                                        unloader={<button  > failed </button>}
                                        className="w-auto h-auto"/>
                                    </Suspense>
                                </div>
                            </Col>
                            </Row>
                            <Row className="item-2-row" >
                            <Col
                                xs={{span:'12',offset:'0' ,order:'last'}} 
                                sm={{span:'12',offset:'0' ,order:'last'}} 
                                md={{span:'6',offset:'0' ,order:'first'}} 
                                lg={{span:'6',offset:'0' ,order:'first'}} 
                                xl={{span:'6',offset:'0' ,order:'first'}}
                                className="help-item-2-desc none-mobile"
                                >
                                <div className="text-center help-image help-item-2">
                                    <Suspense fallback={<p> loading images from supsencd </p>} >
                                        <Img 
                                        src={comingsoon}
                                        key={comingsoon}
                                        loader={<p> loading images from supsencd </p>}
                                        unloader={<button  > failed </button>}
                                        className="w-auto h-auto"/>
                                    </Suspense>
                                </div>
                            </Col>
                            <Col 
                                xs={{span:'12',offset:'0' ,order:'first'}} 
                                sm={{span:'12',offset:'0' ,order:'first'}} 
                                md={{span:'6',offset:'0' ,order:'last'}} 
                                lg={{span:'6',offset:'0' ,order:'last'}} 
                                xl={{span:'6',offset:'0' ,order:'last'}}
                                className="help-item-2-desc "
                            >
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div className="help-2-item-2  ">
                                        <h3 className="f-w-600 my-4">
                                        High-quality product and service
                                        </h3>
                                        <div className="text-center help-image help-2-item-2 none-descktop">
                                            <Suspense fallback={<p> loading images from supsencd </p>} >
                                                <Img 
                                                src={comingsoon}
                                                key={comingsoon}
                                                loader={<p> loading images from supsencd </p>}
                                                unloader={<button  > failed </button>}
                                                className="w-auto h-auto"/>
                                            </Suspense>
                                        </div>
                                        <p className="item-2-desc">
                                        We made it easy for buyers and designers worldwide to reach and shop high-quality 
                                        with affordable prices products from china and all over the world, all brands and 
                                        manufacturers are vetted and only high-quality products are listed.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="item-2-row" >
                        <Col 
                            xs={{span:'12',offset:'0' ,order:'last'}} 
                            sm={{span:'12',offset:'0' ,order:'last'}} 
                            md={{span:'6',offset:'0' ,order:'first'}} 
                            lg={{span:'6',offset:'0' ,order:'first'}} 
                            xl={{span:'6',offset:'0' ,order:'first'}}
                                className="help-item-2-desc "
                            >
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div className="help-2-item-2  ">
                                        <h3 className="f-w-600 my-4">
                                        Request products catalogues and price online
                                        </h3>
                                        <div className="text-center help-image help-2-item-2 none-descktop">
                                            <Suspense fallback={<p> loading images from supsencd </p>} >
                                                <Img 
                                                src={comingsoon}
                                                key={comingsoon}
                                                loader={<p> loading images from supsencd </p>}
                                                unloader={<button  > failed </button>}
                                                className="w-auto h-auto"/>
                                            </Suspense>
                                        </div>
                                        <p className="item-2-desc">
                                        Request price Quote, material samples, and BIM / Cad files for drawing and renders.
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
                                className="help-item-2-desc none-mobile"
                                >
                                <div className="text-center help-image help-item-2">
                                    <Suspense fallback={<p> loading images from supsencd </p>} >
                                        <Img 
                                        src={comingsoon}
                                        key={comingsoon}
                                        loader={<p> loading images from supsencd </p>}
                                        unloader={<button  > failed </button>}
                                        className="w-auto h-auto"/>
                                    </Suspense>
                                </div>
                            </Col>
                            </Row>
                            <Row className="item-2-row" >
                            <Col
                                xs={{span:'12',offset:'0' ,order:'last'}} 
                                sm={{span:'12',offset:'0' ,order:'last'}} 
                                md={{span:'6',offset:'0' ,order:'first'}} 
                                lg={{span:'6',offset:'0' ,order:'first'}} 
                                xl={{span:'6',offset:'0' ,order:'first'}}
                                className="help-item-2-desc none-mobile"
                                >
                                <div className="text-center help-image help-item-2">
                                    <Suspense fallback={<p> loading images from supsencd </p>} >
                                        <Img 
                                        src={comingsoon}
                                        key={comingsoon}
                                        loader={<p> loading images from supsencd </p>}
                                        unloader={<button  > failed </button>}
                                        className="w-auto h-auto"/>
                                    </Suspense>
                                </div>
                            </Col>
                            <Col 
                                xs={{span:'12',offset:'0' ,order:'first'}} 
                                sm={{span:'12',offset:'0' ,order:'first'}} 
                                md={{span:'6',offset:'0' ,order:'last'}} 
                                lg={{span:'6',offset:'0' ,order:'last'}} 
                                xl={{span:'6',offset:'0' ,order:'last'}}
                                className="help-item-2-desc "
                            >
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div className="help-2-item-2  ">
                                        <h3 className="f-w-600 my-4">
                                        Explore design projects and find the latest in the industry
                                        </h3>
                                        <div className="text-center help-image help-2-item-2 none-descktop">
                                            <Suspense fallback={<p> loading images from supsencd </p>} >
                                                <Img 
                                                src={comingsoon}
                                                key={comingsoon}
                                                loader={<p> loading images from supsencd </p>}
                                                unloader={<button  > failed </button>}
                                                className="w-auto h-auto"/>
                                            </Suspense>
                                        </div>
                                        <p className="item-2-desc">
                                        On arch17 online magazine you can source ides for your architecture 
                                        and interior projects and Stay updated on trends, projects and the 
                                        latest collections from brands and designers.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                            
                        <Row className="item-2-row" >
                        <Col 
                            xs={{span:'12',offset:'0' ,order:'last'}} 
                            sm={{span:'12',offset:'0' ,order:'last'}} 
                            md={{span:'6',offset:'0' ,order:'first'}} 
                            lg={{span:'6',offset:'0' ,order:'first'}} 
                            xl={{span:'6',offset:'0' ,order:'first'}}
                                className="help-item-2-desc "
                            >
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div className="help-2-item-2  ">
                                        <h3 className="f-w-600 my-4">
                                        Get in touch with designers And brands.
                                        </h3>
                                        <div className="text-center help-image help-2-item-2 none-descktop">
                                            <Suspense fallback={<p> loading images from supsencd </p>} >
                                                <Img 
                                                src={comingsoon}
                                                key={comingsoon}
                                                loader={<p> loading images from supsencd </p>}
                                                unloader={<button  > failed </button>}
                                                className="w-auto h-auto"/>
                                            </Suspense>
                                        </div>
                                        <p className="item-2-desc">
                                        Every project page includes three layers of information, project content, 
                                        designers contact and, featured products and brands.
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
                                className="help-item-2-desc none-mobile"
                                >
                                <div className="text-center help-image help-item-2">
                                    <Suspense fallback={<p> loading images from supsencd </p>} >
                                        <Img 
                                        src={comingsoon}
                                        key={comingsoon}
                                        loader={<p> loading images from supsencd </p>}
                                        unloader={<button  > failed </button>}
                                        className="w-auto h-auto"/>
                                    </Suspense>
                                </div>
                            </Col>
                            </Row>
                            <Row className="item-2-row" >
                            <Col
                                xs={{span:'12',offset:'0' ,order:'last'}} 
                                sm={{span:'12',offset:'0' ,order:'last'}} 
                                md={{span:'6',offset:'0' ,order:'first'}} 
                                lg={{span:'6',offset:'0' ,order:'first'}} 
                                xl={{span:'6',offset:'0' ,order:'first'}}
                                className="help-item-2-desc none-mobile"
                                >
                                <div className="text-center help-image help-item-2">
                                    <Suspense fallback={<p> loading images from supsencd </p>} >
                                        <Img 
                                        src={comingsoon}
                                        key={comingsoon}
                                        loader={<p> loading images from supsencd </p>}
                                        unloader={<button  > failed </button>}
                                        className="w-auto h-auto"/>
                                    </Suspense>
                                </div>
                            </Col>
                            <Col 
                                xs={{span:'12',offset:'0' ,order:'first'}} 
                                sm={{span:'12',offset:'0' ,order:'first'}} 
                                md={{span:'6',offset:'0' ,order:'last'}} 
                                lg={{span:'6',offset:'0' ,order:'last'}} 
                                xl={{span:'6',offset:'0' ,order:'last'}}
                                className="help-item-2-desc "
                            >
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div className="help-2-item-2  ">
                                        <h3 className="f-w-600 my-4">
                                        Find Professionals and send Online Quote for your projects
                                        </h3>
                                        <div className="text-center help-image help-2-item-2 none-descktop">
                                            <Suspense fallback={<p> loading images from supsencd </p>} >
                                                <Img 
                                                src={comingsoon}
                                                key={comingsoon}
                                                loader={<p> loading images from supsencd </p>}
                                                unloader={<button  > failed </button>}
                                                className="w-auto h-auto"/>
                                            </Suspense>
                                        </div>
                                        <p className="item-2-desc">
                                        Find designers and architects , 
                                        and construction companies online to design and renovate your home, 
                                        office and other properties. You can search professionals by the service type, 
                                        architecture, interior design, landscape & More. 
                                        <span>For professionals create your company page now</span>
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="item-2-row" >
                        <Col 
                            xs={{span:'12',offset:'0' ,order:'last'}} 
                            sm={{span:'12',offset:'0' ,order:'last'}} 
                            md={{span:'6',offset:'0' ,order:'first'}} 
                            lg={{span:'6',offset:'0' ,order:'first'}} 
                            xl={{span:'6',offset:'0' ,order:'first'}}
                                className="help-item-2-desc "
                            >
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div className="help-2-item-2  ">
                                        <h3 className="f-w-600 my-4">
                                        Easy-to-use Features keeps You updated and organized
                                        </h3>
                                        <div className="text-center help-image help-2-item-2 none-descktop">
                                            <Suspense fallback={<p> loading images from supsencd </p>} >
                                                <Img 
                                                src={comingsoon}
                                                key={comingsoon}
                                                loader={<p> loading images from supsencd </p>}
                                                unloader={<button  > failed </button>}
                                                className="w-auto h-auto"/>
                                            </Suspense>
                                        </div>
                                        <p className="item-2-desc">
                                        Arch17 offers you a set of features that simplifies how you
                                        find design ideas, source and buy design products for your projects. 
                                        Moreover, we help you collect your sourcing in personalized collections 
                                        and create your online design library.
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
                                className="help-item-2-desc none-mobile"
                                >
                                <div className="text-center help-image help-item-2">
                                    <Suspense fallback={<p> loading images from supsencd </p>} >
                                        <Img 
                                        src={comingsoon}
                                        key={comingsoon}
                                        loader={<p> loading images from supsencd </p>}
                                        unloader={<button  > failed </button>}
                                        className="w-auto h-auto"/>
                                    </Suspense>
                                </div>
                            </Col>
                            </Row>
                            <Row className="item-2-row" >
                            <Col
                                xs={{span:'12',offset:'0' ,order:'last'}} 
                                sm={{span:'12',offset:'0' ,order:'last'}} 
                                md={{span:'6',offset:'0' ,order:'first'}} 
                                lg={{span:'6',offset:'0' ,order:'first'}} 
                                xl={{span:'6',offset:'0' ,order:'first'}}
                                className="help-item-2-desc none-mobile"
                                >
                                <div className="text-center help-image help-item-2">
                                    <Suspense fallback={<p> loading images from supsencd </p>} >
                                        <Img 
                                        src={comingsoon}
                                        key={comingsoon}
                                        loader={<p> loading images from supsencd </p>}
                                        unloader={<button  > failed </button>}
                                        className="w-auto h-auto"/>
                                    </Suspense>
                                </div>
                            </Col>
                            <Col 
                                xs={{span:'12',offset:'0' ,order:'first'}} 
                                sm={{span:'12',offset:'0' ,order:'first'}} 
                                md={{span:'6',offset:'0' ,order:'last'}} 
                                lg={{span:'6',offset:'0' ,order:'last'}} 
                                xl={{span:'6',offset:'0' ,order:'last'}}
                                className="help-item-2-desc "
                            >
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div className="help-2-item-2  ">
                                        <h3 className="f-w-600 my-4">
                                        Multilingual Customer  Care service
                                        </h3>
                                        <div className="text-center help-image help-2-item-2 none-descktop">
                                            <Suspense fallback={<p> loading images from supsencd </p>} >
                                                <Img 
                                                src={comingsoon}
                                                key={comingsoon}
                                                loader={<p> loading images from supsencd </p>}
                                                unloader={<button  > failed </button>}
                                                className="w-auto h-auto"/>
                                            </Suspense>
                                        </div>
                                        <p className="item-2-desc">
                                        Our Customer Care team includes architects, 
                                        designers and professionals backed by an international experience. 
                                        We take care of customers for both pre-sales and after-sales, 
                                        from product sourcing to providing tailored quotations and
                                        suggesting the best shipping option.
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <Row className="item-2-row" >
                        <Col 
                            xs={{span:'12',offset:'0' ,order:'last'}} 
                            sm={{span:'12',offset:'0' ,order:'last'}} 
                            md={{span:'6',offset:'0' ,order:'first'}} 
                            lg={{span:'6',offset:'0' ,order:'first'}} 
                            xl={{span:'6',offset:'0' ,order:'first'}}
                                className="help-item-2-desc "
                            >
                                <div className="w-100 h-100 d-flex align-items-center justify-content-center">
                                    <div className="help-2-item-2  ">
                                        <h3 className="f-w-600 my-4">
                                        Rely on our team of specialists to support you at all stages.
                                        </h3>
                                        <div className="text-center help-image help-2-item-2 none-descktop">
                                            <Suspense fallback={<p> loading images from supsencd </p>} >
                                                <Img 
                                                src={comingsoon}
                                                key={comingsoon}
                                                loader={<p> loading images from supsencd </p>}
                                                unloader={<button  > failed </button>}
                                                className="w-auto h-auto"/>
                                            </Suspense>
                                        </div>
                                        <Container className="py-2 my-3">
                                            <Row>
                                                <Col xs={6} sm={6} md={6} lg={6} xl={6} className="pl-0 pr-0" >
                                                    <div className="d-flex">
                                                        <span className="mr-1 pr-1">
                                                            <FaLayerGroup className="help-2-desc-item-icon"/>
                                                        </span>
                                                        <div className="help-2-desc-item">
                                                            <h3>
                                                                Sourcing Consultants
                                                            </h3>
                                                            <p>
                                                            Our team can help you to source products for your projects 
                                                            and Create your FF&E specification,Keeping it on time and in budget.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </Col>
                                                
                                                <Col  xs={6} sm={6} md={6} lg={6} xl={6} className="pl-0 pr-0" >
                                                <div className="d-flex">
                                                        <span className="mr-1 pr-1">
                                                            <IoChatbubbles className="help-2-desc-item-icon"/>
                                                        </span>
                                                    <div className="help-2-desc-item">
                                                        <h3>
                                                        Communication
                                                        </h3>
                                                        <p>
                                                        We handle all the communication between you and all the manufactures and admins.
                                                        </p>
                                                    </div>
                                                    </div>
                                                </Col>
                                                
                                                <Col  xs={6} sm={6} md={6} lg={6} xl={6} className="pl-0 pr-0">
                                                <div className="d-flex">
                                                        <span className="mr-1 pr-1">
                                                            <MdLocalShipping className="help-2-desc-item-icon"/>
                                                        </span>
                                                    <div className="help-2-desc-item">
                                                        <h3>
                                                        Consolidated delivery
                                                        </h3>
                                                        <p>
                                                        With best shipping prices, We’ll consolidate orders from multiple 
                                                        suppliers and deliver when required.
                                                        </p>
                                                    </div>
                                                    </div>
                                                </Col>
                                                
                                                <Col  xs={6} sm={6} md={6} lg={6} xl={6} className="pl-0 pr-0">
                                                <div className="d-flex">
                                                        <span className="mr-1 pr-1">
                                                            <BsScrewdriver className="help-2-desc-item-icon"/>
                                                        </span>
                                                    <div className="help-2-desc-item">
                                                        <h3>
                                                        Installation
                                                        </h3>
                                                        <p>
                                                        Our project managers will communicate with a local installation 
                                                        workers and supervise them to install all products on site.
                                                        </p>
                                                    </div>
                                                    </div>
                                                </Col>
                                            </Row>
                                            <div>
                                                <button className="btn btn-dark" style={{backgroundColor:'#000'}}> Start New Project </button> <span className=" mx-3 text-dark " style={{textDecoration:'underline',verticalAlign:'bottom'}}> Book A Demo </span>
                                            </div>
                                        </Container>
                                    </div>
                                </div>
                            </Col>
                            <Col
                                xs={{span:'12',offset:'0' ,order:'first'}} 
                                sm={{span:'12',offset:'0' ,order:'first'}} 
                                md={{span:'6',offset:'0' ,order:'last'}} 
                                lg={{span:'6',offset:'0' ,order:'last'}} 
                                xl={{span:'6',offset:'0' ,order:'last'}}
                                className="help-item-2-desc none-mobile"
                                >
                                <div className="text-center help-image help-item-2">
                                    <Suspense fallback={<p> loading images from supsencd </p>} >
                                        <Img 
                                        src={comingsoon}
                                        key={comingsoon}
                                        loader={<p> loading images from supsencd </p>}
                                        unloader={<button  > failed </button>}
                                        className="w-auto h-auto"/>
                                    </Suspense>
                                </div>
                            </Col>
                            </Row>
                            <Container className="bg-help-item text-center help-2-3 pt-5">
                                <h2>
                                How Does it work ?
                                </h2>
                                <p>
                                How to order products at arch17.com?
                                </p>
                                <Row className="my-5">
                                <Col xs={6} sm={6} md={6} lg={3} xl={3} className="help-item-4-container">
                                    <div className="help-item-4 bg-white p-3">
                                        <h3>
                                        Find Products
                                        </h3>
                                        <p>
                                        Find the products you desire and request quote through the
                                        products page or communicate with our customer Service through
                                        the online chat / whatsApp or
                                        </p>
                                        <p className="mb-5">
                                        WeChat. Most of the products on 
                                        arch17 are made-to-order and available for customization
                                        </p>
                                        <AiOutlineSearch className="help-item-4-icon"/>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={3} xl={3} className="help-item-4-container">
                                    <div className="help-item-4 bg-white p-3">
                                        <h3>
                                        Receive the Quote
                                        </h3>
                                        <p className="mb-5">
                                        Receive instant Quote 
                                        _ based on your custom requirements _
                                        including the delivery cost and leading time.
                                        </p>
                                        <IoDocumentTextOutline className="help-item-4-icon"/>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={3} xl={3} className="help-item-4-container">
                                    <div className="help-item-4 bg-white p-3">
                                        <h3>
                                        Make the payment
                                        </h3>
                                        <p className="mb-5">
                                        Make the payment According to the payment terms.
                                        In case products are Customized (Made-to-order), 
                                        you will pay 50% before delivery and the balance after production and before delivery.
                                        </p>
                                        <FaHandHoldingUsd className="help-item-4-icon"/>
                                    </div>
                                </Col>
                                <Col xs={6} sm={6} md={6} lg={3} xl={3} className="help-item-4-container">
                                    <div className="help-item-4 bg-white p-3">
                                        <h3>
                                        Product Delivery
                                        </h3>
                                        <p>
                                        We Ship to every corner word wide. 
                                        Thanks to our logistics partners we are able to provide the best shipping
                                        solution ensuring the best prices and delivery time.
                                        </p>
                                        <p className="mb-5">
                                        For multiple suppliers orders to same place We’ll consolidate orders from and deliver when required.
                                        </p>
                                        <MdLocalShipping className="help-item-4-icon"/>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                           
                    </Container>
                </div>
            </React.Fragment>
                    
            )
        }

}
export default help2;