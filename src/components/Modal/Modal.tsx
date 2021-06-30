import React, { useState, useEffect, MouseEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link, Redirect} from 'react-router-dom'

import classes from './Modal.module.css';
import { ImFacebook } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc';
import { AiFillCheckSquare } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import Loader from '../Loader/Loader'
import { login, socialLogin } from '../../actions/userActions'
import Message from '../../components/Message/Message'
import BackArrow from '../../asset/img/BackArrow.svg'


interface modal{
    close: () => void,
    show: boolean
    // style? = {}
}
interface UserLogin{
    userInfo: any
    error: any
    loading: boolean
}
interface RootState{
    userLogin: UserLogin
}
const Modal = ({ close, show }: modal) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
    const dispatch = useDispatch();
    const userLogin = useSelector((state: RootState) => state.userLogin)
    const { loading, error, userInfo } = userLogin

    console.log('error', error);
    

    const history = useHistory();
   

    const loginHandler =  (e: FormEvent<HTMLFormElement>) => {
        console.log('loginHandler', 'got here');
        e.preventDefault();
        dispatch(login(email, password));
        console.log('user',userInfo)
        if(userInfo){
            close()
            history.push('/home')
        }
        
        
    }

    const googleLoginHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(socialLogin())
    }

    return (
        
        <div className={show ? [classes.ModalWrapper, classes.show].join(" ") : [classes.ModalWrapper, classes.hide].join(" ") }>
                {error && <Message variant='danger'>" Incorrect Credentials"</Message>}
                {loading && <Loader />}
            <p className={ classes.CloseIcon} style={{ float: 'right', paddingRight: '15px', color: '#161A1A' }} onClick={() => close()}><IoMdClose /></p>
            <img className={classes.BackArrow} src={BackArrow} alt='back arrow' onClick={ () => close()}/>
            <div className={classes.ModalBody}>
                <h2 className={classes.ModalHeaderText}>What will you listen to today?</h2>
                <h2 className={classes.ModalHeaderTextMedium}>Log In</h2>
                <div className={ classes.Group}>
                <div className={classes.ModalSocialMedial}>
                    <button className={classes.ModalFaceBookButton}><ImFacebook /><span>Facebook</span></button>
                    <button className={classes.ModalGoogleButton} onClick={googleLoginHandler}><FcGoogle style={{fontSize:'30px'}}/><span>Google</span></button>
                </div>
                <div className={classes.FormWrapper}>
                    <form className={classes.form} onSubmit={loginHandler}>
                            <div className={classes.Form}>
                            <label className={ classes.FormLabel }htmlFor='email'>Email</label><br/>
                            <input className={classes.FormInput} type='email' value={ email} name='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                            <div className={classes.Form}>
                            <label className={ classes.FormLabel }htmlFor='email'>Password</label><br/>
                            <input className={classes.FormInput} type='password' value={ password } name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                    
                        <div className={classes.ModalFormChild}>
                            <div className={classes.ModalFormChilds}>
                                <p className={classes.Icon}><span><AiFillCheckSquare style={{ color: '#2d9bef', background: "#fff", width: '35px', height: '35px', paddingRight: '10px' }}/></span>Remember me</p>
                                <button type='submit' className={classes.ModalLogin}>LOG IN</button>
                            </div>
                            </div>
                        </form>
                    </div>
                    <h6 className={ classes.TextForgotPassword} style={{ color: '#2D9BEF', textAlign: 'center', letterSpacing: '0.07px', fontSize: '16px', marginTop: '10px' }}>Forgot your password?</h6>
                    <h4 className={ classes.DontHaveAnAccount} style={{ color: '#161A1A', textAlign: 'center', letterSpacing: '0.1px', fontSize: '15px', marginTop: '55px' }}>Don't you have an account?</h4>
                    <Link to='/register'>
                    <button type='submit' className={classes.ModalSignUp}>SIGN UP FOR MUSICBOX</button>

                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Modal
