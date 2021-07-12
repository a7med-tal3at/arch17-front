import React , {Component} from 'react';
import {Container, Row, Col,  Form}  from 'react-bootstrap';
import { connect } from "react-redux";
import {categories , years , types , Countries} from '../../../static/constant';
import {checkValidity,updateObject} from '../../../static/utility';
import CustomSelect from './CustomSelect';
import '../../../css/forms.css';
import './AddProject.css';
import { addProjectInfo, updateSteps } from './../../../redux/actions/projectActions';
import AddProjectTabs from './AddProjectTaps';
import {withRouter} from 'react-router-dom';
import Sppiner from '../../UI/Spinner/Spinner'
import axios from 'axios';
import { toast, Slide } from 'react-toastify'
import { Fragment } from 'react';
class AddProjectInfo extends Component{
    state = {
        infoForm:{
            projectName:{
                title:'Project Name',
                value:'',
                validation:{
                    required:true,
                    minLength:5,
                },
                valid:false,
                touched:false,
                err:null
            },
            projectType:{
                title:'Project Types',
                value:[],
                validation:{
                    isArray:true
                },
                valid:false,
                touched:false,
                err:null
            },
            projectCategory:{
                title:'Project Cateogry',
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                err:null
            },
            projectCountry:{
                title:'Project Country',
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                err:null
            },
            projectCity:{
                title:'Project City',
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                err:null
            },
            projectYear:{
                title:'Project Year',
                value:'',
                validation:{
                    required:true
                },
                valid:false,
                touched:false,
                err:null
            }
        },
        formIsValid: false,
        selectedOption: null,
        loading:false
    };
    componentDidMount(){
        this.props.updateSteps('info','content')
    }
    sunmiteandredirect = () =>{
        console.log(this.state.infoForm)
        let isValid = true
        for (const key in this.state.infoForm) {
            isValid = this.state.infoForm[key].valid && isValid
        }
        console.log(isValid)
        if (!isValid) {
            toast.error(
                <Fragment>
                    <div className='toastify-header'>
                    <div className='title-wrapper'>
                        <h6 className='toast-title font-weight-bold'>{'Opps'}</h6>
                    </div>
                    </div>
                    <div className='toastify-body'>
                    <span>{'Please Fill all the inputs'}</span>
                    </div>
                </Fragment>,
                { transition: Slide, hideProgressBar: true, autoClose: 2000 }
                )
        } else {
            let infoObject = {}
            for (const key in this.state.infoForm) {
                infoObject[key] = this.state.infoForm[key].value
            }
            infoObject['authorable_id'] = this.props.project.proejctCreator.id
            infoObject['authorable_type'] = this.props.project.proejctCreator.creator
            console.log(infoObject)
            toast.success(
                <Fragment>
                    <div className='toastify-header'>
                    <div className='title-wrapper'>
                        <h6 className='toast-title font-weight-bold'>{'su'}</h6>
                    </div>
                    </div>
                    <div className='toastify-body'>
                    <span>{'Project indfo will be added'}</span>
                    </div>
                </Fragment>,
                { transition: Slide, hideProgressBar: true, autoClose: 2000 }
                )
        }
        console.log(this.state.formIsValid);

        if(this.state.formIsValid){
            let infoObject = {
                "name":this.state.infoForm.projectName.value,
                "types":this.state.infoForm.projectType.value,
                "category":this.state.infoForm.projectCategory.value,
                "country":this.state.infoForm.projectCountry.value,
                "city":this.state.infoForm.projectCity.value,
                "year":this.state.infoForm.projectYear.value.toString(),
                "state":"info",
                "token":this.props.user.token
            };
        this.setState({loading:true})
            axios({
                method:'POST',
                url: 'http://127.0.0.1:8000/api/account/addproject/info',
                data: infoObject,
                headers: {
                    'Authorization': `Bearer ${infoObject.token}`
                }
                }).then((response) => {
                    this.setState({loading:false})
                    this.props.addProjectInfo(infoObject);
                    this.props.history.push('content')
                    console.log(response);
                }).catch(err => {
                    // dispatch(addProjectInfoFails(err))
                    this.setState({loading:false})
                    console.log(err);
                })
            this.props.addProjectInfo(infoObject);
        }
    }

