import React, { Component , Suspense } from 'react';
import { Container, Carousel, Row, Col } from 'react-bootstrap';
import { Img } from 'react-image';
import './HomePage.css';
import slide1 from '../../images/HomePage/HomePageSlides/slider-1.jpg';
import slide2 from '../../images/HomePage/HomePageSlides/slider-2.jpg';
import slide3 from '../../images/HomePage/HomePageSlides/slider-3.jpg';
import slide4 from '../../images/HomePage/HomePageSlides/slider-4.jpg';
import prev from '../../images/HomePage/HomePageSlides/previos.png'
import next from '../../images/HomePage/HomePageSlides/next.png'
import mediaSectionImg1 from '../../images/HomePage/MediaSection/main-01.jpg';
import mediaSectionImg2 from '../../images/HomePage/MediaSection/main-02.jpg';
import designClubLogo from '../../images/HomePage/MediaSection/designclub.svg';
import image_placeholder from '../../images/HomePage/media_2.jpg';
import media_3 from '../../images/HomePage/media_3.jpg';
import media_4 from '../../images/HomePage/media_4.png';
import main_3 from '../../images/HomePage/MediaSection/main-03.jpg';
import main_4 from '../../images/HomePage/MediaSection/main-04.jpg';
import ProjectBox from './../Project/ProjectsContainer/ProjectBox/ProjectBox';
import grado from '../../images/HomePage/storesSection/grado.jpg';
import storelogo from '../../images/HomePage/storesSection/storelogo.jpg';
import scene from '../../images/HomePage/storesSection/scene.jpg';
import viaform from '../../images/HomePage/storesSection/viaform.jpg';


import collection2 from "../../collection-2.jpg";

import collection5 from "../../h-2.png";

import pr2 from "../../pr2.jpg";
import pr3 from "../../pr3.jpg";
import pr4 from "../../pr4.jpg";
import pr5 from "../../pr5.png";

import { generateKey } from './../../static/utility';
import AddCompanyProject from './../Project/AddProject/AddProjectBtns/AddCompanyProject';
import AddBrandProject from './../Project/AddProject/AddProjectBtns/AddBrandProject';
import AddDesignerProject from './../Project/AddProject/AddProjectBtns/AddDesignerProject';


