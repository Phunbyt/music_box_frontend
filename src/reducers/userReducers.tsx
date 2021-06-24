import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS, USER_LOGIN_FAIL,
    USER_SOCIAL_LOGIN_REQUEST,
    USER_SOCIAL_LOGIN_SUCCESS,
    USER_SOCIAL_LOGIN_FAIL,
    USER_REGISTRATION_REQUEST,
    USER_REGISTRATION_SUCCESS,
    USER_REGISTRATION_FAIL,
    USER_SOCIAL_REGISTRATION_REQUEST,
    USER_SOCIAL_REGISTRATION_SUCCESS,
    USER_SOCIAL_REGISTRATION_FAIL,
} from '../constants/userConstant'

export const userLoginReducers = (state = {}, action: any) => {
    switch (action.type) {
        case USER_LOGIN_REQUEST:
            return {
                loading: true,
            }
        case USER_LOGIN_SUCCESS:
            return {
                loading: false, userInfo: action.payload

            }
        case USER_LOGIN_FAIL:
            return {
                loading: false, error: action.payload
            }
        default:
            return state;
    }
}
export const userSocialLoginReducers = (state = {}, action: any) => {
    switch (action.type) {
        case USER_SOCIAL_LOGIN_REQUEST:
            return {
                loading: true,
            }
        case USER_SOCIAL_LOGIN_SUCCESS:
            return {
                loading: false, userInfo: action.payload

            }
        case USER_SOCIAL_LOGIN_FAIL:
            return {
                loading: false, error: action.payload
            }
        default:
            return state;
    }
}


export const userSocialRegistrationReducers = (state = {}, action: any) => {
    switch (action.type) {
        case USER_SOCIAL_REGISTRATION_REQUEST:
            return {
                loading: true,
            }
        case USER_SOCIAL_REGISTRATION_SUCCESS:
            return {
                loading: false, userInfo: action.payload

            }
        case USER_SOCIAL_REGISTRATION_FAIL:
            return {
                loading: false, error: action.payload
            }
        default:
            return state;
    }
}



export const userRegistrationReducers = (state = {}, action: any) => {
    switch (action.type) {
        case USER_REGISTRATION_REQUEST:
            return {
                loading: true,
            }
        case USER_REGISTRATION_SUCCESS:
            return {
                loading: false, userInfo: action.payload

            }
        case USER_REGISTRATION_FAIL:
            return {
                loading: false, error: action.payload
            }
        default:
            return state;
    }
}