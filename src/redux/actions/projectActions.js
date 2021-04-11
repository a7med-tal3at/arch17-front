import axios from 'axios';
import * as constants from '../actions/actionsConstants';

export const addProjectCreator = (creator,id) => ({
    type: constants.ADD_PROJECT_CREATOR,
    payload: {
        creator:creator,
        id:id
    }
});

export const updateSteps = (currentStep,nextStep) => ({
    type: constants.ADD_PROJECT_STEPS,
    payload: {
        currentStep:currentStep,
        nextStep:nextStep
    }
})

export const startAddProjectInfo  = () => {
    return{
        type: constants.START_ADD_PROJECT_INFO
    }
}
export const addProjectInfoSucsses = (infoData) =>{
    return{
    type: constants.ADD_PROJECT_INFO_SUCSSES,
    infoData:infoData
    }
}

export const addProjectInfoFails = (errorMessage) =>{
    return {
    type: constants.ADD_PROJECT_INFO_FAILS,
    loading:false,
    message:errorMessage
    }
}
export const addProjectInfo = (data) => {
    
    return dispatch => {
        console.log(data);
        dispatch(startAddProjectInfo());
        axios({
            method:'POST',
            url: 'http://127.0.0.1:8000/api/account/addproject/info',
            data: data,
            headers: {
                'Authorization': data.token
            }
            }).then((response) => {
                // dispatch(addProjectId(response.data.project.id))
                dispatch(addProjectInfoSucsses(response.data.data.project))
                console.log(response.data.data.project);
            }).catch(err => {
                dispatch(addProjectInfoFails(err))
                console.log(err);
            })
    }
};


export const startAddProjectContent  = () => {
    return{
        type: constants.START_ADD_PROJECT_CONTENT
    }
}
export const addProjectContentSucsses = (contentData) =>{
    return{
    type: constants.ADD_PROJECT_CONTENT_SUCSSES,
    contentData:contentData
    }
}

export const addProjectContentFails = (errorMessage) =>{
    return {
    type: constants.ADD_PROJECT_CONTENT_FAILS,
    loading:false,
    message:errorMessage
    }
}




export const addProjectContent = (data) => {
    return dispatch => {
        dispatch(startAddProjectContent());
        axios({
            method:'POST',
            url: 'http://127.0.0.1:8000/api/account/addproject/description',
            data: data,
            headers: {
                'Authorization': data.token
            }
        }).then((response) => {
            dispatch(addProjectContentSucsses(response.data.data.project_description.description_text))
            console.log(response);
        }).catch(err => {
            console.log(err);
            dispatch(addProjectContentFails(err))
        })
    }

};


export const addProjectRoleDesigners = (data) => {
    axios({
        method:'POST',
        url: 'http://127.0.0.1:8000/api/account/addproject/designer',
        data: data,
        headers: {
            "Authorization": data.token
        }
    }).then((response) => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    })
    return {
    type: constants.ADD_PROJECT_DESIGNERS,
        payload: {
            data:data
        }
    }
};


export const addProjectRoleBrands = (data) => {
    axios({
        method:'POST',
        url: 'http://127.0.0.1:8000/api/account/addproject/supplier',
        data: data,
        headers: {
            "Authorization": data.token
        }
    }).then((response) => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    })
    return {
    type: constants.ADD_PROJECT_SUPPLIERS,
        payload: {
            data:data
        }
    }
};






export const startAddProjectRole  = () => {
    return{
        type: constants.START_ADD_PROJECT_ROLE
    }
}
export const addProjectRoleSucsses = (roleData) =>{
    return{
    type: constants.ADD_PROJECT_ROLE_SUCSSES,
    role:roleData
    }
}

export const addProjectRoleFails = (errorMessage) =>{
    return {
    type: constants.ADD_PROJECT_ROLE_FAILS,
    loading:false,
    message:errorMessage
    }
}
export const addProjectRole = (data) => {
    
    return dispatch => {
        console.log(data);
        dispatch(startAddProjectRole());
        axios({
            method:'POST',
            url: 'http://127.0.0.1:8000/api/account/addproject/role',
            data: data,
            headers: {
                'Authorization': data.token
            }
            }).then((response) => {
                // dispatch(addProjectId(response.data.project.id))
                dispatch(addProjectRoleSucsses(response.data.data.message))
                console.log(response.data.data.message);
            }).catch(err => {
                dispatch(addProjectRoleFails(err))
                console.log(err);
            })
    }
};




export const startAddProjectCover  = () => {
    return{
        type: constants.START_ADD_PROJECT_COVER
    }
}
export const addProjectCoverSucsses = (coverData) =>{
    return{
    type: constants.ADD_PROJECT_COVER_SUCSSES,
    cover:coverData
    }
}

export const addProjectCoverFails = (errorMessage) =>{
    return {
    type: constants.ADD_PROJECT_COVER_FAILS,
    loading:false,
    message:errorMessage
    }
}






export const addProjectCover = (data) => {
    return dispatch => {
        console.log(data);
        dispatch(startAddProjectCover());
        axios({
            method:'POST',
            url: 'http://127.0.0.1:8000/api/account/addproject/cover',
            data: data,
            headers: {
                "Authorization": data.token
            }
        }).then((response) => {
            dispatch(addProjectCoverSucsses(response.data.data.message))
            console.log(response.data.data.message);
        }).catch(err => {
            dispatch(addProjectRoleFails(err))
            console.log(err);
        })
    }
};
