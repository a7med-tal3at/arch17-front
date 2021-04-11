import React from 'react';
import { addProjectCreator } from './../../../../redux/actions/projectActions';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
const addDesignerProject = (props) => {
    const addandredirect = () =>{
        props.addProjectCreator('designer',props.id);
        props.history.push("/addproject/info");
    }
    return (
        <button onClick={addandredirect} className="btn arch17-btn mt-4 mx-3">
            Add Designer Project
        </button>
    );
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addProjectCreator:(creator,id)=>dispatch(addProjectCreator(creator,id))
    }

}
export default connect(null,mapDispatchToProps)(withRouter(addDesignerProject));