class HomePage extends Component{
    state={
        sliderData:[
            {image:slide1,heading:'The Mix Screen',description:'expressive feature whilst maintaining a simple and elegant look overall.',link:''},
            {image:slide2,heading:'The Mix Screen',description:'expressive feature whilst maintaining a simple and elegant look overall.',link:''},
            {image:slide3,heading:'The Mix Screen',description:'expressive feature whilst maintaining a simple and elegant look overall.',link:''},
            {image:slide4,heading:'The Mix Screen',description:'expressive feature whilst maintaining a simple and elegant look overall.',link:''},
            {image:slide1,heading:'The Mix Screen',description:'expressive feature whilst maintaining a simple and elegant look overall.',link:''},
        ]
        ,
        stores:[
        {id:generateKey('store'),logo:grado},
        {id:generateKey('store'),logo:storelogo},
        {id:generateKey('store'),logo:scene},
        {id:generateKey('store'),logo:viaform},
        {id:generateKey('store'),logo:grado},
        {id:generateKey('store'),logo:storelogo},
        {id:generateKey('store'),logo:scene},
        {id:generateKey('store'),logo:viaform},
        {id:generateKey('store'),logo:grado},
        {id:generateKey('store'),logo:storelogo},
        {id:generateKey('store'),logo:scene},
        {id:generateKey('store'),logo:viaform},
        {id:generateKey('store'),logo:grado},
        {id:generateKey('store'),logo:storelogo},
        {id:generateKey('store'),logo:scene},
        {id:generateKey('store'),logo:viaform},
    ]
    }
    render(){
        const Sildes = this.state.sliderData.map(
            (slide , index) => {
                return (
                    <Carousel.Item key={index} className="home-slide-item">
                        <div className="home-slide-image" style={{backgroundImage:'url('+slide.image+')'}}>
                        </div>
                        <Carousel.Caption>
                        <h3>{slide.heading}</h3>
                        <p>{slide.description}</p>
                        <button className="btn px-4 py-1 text-white"> Shop Now </button>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            }
        );
        const Stores = this.state.stores.map(
            (store , idnex) => {
                return (
                <div 
                className="store-logo border text-center" 
                style={
                    {
                        backgroundImage:'url('+store.logo+') ' 
                    }} 
                keys={idnex}>
                </div>
                )
        })
        return(
            <React.Fragment>
                <div className="text-center" key={generateKey('divs')}>
                    <h2 className="mt-3">
                        Add Projects Btns
                    </h2>
                    <AddCompanyProject id="11" />
                    <AddBrandProject id="2" />
                    <AddDesignerProject id="107" />
                </div>
                <div className="w-100 home-page m-auto "key={generateKey('divs')} >
                        <section className="mega-menu bg-white py-3 none-mobile ">
                            <Container className="position-relative px-0">
                                <div className="mega-menu-bar d-flex justify-content-between ">
                                    <div className="mega-item" key={generateKey('divs')}>
                                        Get Inspired
                                    </div>
                                    <div className="mega-item" key={generateKey('divs')}>
                                    Furniture
                                    </div>
                                    <div className="mega-item" key={generateKey('divs')}>
                                    Living room
                                    </div>
                                    <div className="mega-item" key={generateKey('divs')}>
                                    Bedroom
                                    </div>
                                    <div className="mega-item" key={generateKey('divs')}>
                                    Office
                                    </div>
                                    <div className="mega-item" key={generateKey('divs')}>
                                    Hotel
                                    </div>
                                    <div className="mega-item" key={generateKey('divs')}>
                                    Outdoor
                                    </div>
                                    |
                                    <div className="mega-item" key={generateKey('divs')}>
                                    Events
                                    </div>
                                    <div className="mega-item" key={generateKey('divs')}>
                                    Fair
                                    </div>
                                    <div className="mega-item" key={generateKey('divs')}>
                                    Brands
                                    </div>
                                    <div className="mega-item" key={generateKey('divs')}>
                                    Magazine
                                    </div>
                                </div>
                                <span className="mega-publish position-absolute" key={generateKey('span')}>
                                    Publish Your Products
                                </span>
                            </Container>
                        </section>
                        
                    <section className="slider-section" key={generateKey('section')}>
                        <Carousel className="home-page-slider" fade={true} slide={false} prevIcon={<img src={prev} alt={prev} width="26" height="26"/>} nextIcon={<img src={next} alt={next} width="26" height="26"/>} >
                            {Sildes}
                        </Carousel>
                    </section>
                    <Container className="mt-5 px-0" key={generateKey('Container')} >
                        <section className="w-100 home-heading-2 text-center" key={generateKey('section')}>
                            <h2>
                                Hot solutions by brands and designers inspires you to design and build
                            </h2>
                            <p>
                            Source Ideas for your projects, explore products catalogues,
                            get CAD / 3D files and shop design products
                            </p>
                            <button className="btn arch17-btn mt-3">
                            JOIN NOW
                            </button>
                        </section>
                        <section className="media-section mt-5" key={generateKey('section')}>
                            <div key={generateKey('section')}>
                                <div className="media-section-item" key={generateKey('media')}>
                                    <Suspense fallback={<p> loading images from supsencd </p>} >
                                        <Img 
                                        src={mediaSectionImg1}
                                        key={mediaSectionImg1}
                                        loader={<p> loading images from supsencd </p>}
                                        unloader={<button  > failed </button>}
                                        className="img-fluid media-section-item-img"
                                        />
                                    </Suspense>
                                    <div className="media-item-desc">
                                        <Suspense fallback={<p> loading images from supsencd </p>} >
                                            <Img 
                                            src={designClubLogo}
                                            key={designClubLogo}
                                            loader={<p> loading images from supsencd </p>}
                                            unloader={<button  > failed </button>}
                                            className="img-fluid"
                                            />
                                        </Suspense>
                                        <p className="text-white">
                                            For architect & designers join 17 designers club and get the best of arch17
                                        </p>
                                        <button className="btn px-4 py-1 border-white text-white rounded-lg my-2"> Join Now &gt; </button>
                                        <span> Why Join </span>
                                    </div>
                                </div>
                            </div>
                            <div key={generateKey('media')}>
                                <div className="media-section-item">
                                    <div>   
                                        <Suspense fallback={<p> loading images from supsencd </p>} >
                                            <Img 
                                            src={mediaSectionImg2}
                                            key={mediaSectionImg2}
                                            loader={<p> loading images from supsencd </p>}
                                            unloader={<button  > failed </button>}
                                            className="img-fluid media-section-item-img"
                                            />
                                        </Suspense>
                                    </div>
                                    <div className="media-item-desc text-left px-2">
                                        <h3 className="media-item-desc-heading">
                                        Upholstered Lounge Chair
                                        </h3>
                                        <p className="text-left w-50 m-0 d-block media-item-desc-desc ">
                                        With full foam and cinched to give a comfortable Cushion look and feel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div key={generateKey('media')}>
                                <div className="media-section-item">
                                    <div>   
                                        <Suspense fallback={<p> loading images from supsencd </p>} >
                                            <Img 
                                            src={image_placeholder}
                                            key={image_placeholder}
                                            loader={<p> loading images from supsencd </p>}
                                            unloader={<button  > failed </button>}
                                            className="img-fluid media-section-item-img"
                                            />
                                        </Suspense>
                                    </div>
                                    <div className="media-item-desc text-left px-2">
                                        <h3 className="media-item-desc-heading text-white">
                                        Create breakout area
                                        </h3>
                                        <p className="text-left w-100 m-0 d-block media-item-desc-desc text-white">
                                        For informal meeting, lounging, dining, a space to relax and take a break from the office
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div key={generateKey('media')}>
                                <div className="media-section-item">
                                    <div>   
                                        <Suspense fallback={<p> loading images from supsencd </p>} >
                                            <Img 
                                            src={media_4}
                                            key={media_4}
                                            loader={<p> loading images from supsencd </p>}
                                            unloader={<button  > failed </button>}
                                            className="img-fluid media-section-item-img"
                                            />
                                        </Suspense>
                                    </div>
                                    <div className="media-item-desc text-left  px-2 " >
                                        <h3 className="media-item-desc-heading text-white" style={{fontSize:'28px'}}>
                                        Create breakout area
                                        </h3>
                                        <p className="text-left w-100 text-white m-0 d-block media-item-desc-desc">
                                        For informal meeting, lounging, dining, a space to relax and take a break from the office
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div key={generateKey('media')}>
                                <div className="media-section-item">
                                    <div>   
                                        <Suspense fallback={<p> loading images from supsencd </p>} >
                                            <Img 
                                            src={media_3}
                                            key={media_3}
                                            loader={<p> loading images from supsencd </p>}
                                            unloader={<button  > failed </button>}
                                            className="img-fluid media-section-item-img"
                                            />
                                        </Suspense>
                                    </div>
                                    <div className="media-item-desc text-left px-2 " >
                                        <h3 className="media-item-desc-heading text-white" style={{fontSize:'28px'}}>
                                        Create breakout area
                                        </h3>
                                        <p className="text-left w-100 text-white m-0 d-block media-item-desc-desc">
                                        For informal meeting, lounging, dining, a space to relax and take a break from the office
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div key={generateKey('media')}>
                                <div className="media-section-item">
                                    <div>   
                                        <Suspense fallback={<p> loading images from supsencd </p>} >
                                            <Img 
                                            src={main_3}
                                            key={main_3}
                                            loader={<p> loading images from supsencd </p>}
                                            unloader={<button  > failed </button>}
                                            className="img-fluid media-section-item-img"
                                            />
                                        </Suspense>
                                    </div>
                                    <div className="media-item-desc text-left px-2 ">
                                        <h3 className="media-item-desc-heading text-white">
                                        Create breakout area
                                        </h3>
                                        <p className="text-left w-100 m-0 d-block media-item-desc-desc text-white">
                                        With full foam and cinched to give a comfortable Cushion look and feel.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div key={generateKey('media')}>
                                <div className="media-section-item">
                                    <div>   
                                        <Suspense fallback={<p> loading images from supsencd </p>} >
                                            <Img 
                                            src={main_4}
                                            key={main_4}
                                            loader={<p> loading images from supsencd </p>}
                                            unloader={<button  > failed </button>}
                                            className="img-fluid media-section-item-img"
                                            />
                                        </Suspense>
                                    </div>
                                    <div className="media-item-desc text-left px-2">
                                        <h3 className="media-item-desc-heading">
                                        Coffee & Side table
                                        </h3>
                                        <p className="text-left w-75 m-0 d-block media-item-desc-desc">
                                        You can go for a simple table with space for remote controls and cups of coffee.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </Container>
                    <Container className="bg-white">
                        <section className="project-contaienr text-center bg-white mt-5 pt-4" key={generateKey('section')}>
                            <h2>
                                Magazine
                            </h2>
                            <h3>
                            Explore Design Projects, News & trends
                            </h3>
                            <div className="project-filters-tab justify-content-center mt-5 none-mobile">
                                <p className="mx-2 px-2">Recent</p>
                                <p className="mx-2 px-2">Architecture</p>
                                <p className="mx-2 px-2">Interior Design</p>
                                <p className="mx-2 px-2">Product Design</p>
                                <p className="mx-2 px-2">Design blogs</p>
                            </div>
                            <Row>
                                <Col xs={12} sm={12} md={6} lg={4} xl={4} className="h-100 px-2 my-3 " key={generateKey('project')}>
                                    <ProjectBox />
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={4} xl={4} className="h-100 px-2 my-3 " key={generateKey('project')}>
                                    <ProjectBox />
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={4} xl={4} className="h-100 px-2 my-3 " key={generateKey('project')}>
                                    <ProjectBox />
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={4} xl={4} className="h-100 px-2 my-3 " key={generateKey('project')}>
                                    <ProjectBox />
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={4} xl={4} className="h-100 px-2 my-3 " key={generateKey('project')}>
                                    <ProjectBox />
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={4} xl={4} className="h-100 px-2 my-3 " key={generateKey('project')}>
                                    <ProjectBox />
                                </Col>
                            </Row>
                            <button className="btn mt-4">
                                Go to Magazine
                            </button>
                        </section>
                        <section className="stores-container bg-white text-left" key={generateKey('section')}>
                            <h2>
                                Brands & Stores
                            </h2>
                            <h3>
                                Explore catalogues by brands
                            </h3>
                            <div className="stores-items">
                                {Stores}
                            </div>
                            <button className="btn d-block mx-auto mt-4">
                                see all
                            </button>
                        </section>
                        <section className="products-container" key={generateKey('section')}>
                            <h2>
                            Products
                            </h2>
                            <h3>
                            Explore products, get CAD / 3D files
                            </h3>
                            <Row md={{ span: 12 }} className="mg-page">
                                <Col lg={3} sm={4} xs={6} key={generateKey('product')}>
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
                                <Col lg={3} sm={4} xs={6} key={generateKey('product')}>
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
                                <Col lg={3} sm={4} xs={6} key={generateKey('product')}>
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
                                <Col lg={3} sm={4} xs={6} key={generateKey('product')}>
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
                                <Col lg={3} sm={4} xs={6} key={generateKey('product')}>
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
                                <Col lg={3} sm={4} xs={6} key={generateKey('product')}>
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
                                <Col lg={3} sm={4} xs={6} key={generateKey('product')}>
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
                            <button className="btn d-block mx-auto mt-4 see-more">
                            See More Products
                            </button>
                        </section>
                    </Container>
                </div>
            </React.Fragment>
        );
    }
}
export default HomePage;