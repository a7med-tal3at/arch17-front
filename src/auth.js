import axios from 'axios';
import jwt_decode from "jwt-decode";
const base_url= "https://arch17.herokuapp.com/api/user/registration/signup";


export function signup(data){

    axios
        .post(
            "https://arch17.herokuapp.com/api/user/registration/signup", data
        )
        .then((res) => {
            console.log('Registered');
            console.log(jwt_decode(res.data.Bearer_token));
            localStorage.setItem("token", res.data.Bearer_token);

            // console.log(decoded)

        });
}




export function isLogin(){
    let hasToken = localStorage.getItem('token') ;
    return hasToken? true:false;
}

