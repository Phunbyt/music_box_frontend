import React from 'react'
import classes from './Login.module.css'
import BackArrow from '../../asset/img/BackArrow.svg'
import { ImFacebook } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc';

const LoginScreen = () => {
    return (
        <div className={classes.Wrapper}>
            <img className={classes.BackArrow} src={BackArrow} alt='back arrow' />
            <h2 className={classes.LoginText}> Log In</h2>
            <div className={classes.FormWrapper}>
                <form>
                    <div className={classes.Form}>
                        <label className={ classes.FormLabel }htmlFor='email'>Email</label><br/>
                        <input className={classes.FormInput} type='email' name='email' placeholder='Enter Email' />
                    </div>
                    <div className={classes.Form}>
                        <label className={ classes.FormLabel }htmlFor='password'>Password</label><br/>
                        <input className={classes.FormInput} type='password' name='password' placeholder='Enter Password' />
                    </div>
                </form>
                <button className={classes.FormButton}> LOG IN </button>
            </div>
            <div className={classes.Buttons}>
            <button className={classes.FaceBookButton}><ImFacebook /><span>Log in with Facebook</span></button>
            <button className={classes.GoogleButton}><FcGoogle style={{fontSize:'35px'}}/><span>Log in with Google</span></button>
            </div>
        </div>
    )
}

export default LoginScreen
