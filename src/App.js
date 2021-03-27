import React, { Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route, Redirect} from "react-router-dom";
import { connect } from 'react-redux';
import Spinner from './components/UI/Spinner/Spinner';
const SignUp = React.lazy(()=>import('./components/User/Signup'));
const SignIn = React.lazy(()=>import('./components/User/Signin'));
const CreateCompany = React.lazy(()=>import('./components/Compnay/CreateCompany'));
const CreateStore = React.lazy(()=>import('./components/Store/CreateStore'));
const CreateBusinessAccount = React.lazy(()=>import('./components/BusinesCenter/CreateBusinessAccount'));
const BusinessCenterLogin = React.lazy(()=>import('./components/BusinesCenter/BusinessCenterLogin'));
const ResetPasscode = React.lazy(()=>import('./components/BusinesCenter/ResetPasscode'));
const EnterNewPasscode = React.lazy(()=>import('./components/BusinesCenter/EnterNewPasscode'));
const ResetPassword = React.lazy(()=>import('./components/User/ResetPaswordForm'));
const ResetPasswordMessage = React.lazy(()=>import('./components/User/ResetPasswordMessage'));
const EnterNewPassword = React.lazy(()=>import('./components/User/EnterNewPassword'));
const AddProductOptionAndPrice = React.lazy(()=>import('./components/Product/AddProduct/AddProductOptionAndPrice'));
const AddProjectNavigation = React.lazy(()=>import('./components/Project/AddProject/AddProjectNavigation'));
const Projects = React.lazy(()=>import('./components/Project/ProjectsContainer/ProjectsContainer'));
const StepOne = React.lazy(() => import('./components/addProduct/StepOne'));
const AddProductWrapper = React.lazy(() => import('./components/addProduct/AddProductWrapper'));
const Product = React.lazy(()=>import('./components/Product/Product'));
const ProjectPage = React.lazy(()=>import('./components/Project/ProjectPage/ProjectPage'));
const HEPL1 = React.lazy(()=>import('./components/Helps/help-1'))
const HEPL2 = React.lazy(()=>import('./components/Helps/help-2'))
const Arch17Magazine = React.lazy(()=>import('./components/Helps/Arch17-Magazine'))
const HomePage = React.lazy(()=>import('./components/HomePage/HomePage'))
const UserProfile = React.lazy(() => import('./components/UserProfile'));
const DesignerProfile = React.lazy(() => import('./components/DesignerProfile'));
const BrandPage = React.lazy(() => import('./components/BrandPage'));
const SearchPage = React.lazy(() => import('./components/SearchPage'));
const Categories = React.lazy(() => import('./components/AllCategories'));

