import * as constants from '../actions/actionsConstants';

const defaultState = {
    loading:false,
    error:null,
    proejctCreator:{creator:null,id:null},
    currentStep:null,
    projectId:null,
    nextStep:null,
    info:null,
    content:null,
    role:null,
    mode:'Add'
}




export default function projectReducer(state = defaultState, action){
    switch (action.type) {
        case constants.ADD_PROJECT_CREATOR:
            return {...state,proejctCreator:{creator:action.payload.creator,id:action.payload.id}}

            // info 
        case constants.START_ADD_PROJECT_INFO:
                console.log(action);
            return {...state , loading:true};
        case constants.ADD_PROJECT_INFO_SUCSSES:
                console.log(action);
                return {...state, info:action.infoData,loading:false,currentStep:'content',nextStep:'role'};
        case constants.ADD_PROJECT_ID:
            console.log(action);
            return {...state , projectId:action.projectId};
        case constants.ADD_PROJECT_INFO_FAILS:
            console.log(action);
            return {...state , error:action.message,loading:false};


        // content
        case constants.START_ADD_PROJECT_CONTENT:
            console.log(action);
            return {...state , loading:true};
        case constants.ADD_PROJECT_CONTENT_SUCSSES:
            console.log(action);
            return {...state , content:action.contentData,loading:false,currentStep:'role',nextStep:'cover'};
        case constants.ADD_PROJECT_CONTENT_FAILS:
            console.log(action);
            return {...state , error:action.message,loading:false};




        // role 
        case constants.START_ADD_PROJECT_ROLE:
            console.log(action);
            return {...state , loading:true};
        case constants.ADD_PROJECT_ROLE_SUCSSES:
            console.log(action);
            return {...state , role:action.role,loading:false,currentStep:'cover',nextStep:'publish'};
        case constants.ADD_PROJECT_ROLE_FAILS:
            console.log(action);
            return {...state , error:action.message,loading:false};




        case constants.ADD_PROJECT_DESIGNERS:
                console.log(action);
            return {...state , designers:action.payload.data};
        case constants.ADD_PROJECT_SUPPLIERS:
            console.log(action);
            return {...state , suppliers:action.payload.data};
        case constants.ADD_PROJECT_COVER:
            return {...state,coverNam:action.payload.data}
        case constants.ADD_PROJECT_STEPS:
            console.log(action);
            return{...state,currentStep:action.payload.currentStep,nextStep:action.payload.nextStep};
        default:
            return state;
    }
}