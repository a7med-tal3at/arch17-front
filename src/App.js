import React, { Component , Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

const SignUp = React.lazy(()=>import('./components/User/Signup'));
const SignIn = React.lazy(()=>import('./components/User/Signin'));
const Product = React.lazy(()=>import('./components/Product/Product'));
const CreateCompany = React.lazy(()=>import('./components/Compnay/CreateCompany'));
const CreateStore = React.lazy(()=>import('./components/Store/CreateStore'));
const CreateBusinessAccount = React.lazy(()=>import('./components/BusinesCenter/CreateBusinessAccount'));
const BusinessCenterLogin = React.lazy(()=>import('./components/BusinesCenter/BusinessCenterLogin'));
const ResetPasscode = React.lazy(()=>import('./components/BusinesCenter/ResetPasscode'));
const EnterNewPasscode = React.lazy(()=>import('./components/BusinesCenter/EnterNewPasscode'));
const ResetPassword = React.lazy(()=>import('./components/User/ResetPaswordForm'));
const ResetPasswordMessage = React.lazy(()=>import('./components/User/ResetPasswordMessage'));
const EnterNewPassword = React.lazy(()=>import('./components/User/EnterNewPassword'));
const StepOne = React.lazy(() => import('./components/addProduct/StepOne'));
const AddProductWrapper = React.lazy(() => import('./components/addProduct/AddProductWrapper'));
const UserProfile = React.lazy(() => import('./components/UserProfile'));
const DesignerProfile = React.lazy(() => import('./components/DesignerProfile'));
const BrandPage = React.lazy(() => import('./components/BrandPage'));
const SearchPage = React.lazy(() => import('./components/SearchPage'));
class App extends Component {
  // import Product from './components/Product/Product';
// import UserProfile from './components/UserProfile';

  state = {  }

  logOut= ()=>{
    localStorage.removeItem('token');
  }
  render() { 
    return (  
      <React.StrictMode>
            {/* <Product/> */} 
            <div className="" style={{'minHeight':'1000px'}}>
            <Switch>
            <Route exact path="/">
              <div className="text-center d-flex align-items-center " style={{'minHeight':'1000px','justifyContent':'space-around'}}>
                <h1 > Welcome To Arch17</h1>
                <h1 >Home Page</h1>
              </div>
              </Route>
              <Route path="/signup" render={()=>(<Suspense fallback={<div>loading ....</div>} ><SignUp/></Suspense>)}/>
              <Route path="/signin" render={()=>(<Suspense fallback={<div>loading ....</div>} ><SignIn/></Suspense>)}/>
            <Route path="/product" render={() => (<Suspense fallback={<div>loading ....</div>} ><Product /></Suspense>)} />

              <Route path="/CreateCompany" render={()=>(<Suspense fallback={<div>loading ....</div>} ><CreateCompany/></Suspense>)}/>
              <Route path="/CreateStore" render={()=>(<Suspense fallback={<div>loading ....</div>} ><CreateStore/></Suspense>)}/>
              <Route path="/createbusinessaccount" render={()=>(<Suspense fallback={<div>loading ....</div>} ><CreateBusinessAccount/></Suspense>)}/>
              <Route path="/businesscenterlogin" render={()=>(<Suspense fallback={<div>loading ....</div>} ><BusinessCenterLogin/></Suspense>)}/>
              <Route path="/ResetPasscode" render={()=>(<Suspense fallback={<div>loading ....</div>} ><ResetPasscode/></Suspense>)}/>
              <Route path="/EnterNewPasscode" render={()=>(<Suspense fallback={<div>loading ....</div>} ><EnterNewPasscode/></Suspense>)}/>
              <Route path="/ResetPassword" render={()=>(<Suspense fallback={<div>loading ....</div>} ><ResetPassword/></Suspense>)}/>
              <Route path="/ResetPasswordMessage" render={()=>(<Suspense fallback={<div>loading ....</div>} ><ResetPasswordMessage/></Suspense>)}/>
            <Route path="/EnterNewPassword" render={() => (<Suspense fallback={<div>loading ....</div>} ><EnterNewPassword /></Suspense>)} />
            <Route path="/addproduct-1" render={() => (<Suspense fallback={<div>loading ....</div>} ><StepOne /></Suspense>)} />
            <Route path="/identity" render={() => (<Suspense fallback={<div>loading ....</div>} ><AddProductWrapper /></Suspense>)} />
            <Route path="/user-profile" render={() => (<Suspense fallback={<div>loading ....</div>} ><UserProfile /></Suspense>)} />
            <Route path="/designer-profile" render={() => (<Suspense fallback={<div>loading ....</div>} ><DesignerProfile /></Suspense>)} />
            <Route path="/store-page" render={() => (<Suspense fallback={<div>loading ....</div>} ><BrandPage /></Suspense>)} />
            <Route path="/search-page" render={() => (<Suspense fallback={<div>loading ....</div>} ><SearchPage /></Suspense>)} />

          </Switch>
            </div>
      </React.StrictMode>
    );
  }
} 

export default App;