const App = ({user})=> {
    return (  
      <React.Fragment>
        <div className="" style={{'minHeight':'auto'}}>
        
          <Switch>
            <Route path="/" exact render={()=>(<Suspense fallback={<Spinner />} ><HomePage/></Suspense>)}/>
              <Route exact path="/CreateCompany" render={()=>(<Suspense fallback={<Spinner />} ><CreateCompany/></Suspense>)}/>
              <Route exact path="/CreateStore" render={()=>(<Suspense fallback={<Spinner />} ><CreateStore/></Suspense>)}/>
              <Route exact path="/createbusinessaccount" render={()=>(<Suspense fallback={<Spinner />} ><CreateBusinessAccount/></Suspense>)}/>
              <Route exact path="/businesscenterlogin" render={()=>(<Suspense fallback={<Spinner />} ><BusinessCenterLogin/></Suspense>)}/>
              <Route exact path="/ResetPasscode" render={()=>(<Suspense fallback={<Spinner />} ><ResetPasscode/></Suspense>)}/>
              <Route exact path="/EnterNewPasscode" render={()=>(<Suspense fallback={<Spinner />} ><EnterNewPasscode/></Suspense>)}/>
              <Route exact path="/ResetPassword" render={()=>(<Suspense fallback={<Spinner />} ><ResetPassword/></Suspense>)}/>
              <Route exact path="/ResetPasswordMessage" render={()=>(<Suspense fallback={<Spinner />} ><ResetPasswordMessage/></Suspense>)}/>
              <Route exact path="/EnterNewPassword" render={()=>(<Suspense fallback={<Spinner />} ><EnterNewPassword/></Suspense>)}/>
              <Route exact path="/addproject" render={()=>(<Suspense fallback={<Spinner />} ><AddProjectNavigation/></Suspense>)}/>
              <Route exact path="/AddProductOptionAndPrice" render={()=>(<Suspense fallback={<Spinner />}> <AddProductOptionAndPrice /> </Suspense>)} />
              <Route exact path="/projects" render={()=>(<Suspense fallback={<Spinner />}> <Projects /> </Suspense>)} />
              <Route exact path="/addproduct-1" render={() => (<Suspense fallback={<div>loading ....</div>} ><StepOne /></Suspense>)} />
              <Route exact path="/product" render={() => (<Suspense fallback={<div>loading ....</div>} ><Product /></Suspense>)} />
              <Route exact path="/identity" render={() => (<Suspense fallback={<div>loading ....</div>} ><AddProductWrapper/></Suspense>)}/>
              <Route exact path="/project/:id" render={() => (<Suspense fallback={<Spinner />} ><ProjectPage/></Suspense>)}/>
              <Route exact path="/projects" render={() => (<Suspense fallback={<Spinner />} ><Projects/></Suspense>)}/>
              <Route exact path="/help-1" render={() => (<Suspense fallback={<Spinner />} ><HEPL1/></Suspense>)}/>
            <Route exact path="/help-2" render={() => (<Suspense fallback={<Spinner />} ><HEPL2/></Suspense>)}/>
              <Route exact path="/Arch17-Magazine" render={() => (<Suspense fallback={<Spinner />} ><Arch17Magazine/></Suspense>)}/>
              <Route exact path="/user-profile" render={() => (<Suspense fallback={<div>loading ....</div>} ><UserProfile /></Suspense>)} />
              <Route exact path="/designer-profile" render={() => (<Suspense fallback={<div>loading ....</div>} ><DesignerProfile /></Suspense>)} />
              <Route exact path="/store-page" render={() => (<Suspense fallback={<div>loading ....</div>} ><BrandPage /></Suspense>)} />
            <Route exact path="/search-page" render={() => (<Suspense fallback={<div>loading ....</div>} ><SearchPage /></Suspense>)} />
            <Route exact path="/categories" render={() => (<Suspense fallback={<div>loading ....</div>} ><Categories /></Suspense>)} />
              {/* <Route path="/CreateCompany" render={()=>(<Suspense fallback={<div>loading ....</div>} ><CreateCompany/></Suspense>)}/> */}
              {/* <Route path="/CreateStore" render={()=>(<Suspense fallback={<div>loading ....</div>} ><CreateStore/></Suspense>)}/> */}
              {/* <Route path="/createbusinessaccount" render={()=>(<Suspense fallback={<div>loading ....</div>} ><CreateBusinessAccount/></Suspense>)}/> */}
              {/* <Route path="/businesscenterlogin" render={()=>(<Suspense fallback={<div>loading ....</div>} ><BusinessCenterLogin/></Suspense>)}/> */}
              {/* <Route path="/ResetPasscode" render={()=>(<Suspense fallback={<div>loading ....</div>} ><ResetPasscode/></Suspense>)}/> */}
              {/* <Route path="/EnterNewPasscode" render={()=>(<Suspense fallback={<div>loading ....</div>} ><EnterNewPasscode/></Suspense>)}/> */}
              {/* <Route path="/ResetPassword" render={()=>(<Suspense fallback={<div>loading ....</div>} ><ResetPassword/></Suspense>)}/> */}
              {/* <Route path="/ResetPasswordMessage" render={()=>(<Suspense fallback={<div>loading ....</div>} ><ResetPasswordMessage/></Suspense>)}/> */}
              {/* <Route path="/EnterNewPassword" render={() => (<Suspense fallback={<div>loading ....</div>} ><EnterNewPassword /></Suspense>)} /> */}
              {/* <Route path="/addproduct-1" render={() => (<Suspense fallback={<div>loading ....</div>} ><StepOne /></Suspense>)} /> */}
              {/* <Route path="/identity" render={() => (<Suspense fallback={<div>loading ....</div>} ><AddProductWrapper /></Suspense>)} /> */}            
            {!user.isLoggedin ? 
            (
              <React.Fragment>
             <Route exact path="/signup" render={() => (<Suspense fallback={<Spinner />} ><SignUp /></Suspense>)} />
             <Route exact path="/signin" render={() => (<Suspense fallback={<Spinner />} ><SignIn /></Suspense>)} />
                </React.Fragment>
    ):('')}
              <Redirect to="/" />


          </Switch>
        </div>
      </React.Fragment>
    );
  }

const mapStateToProps = (state) => ({ user: state.user });
export default connect(mapStateToProps)(App);
