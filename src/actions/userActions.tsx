import axios from 'axios';
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_FAIL,
    USER_LOGIN_SUCCESS,
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

export const login = (email: string, password: string) => async(dispatch: any) =>{
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        })
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'https://music-box-a.herokuapp.com/music/signIn',
            { email, password },
            config
        )

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })
        const {token} = data
        const {firstName, lastName,gender, userId} = data.user
        
        localStorage.setItem('Token', token)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
        localStorage.setItem('gender', gender)
        localStorage.setItem('userId', userId)
        
    } catch (error) {
        dispatch({
            type: USER_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        })
    }
}



export const socialLogin = () => async(dispatch: any) =>{
    try {
        dispatch({
            type: USER_SOCIAL_LOGIN_REQUEST
        })
      
        window.location.href = 'http://localhost:8080/auth/google';
    

        dispatch({
            type: USER_SOCIAL_LOGIN_SUCCESS,
        })

        //localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_SOCIAL_LOGIN_FAIL,
            payload:
                error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        })
    }
}


export const registration = (email: string, password: string, userName: string, gender: string, dateOfBirth: any) => async(dispatch: any) =>{
    try {
        dispatch({
            type: USER_REGISTRATION_REQUEST
        })

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        const { data } = await axios.post(
            'https://music-box-a.herokuapp.com/music/signUp',
            { email, password, userName, gender, dateOfBirth },
            config
        )

        dispatch({
            type: USER_REGISTRATION_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        dispatch({
            type: USER_REGISTRATION_FAIL,
            payload:
                error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        })
    }
}


export const socialRegistration = () => async(dispatch: any) =>{
    try {
        dispatch({
            type: USER_SOCIAL_REGISTRATION_REQUEST
        })
    
        window.location.href = 'http://localhost:8080/auth/google';


        dispatch({
            type: USER_SOCIAL_REGISTRATION_SUCCESS,
        })

        //localStorage.setItem('userInfo', JSON.stringify(data))
    } catch (error) {
        dispatch({
            type: USER_SOCIAL_REGISTRATION_FAIL,
            payload:
                error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
        })
    }
}