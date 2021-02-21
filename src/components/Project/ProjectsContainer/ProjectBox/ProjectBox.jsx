import  React from 'react';
import './ProjectBox.css';
const ProjectBox = (props) =>{

        return (
        <div className="project-box border">
            <div className="project-img">
                <img src={'https://www.arch17.com/data/projects/339/cover/img/cover.jpg'} alt="Project Cover" className="img-fluid "/>
            </div>
            <div className="project-desc ">
                <div className="project-name mb-4 mt-2">
                    <h4>A Neighborhood Candy-Sweet Bakery</h4>
                </div>
                <div className="project-category">
                    <p className="mb-1"> Restaurant </p> 
                </div>
                <div className="w-25 pl-3"><hr className="m-0 p-0 "/></div>
                <div className="project-type d-flex justify-content-start align-items-center pb-2">
                    <p className=" my-1 mr-1"> Interior design </p>  <p className=" my-1 mr-1 ml-1"> Architecture </p>  <p className=" my-1 mr-1 ml-1"> Restaurant </p>
                </div>
            </div>
        </div>
        );
}



export default ProjectBox;