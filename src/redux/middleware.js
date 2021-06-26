import axios from 'axios'
import * as constants from '../static/constant'

const BASE_URL = 'http://127.0.0.1:8000/api/';

export const apiMiddlware = ({ dispatch }) => next =>  action => {
    // if (action.type !== constants.API) return next(action);
if (action.type===constants.API){
    const { url, method, success, data, postProcesSuccess, postProcesError } = action.payload;
    axios({
        method,
        url: BASE_URL + url,
        data: data ? data : null
    }).then((response) => {
        // console.log(response)

        window.location.reload('/')
        if (success) dispatch(success(response.data));
        if (success) postProcesSuccess(response.data);
    }).catch(err => {
        if (!err.response) console.warn(err)
        else {
            if (err.response.data.error.message) {
                if (postProcesError) postProcesError(err.response.data.error.message)
            }
        }
    })
}else{
    return next(action);
}
}

// export const AuthRequest = ()=>{
//     return dispatch => action => {
//         const { url, method, success, data, postProcesSuccess, postProcesError } = action.payload;
      
//         dispatch(registerUser())
//         axios({
//             method,
//             url: BASE_URL + url,
//             data: data ? data : null
//         }).then((response) => {
//             window.location.reload('/')
//             if (success) dispatch(success(response.data));
//             if (success) postProcesSuccess(response.data);
//         }).catch(err => {
//             if (!err.response) console.warn(err)
//             else {
//                 if (err.response.data.error.message) {
//                     if (postProcesError) postProcesError(err.response.data.error.message)
//                 }
//             }
//         })
//     }
// }