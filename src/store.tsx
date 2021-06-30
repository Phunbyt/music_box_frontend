import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import {
    userLoginReducers,
    userSocialLoginReducers,
    userRegistrationReducers,
    userSocialRegistrationReducers
} from './reducers/userReducers'


const reducers = combineReducers({
    userLogin: userLoginReducers,
    userGoogleLogin: userSocialLoginReducers,
    userRegistration: userRegistrationReducers,
    userSocialRegistration: userSocialRegistrationReducers
})


let infoFromLocalStorage = localStorage.getItem('userInfo')
let userInfoFromStorage = null
if (infoFromLocalStorage != null) {
    userInfoFromStorage = JSON.parse(infoFromLocalStorage)
} else {
    userInfoFromStorage =null
}

const initialstate = {
    userLogin: {
        userInfo: userInfoFromStorage,
    },
}

const middleware = [thunk];

const store = createStore(reducers, initialstate, composeWithDevTools(applyMiddleware(...middleware)))

export default store;