import * as actionTypes from './actiontypes';
import axios from 'axios';



export const authStart =() => {
    return{
        type:actionTypes.AUTH_START,
    }
}


export const authSuccess = (token , userId) => {
    return {
        type :actionTypes.AUTH_SUCCESS,
        idToken : token,
        userId:userId
    }
}

export const authFail  =(error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error :error
    }
} 


export const logout = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('userId');
    return{
        type:actionTypes.AUTH_LOGOUT
    }
}


export const checkAuhtTimeOut = ( expirationTime  ) =>
{
    return dispatch=>{
        setTimeout(() => {
            dispatch(logout())
        }, expirationTime*1000 );
    }
}





export const auth = (email , password , isSignup) => {
    return dispatch =>{
        dispatch(authStart());
        const authData = {
            email:email,
            password:password,
            returnSecureToken:true
        }
        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdjrfuOd06tsGbIGDYHy9ZdqzkTXqQTKc';
        if (!isSignup) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdjrfuOd06tsGbIGDYHy9ZdqzkTXqQTKc';
        }
        axios.post (url,authData)
        .then(res=>
            {
                const expirationDate = new Date (new Date().getTime() + res.data.expiresIn * 1000);
                localStorage.setItem('token', res.data.idToken);
                localStorage.setItem('userId', res.data.localId);
                localStorage.setItem('expirationDate',expirationDate);
                dispatch(authSuccess(res.data.idToken, res.data.localId))
                dispatch(checkAuhtTimeOut(res.data.expiresIn));
            })
        .catch(err=>{
            dispatch(authFail(err.response.data.error))
        })
    }
}
export const setAuthRedirectPaht = (path) =>{
    return {
        type:actionTypes.SET_AUTH_REDIRECT_PATH,
        path:path
    }
}

export const authCheckState  = () =>{
    return dispatch=>{
        const token = localStorage.getItem('token');
        if (!token) {
            dispatch(logout());
        }else{
            const expirationDate = new Date (localStorage.getItem('expirationDate'));
            if (expirationDate  <= new Date()) {
                dispatch(logout(token));
            }else{
                const userId  = localStorage.getItem('userId');
                dispatch(authSuccess(token,userId));
                dispatch(checkAuhtTimeOut((expirationDate.getTime()-new Date().getTime())/1000 ));
            }
        }
    }
}
