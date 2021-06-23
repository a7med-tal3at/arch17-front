import * as constants from '../../static/constant'

export const registerUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: 'POST',
        url: 'user/registration/signup',
        data,
        success: (response) => (setUserInfo(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }
});

export const loginUser = (data, onSuccess, onError) => ({
    type: constants.API,
    payload: {
        method: "POST",
        url: 'user/registration/signin',
        data,
        success: (response) => (setUserInfo(response)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    }

});
const validateEmail = email => { 
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(email)){
        if(email.indexOf("@arch17.net", email.length - "@arch17.net".length) !== -1){
            return true
        }else{
            return false
        }
    }
}
const setUserInfo = (data) => {
    const user = data.user;
    validateEmail(user.email)

    const userData = {
        userId: user.id,
        email: user.email,
        avatar: user.avatar,
        fullName: `${user.fname} ${user.lname}`,
        token: data.Bearer_token,
        isLoggedin: true,
        companies:user.companies,
        stores:user.stores,
        isDesigner: user.is_designer,
        isAllowedToAddProject: user.companies.length > 0 || user.stores.length > 0 || user.is_designer === 1 || validateEmail(user.email)
    };

    localStorage.setItem('user', JSON.stringify(userData));

    return { type: constants.SET_USER_INFO, payload: userData }
}

