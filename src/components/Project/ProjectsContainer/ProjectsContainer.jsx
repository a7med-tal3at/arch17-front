import  React ,{Component} from 'react';
import ProjectBox from './ProjectBox/ProjectBox';
import { Col, Container, Row } from 'react-bootstrap';
class ProjectContainer extends Component{
    state ={
        projects:''
    }
    componentDidMount(){
        const apiProjects = [
            {
                id:'dasdasdfeart43tgw34',
                cover:'',
                name:'',
                category:'',
                types:[],
                owner_id:''
            },
            {
                id:'',
                cover:'',
                name:'',
                category:'',
                types:[],
                owner_id:''
            },
            {
                id:'',
                cover:'',
                name:'',
                category:'',
                types:[],
                owner_id:''
            },
            {
                id:'',
                cover:'',
                name:'',
                category:'',
                types:[],
                owner_id:''
            },
            {
                id:'',
                cover:'',
                name:'',
                category:'',
                types:[],
                owner_id:''
            },
            {
                id:'',
                cover:'',
                name:'',
                category:'',
                types:[],
                owner_id:''
            },
            {
                id:'',
                cover:'',
                name:'',
                category:'',
                types:[],
                owner_id:''
            },
            {
                id:'',
                cover:'',
                name:'',
                category:'',
                types:[],
                owner_id:''
            },
            {
                id:'',
                cover:'',
                name:'',
                category:'',
                types:[],
                owner_id:''
            },
            {
                id:'',
                cover:'',
                name:'',
                category:'',
                types:[],
                owner_id:''
            },
            {
                id:'',
                cover:'',
                name:'',
                category:'',
                types:[],
                owner_id:''
            },
            
        ] ;
        this.setState({projects:apiProjects});
    }
    render(){
        let projectsContainer ;
        if(this.state.projects){
        // eslint-disable-next-line array-callback-return
        projectsContainer = this.state.projects.map((project,index) => {
            console.log(index);
            return(
                <Col xs={12} sm={12} md={12} lg={4} xl={4} className="h-100 px-3 my-3" key={index}>
                    <ProjectBox />
                </Col>
            );
        }) 
        }else{
            projectsContainer  = null;
        }

        console.log(projectsContainer);

        return (
            <React.Fragment>
                <Container className="mt-5 mx-5 m-auto">
                    <Row>
                        {projectsContainer}
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}



export default ProjectContainer;