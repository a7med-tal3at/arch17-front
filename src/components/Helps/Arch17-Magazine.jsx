import React , {Component, Suspense} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Img } from 'react-image';
import  comingsoon2s  from "../../images/comingsoon2.png";
import  comingsoon  from "../../images/comingsoon.png";
import './Help.css';


class Arch17Magazine extends Component{
render(){
    return(
        <React.Fragment>
            <div className="w-100 bg-white">
                <Container>
                    <div className="help-2-header py-5 mx-auto text-center " style={{backgroundImage:'url('+comingsoon2s+')'}}>
                        <div className="text-center help-image help-2-item ">
                            <h1 className="header-font f-w-500">
                                Arch17  <span className="f-w-300">Magazine</span>
                            </h1>
                            <h2 className="header-desc-font">
                            A new guid to great architecture and interior style
                            </h2>
                            <p className="text-decoration-underline">
                            Get your free digital copy
                            </p>
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
                                    your guide to the very best in architecture, interior, products
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
                                    The magazine offers readers a privileged insight into celebrities,
                                    designers, and socialites’ regional and global Designs.
                                    From extravagant mansions to the ultimate, must-have designer pieces, 
                                    the magazine opens the door into a world of unparalleled elegance 
                                    and luxury in local and international Design.
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
                                    high-end & valuable design information source
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
                                    From Awarded products and projects to design trends and news, 
                                    Arch17 magazine offers insight into projects, products, 
                                    and brands that make up the high-end and valuable design information source.
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
                                    Design Trends & News
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
                                    A peek into the new trends and fashion in the Design items and colors,
                                    With special in-depth features in each issue.
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
                                    Designer Interviews
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
                                    We Introduce the designers’ stories from the interior, 
                                    architecture, and landscape to product designers.
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
                                    Design Projects
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
                                    Discover the awarded products and projects from fashionable 
                                    homes to the office and commercial Design.
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
                                    Design Selections
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
                                    From color moods to product shortlist and lifestyle 
                                    selected design insights by design experts from all over the world.
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
                    <div className="w-100 pb-5">
                        <div className="subscribe-container mx-auto text-center">
                            <h2 >Subscribe Now</h2>
                            <p>Get your free digital copy</p>
                            <div className="subscribe-input d-flex justify-content-center">
                                <input type="email" name="email" className="form-control " placeholder="Email *"/>
                                <button className="btn btn-dark px-5"> Subscribe </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-100 text-center bg-light pt-5">
                        <h1> Get Featured On Arch17 <span className="f-w-300">Magazine</span> </h1>
                        <div className="w-75 d-flex justify-content-center mx-auto">
                            <div className="arch17-magazine-help-item rounded bg-white m-3 text-left p-5">
                                <h4>
                                Architect & designers
                                </h4>
                                <p>
                                Send us your story or project to<br/>  <span> press@arch17.com</span> .
                                </p>
                            </div>
                            <div className="arch17-magazine-help-item rounded bg-white m-3 text-left p-5">
                                <h4>
                                Brands
                                </h4>
                                <p>
                                Advertise your products & service to reach qualified readers please visit: Arch17 <br/> <span className="text-decoration-underline"> Magazine Kit </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </React.Fragment>
    );
}
}
export default Arch17Magazine;