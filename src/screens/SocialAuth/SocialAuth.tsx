import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import {useParams,useHistory} from 'react-router-dom'
import Loader from '../../components/Loader/Loader'


interface UserLogin{
    userInfo: any
    error: any
    loading: boolean
}
interface RootState{
    userLogin: UserLogin
}
const SocialAuth = () => {

    const { token, data } = useParams<{ token: string, data:  undefined }>()
    localStorage.setItem('userInfo', token)
    console.log('data on login',data);
    console.log('Bearer',token);

    const userLogin = useSelector((state: RootState) => state.userLogin)
    const { loading, error, userInfo } = userLogin
    
    const history = useHistory()

    useEffect(() => {
          if (userInfo) {
            history.push('/home')
        }
    },[history, userInfo])
    
    console.log(token)
    return (
    
        <div>
            {loading && <Loader />}
            {error && history.push('/')}
        </div>
    )
}

export default SocialAuth
