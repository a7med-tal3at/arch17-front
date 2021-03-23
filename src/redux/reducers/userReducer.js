import * as constants from '../../static/constant'

const defaultState ={
    userId:null, 
    fullName:null, 
    token:null, 
    isLoggedin:false
}

const userInfo = localStorage.getItem('UserInfo');
const INITIAL_STATE = userInfo? JSON.parse(userInfo):defaultState


export default function userReducer(state= INITIAL_STATE, action){
    switch (action.type) {
        case constants.SET_USER_INFO:
            return{...action}
            
    
        default:
            return state;
    }
}