import React from 'react';
import { addProjectCreator } from './../../../../redux/actions/projectActions';
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
const addArch17Project = (props) => {
    const addandredirect = () =>{
        props.addProjectCreator('arch17',props.id)
        props.history.push("/addproject/info");
    }
    return (
        <button onClick={addandredirect} className="btn arch17-btn mt-4 mx-3">
            Add Arch17 Project
        </button>
    );
}
const mapDispatchToProps = (dispatch) =>{
    return {
        addProjectCreator:(creator,id)=>dispatch(addProjectCreator(creator,id))
    }

}
export default connect(null,mapDispatchToProps)(withRouter(addArch17Project));