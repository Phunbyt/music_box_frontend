import React, { useState, useEffect, MouseEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link} from 'react-router-dom'

import classes from './Modal.module.css';
import { ImFacebook } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc';
import { AiFillCheckSquare } from 'react-icons/ai';
import { IoMdClose } from 'react-icons/io';
import Loader from '../Loader/Loader'
import { login, socialLogin } from '../../actions/userActions'
import Message from '../../components/Message/Message'


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
    

    const history = useHistory();

    useEffect(() => {
        if (userInfo) {
            history.push('/home')
            
        }
    }, [history, userInfo]);
    
    

    const loginHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(login(email, password));
        close();
    }

    const googleLoginHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(socialLogin())
    }

    return (
        
        <div className={show ? [classes.ModalWrapper, classes.show].join(" ") : [classes.ModalWrapper, classes.hide].join(" ") }>
            <p style={{ float: 'right', paddingRight: '15px', color: '#161A1A' }} onClick={() => close()}><IoMdClose /></p>
            <div className={classes.ModalBody}>
                {error && <Message variant='danger'>{ error }</Message>}
                {loading && <Loader />}
                <h2 className={classes.ModalHeaderText}>What will you listen to today?</h2>
                <div className={classes.ModalSocialMedial}>
                    <button className={classes.ModalFaceBookButton}><ImFacebook /><span>Facebook</span></button>
                    <button className={classes.ModalGoogleButton} onClick={googleLoginHandler}><FcGoogle style={{fontSize:'30px'}}/><span>Google</span></button>
                </div>
                <div className={classes.FormWrapper}>
                    <form className={classes.form}>
                        <div className={classes.Form}>
                            <input className={classes.FormInput} type='email' value={ email} name='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className={classes.Form}>
                            <input className={classes.FormInput} type='password' value={ password } name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                    </form>
                    <div className={classes.ModalFormChild}>
                        <div className={classes.ModalFormChilds}>
                            <p className={classes.Icon}><span><AiFillCheckSquare style={{ color: '#2d9bef', background: "#fff", width: '50px', height: '50px', paddingRight: '10px' }}/></span>Remember me</p>
                            <button className={classes.ModalLogin} onClick={ loginHandler}>LOG IN</button>
                        </div>
                    </div>
                    <h6 style={{ color: '#2D9BEF', textAlign: 'center', letterSpacing: '0.07px', fontSize: '16px', marginTop: '-20px' }}>Forgot your password?</h6>
                    <h4 style={{ color: '#161A1A', textAlign: 'center', letterSpacing: '0.1px', fontSize: '20px', marginTop: '-25px' }}>Don't you have an account?</h4>
                    <Link to='/register'>
                    <button className={classes.ModalSignUp}>SIGN UP FOR MUSICBOX</button>

                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default Modal