    inputCangedHandeler = (value,inputIdentifier) =>{
    const rulesValidity = checkValidity(value, this.state.infoForm[inputIdentifier].validation, inputIdentifier)
    const updatedFormElement = updateObject(this.state.infoForm[inputIdentifier],
        {
            value: value,
            valid: !Array.isArray(rulesValidity) ? true : false,
            touched: true,
            err: Array.isArray(rulesValidity) ? rulesValidity : null 
        });
        const updatedInfoForm = updateObject(this.state.infoForm , {
            [inputIdentifier]:updatedFormElement
        });
        let formIsValid = true;
        for(let inputIdentifier in updatedInfoForm){
            formIsValid = updatedInfoForm[inputIdentifier].valid && formIsValid ;
            console.log(formIsValid, updatedInfoForm[inputIdentifier].valid)
        }
        this.setState({infoForm:updatedInfoForm,formIsValid:formIsValid}, () => {
            console.log('State Updated',formIsValid,this.state);
        });
    console.log(value, inputIdentifier, rulesValidity);
    }
    render(){
        // if(this.props.project.info !== null && this.props.project.mode === 'Add'){
        //     console.log(this.props.project.info);
        //     this.props.history.push(this.props.project.currentStep);
        // }
        const categoriesOptions = categories.map(cat => {
            return { value: cat, label: cat }
        });
        const yearsList = years.map(y => {
            return { value: y, label: y }
        });
        const typesOptions = types.map(type => {
            return { value: type, label: type }
        });
        const CountriesList = Countries.all.map(c=>{
            return { value: c.name, label: c.name  }
        });

        return (
            <React.Fragment>
                {this.state.loading?
                <Sppiner />
                :
                null
                }
                <AddProjectTabs saveBtn={this.sunmiteandredirect} />
                <Container className="add-project-box">
                    <Row className="justify-content-center">
                        <Col xs={12} sm={12} md={12} lg={12} xl={12} >
                            <Form.Row>
                            <Col  xs={12} sm={12} md={9} lg={9} xl={9}>
                                    <Form.Group >
                                        <Form.Label>Project Name</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col  xs={12} sm={12} md={9} lg={9} xl={9} className="mb-5">
                                    <Form.Group >
                                        <Form.Control 
                                            key="projectName" 
                                            className="add-project-name" 
                                            type="text" 
                                            placeholder="Add the project name"
                                            defaultValue={this.props.project.info ? this.props.project.info.name : ''}
                                            onChange={(event)=>this.inputCangedHandeler(event.target.value,'projectName')} />
                                            {this.state.infoForm.projectName.touched && this.state.infoForm.projectName.err ? this.state.infoForm.projectName.err.map(message => (<p className="text-danger">{message}</p>)) : null}
                                    </Form.Group>
                                </Col>
                                <Col  xs={12} sm={12} md={9} lg={9} xl={9}>
                                    <Form.Group >
                                        <Form.Label>Project Category</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col  xs={12} sm={12} md={12} lg={12} xl={12} className="pl-0">
                                    <Form.Group as={Row}>
                                        <Form.Label column xs={2} sm={2} md={2} lg={1} xl={1} className="p-c-margin">
                                        Type
                                        </Form.Label>
                                        <Col xs={8} sm={8} md={6} lg={4} xl={4} className="pl-0">
                                        <CustomSelect 
                                            name="project-type"
                                            options={typesOptions}
                                            onChange={(event)=>this.inputCangedHandeler(event.map(el=>el.value),'projectType')}
                                            placeholder="Project Type"
                                            isMulti={true}
                                            hideSelectedOptions={false}
                                            // defaultValueW={this.props.project.info ? this.props.project.info.types:''}
                                        />
                                        </Col>
                                        {this.state.infoForm.projectType.touched && this.state.infoForm.projectType.err ? this.state.infoForm.projectType.err.map(message => (<p className="text-danger">{message}</p>)) : null}
                                    </Form.Group>
                                </Col>
                                <Col  xs={12} sm={12} md={12} lg={12} xl={12} className="pl-0 mb-5" >
                                    <Form.Group as={Row} >
                                        <Form.Label column xs={2} sm={2} md={2} lg={1} xl={1} className="p-c-margin">
                                        Categoty
                                        </Form.Label>
                                        <Col xs={8} sm={8} md={6} lg={4} xl={4} className="pl-0">
                                        <CustomSelect 
                                            name="project-categor"
                                            options={categoriesOptions}
                                            onChange={(event)=>this.inputCangedHandeler(event.value,'projectCategory')}
                                            placeholder="Project Category"
                                            isMulti={false}
                                            defaultValueW={this.props.project.info ? this.props.project.info.category:''}
                                        />
                                    {this.state.infoForm.projectCategory.touched && this.state.infoForm.projectCategory.err ? this.state.infoForm.projectCategory.err.map(message => (<p className="text-danger">{message}</p>)) : null}
                                        </Col>
                                    </Form.Group>
                                </Col>
                                <Col  xs={12} sm={12} md={12} lg={12} xl={12} >
                                    <Form.Group >
                                        <Form.Label>Project Country & City</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col  xs={12} sm={12} md={12} lg={12} xl={12}  className="mb-5">
                                    <Form.Group as={Row}>
                                        <Col xs={12} sm={12} md={6} lg={4} xl={4} className="mb-3">
                                        <CustomSelect 
                                            name="project-categor"
                                            options={CountriesList}
                                            onChange={(event)=>this.inputCangedHandeler(event.value,'projectCountry')}
                                            placeholder="Project Country"
                                            isMulti={false}


                                            />
                                        </Col>
                                    {this.state.infoForm.projectName.touched && this.state.infoForm.projectCountry.err ? this.state.infoForm.projectCountry.err.map(message => (<p className="text-danger">{message}</p>)) : null}
                                        <Col xs={12} sm={12} md={6} lg={4} xl={4} >
                                            <Form.Control className="p-c-margin"type="text" placeholder="Input City" onChange={(event)=>this.inputCangedHandeler(event.target.value,'projectCity')}/>
                                            {this.state.infoForm.projectCity.touched && this.state.infoForm.projectCity.err ? this.state.infoForm.projectCity.err.map(message => (<p className="text-danger">{message}</p>)) : null}
                                        </Col>
                                    </Form.Group>
                                </Col>
                                <Col  xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Form.Group >
                                        <Form.Label>Year</Form.Label>
                                    </Form.Group>
                                </Col>
                                <Col  xs={12} sm={12} md={6} lg={4} xl={4} className="pr-3 mb-5">
                                <Form.Group>
                                    <CustomSelect 
                                            name="project-year"
                                            options={yearsList}
                                            onChange={(event)=>this.inputCangedHandeler(event.value.toString(),'projectYear')}
                                            placeholder="Select Project Year"
                                            isMulti={false}
                                            closeMenuOnSelect={true}
                                        />
                                    {this.state.infoForm.projectName.touched && this.state.infoForm.projectYear.err ? this.state.infoForm.projectYear.err.map(message => (<p className="text-danger">{message}</p>)) : null}
                                </Form.Group>
                                </Col>
                            </Form.Row>
                        </Col>
                    </Row>
                </Container>

            </React.Fragment>
        );
    }


    
}
const mapDispatchToProps = (dispatch) =>{
    return{
        addProjectInfo:(infoData)=>dispatch(addProjectInfo(infoData)),
        updateSteps:(currentStep,nextStep)=>dispatch(updateSteps(currentStep,nextStep))
    }
}
const mapStateToProps = (state) => ({ user: state.user ,project:state.Project});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AddProjectInfo));




