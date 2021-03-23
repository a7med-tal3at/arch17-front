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
        success: (response) => (setUserInfo(response.data)),
        postProcessSuccess: onSuccess,
        postProcessError: onError
    },

});

const setUserInfo = (data) => {

    // const parsedToken = JSON.parse(atob(data.Bearer_token.split('.')[1]));
    const user = data.user;
    const userData = {
        userId: user.id,
        email: user.email,
        avatar: user.avatar,
        fullName: `${user.fname} ${user.lname}`,
        token: data.Bearer_token,
        isLoggedin: true
    };

    localStorage.setItem('UserInfo', JSON.stringify(userData));

    return { type: constants.SET_USER_INFO, payload: userData }
}