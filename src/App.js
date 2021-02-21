import React, { Component , Suspense} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from "react-router-dom";
import Spinner from './components/UI/Spinner/Spinner';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CreatableSelect from 'react-select/creatable';
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

class App extends Component {
  state = {  
    show:false
  }

  logOut= ()=>{
    localStorage.removeItem('token');
  }
  handleClose = () => this.setState({show:false});
  handleShow = () => this.setState({show:true})
  handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  handleInputChange = (inputValue, actionMeta) => {
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
  };
  render() {
  const  custome_styles = {
      control: (base,{ isFocused , isSelected }) => ({
          ...base,
          color: "#000",
          boxShadow: 'none',
          borderColor:isFocused?'#c8c8c8':'#c8c8c8',
          cursor:'pointer',
          "&:hover": {
              color: "#000",
              boxShadow: 'none',
              borderColor:isFocused?'#c8c8c8':'#c8c8c8',
          }
      }),
      indicatorsContainer: (base) => ({
          ...base,
          display: "none",
      }),
      option: (base,{ isFocused , isSelected })=>({
          ...base,
          padding:'10px',
          color:'#000',
          fontWeight:isSelected?'bold':'normal',
          fontSize:'16px',
          cursor:'pointer',
          borderBottom:'1px solid #c8c8c8',
          "&:hover": {
              color: "#000",
              boxShadow: 'none',
              background:'#fff6f6',
              fontWeight:'bold',
          }
      }),
      menu: (base) => ({
        ...base,
        position:'relative',
        border: '1px solid #c8c8c8',
        boxShadow:'none'
      }),
      menuList: (base) => ({
        ...base,
        padding:'0',
      })
      };
      const collections = [
        { value: 'collection 1', label:'collection 1' },
        { value: 'collection 2', label:'collection 2' },
        { value: 'collection 3', label:'collection 3' },
        { value: 'collection 4', label:'collection 4' },
        { value: 'collection 5', label:'collection 5' },
      ];
    return (  
      <React.Fragment>
            {/* <Product/> */} 
        <div className="" style={{'minHeight':'1500px'}}>
          <Switch>
            <Route exact path="/">
              <div className="text-center d-flex align-items-center " style={{'minHeight':'1500px','justifyContent':'space-around'}}>
                <h1 > Welcome To Arch17</h1>
                <h1 >Home Page </h1>
                <Button variant="primary" onClick={this.handleShow}>
                  Launch demo modal
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title style={{'fontSize': '20px','fontWeight': 'bold','textTransform': 'uppercase','color': '#000000'}}>ADD TO FAVOURITE</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <button type="submit" style={{backgroundColor:'#e41e15' , outline:'none' , border:'none'}} className="w-100 btn btn-primary text-left mb-3">Add To General Collection</button>
                    <CreatableSelect
                      isClearable
                      onChange={this.handleChange}
                      onInputChange={this.handleInputChange}
                      options={collections}
                      menuIsOpen={true}
                      placeholder={'Search or Create a New Collection '}
                      styles={custome_styles}
                    />
                  </Modal.Body>
                </Modal>
                <Button className="btn btn-dark btn-block w-100 m-auto"> add project </Button>
              </div>
              </Route>
              <Route path="/signup" render={()=>(<Suspense fallback={<Spinner />} ><SignUp/></Suspense>)}/>
              <Route path="/signin" render={()=>(<Suspense fallback={<Spinner />} ><SignIn/></Suspense>)}/>
              <Route path="/CreateCompany" render={()=>(<Suspense fallback={<Spinner />} ><CreateCompany/></Suspense>)}/>
              <Route path="/CreateStore" render={()=>(<Suspense fallback={<Spinner />} ><CreateStore/></Suspense>)}/>
              <Route path="/createbusinessaccount" render={()=>(<Suspense fallback={<Spinner />} ><CreateBusinessAccount/></Suspense>)}/>
              <Route path="/businesscenterlogin" render={()=>(<Suspense fallback={<Spinner />} ><BusinessCenterLogin/></Suspense>)}/>
              <Route path="/ResetPasscode" render={()=>(<Suspense fallback={<Spinner />} ><ResetPasscode/></Suspense>)}/>
              <Route path="/EnterNewPasscode" render={()=>(<Suspense fallback={<Spinner />} ><EnterNewPasscode/></Suspense>)}/>
              <Route path="/ResetPassword" render={()=>(<Suspense fallback={<Spinner />} ><ResetPassword/></Suspense>)}/>
              <Route path="/ResetPasswordMessage" render={()=>(<Suspense fallback={<Spinner />} ><ResetPasswordMessage/></Suspense>)}/>
              <Route path="/EnterNewPassword" render={()=>(<Suspense fallback={<Spinner />} ><EnterNewPassword/></Suspense>)}/>
              <Route path="/addproject" render={()=>(<Suspense fallback={<Spinner />} ><AddProjectNavigation/></Suspense>)}/>
              <Route path="/AddProductOptionAndPrice" render={()=>(<Suspense fallback={<Spinner />}> <AddProductOptionAndPrice /> </Suspense>)} />
              <Route path="/projects" render={()=>(<Suspense fallback={<Spinner />}> <Projects /> </Suspense>)} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
} 

export default App;

