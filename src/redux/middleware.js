import axios from 'axios'
import * as constants from '../static/constant'

const BASE_URL = 'https://arch17.herokuapp.com/api/';

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
}}
