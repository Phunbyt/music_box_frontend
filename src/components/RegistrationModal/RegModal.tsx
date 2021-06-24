import React, { useState, useEffect, MouseEvent} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';

import { AiFillCheckSquare } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { ImFacebook } from 'react-icons/im'
import { IoMdClose } from 'react-icons/io'
import classes from './RegModal.module.css'
import RecaptchLogo from '../../asset/img/RecaptchaLogo.svg'
import Loader from '../../components/Loader/Loader';
import Message from '../../components/Message/Message'
import { registration } from '../../actions/userActions'
import { socialRegistration } from '../../actions/userActions'



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
interface UserRegistration{
    userRegInfo: any
    error: any
    loading: boolean
}
interface RootState{
    userLogin: UserLogin,
    userRegistration: UserRegistration
}

const RegModal = ({ close, show }: modal) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userName, setUserName] = useState('')
    const [gender, setGender] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState(Date)
    console.log(dateOfBirth)
    console.log(email)
    console.log(password)
    console.log(gender)
    console.log(userName)

    const dispatch = useDispatch()
    const userRegistration = useSelector((state: RootState) => state.userRegistration)

    const { loading, error, userRegInfo } = userRegistration

    const history = useHistory();

    const signUpHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(registration(email, password, userName, gender, dateOfBirth));
        close();
        
    }

    const socialLoginHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(socialRegistration())
    }
    

    useEffect(() => {
        if (userRegInfo) {
            history.push('/home')
        }
    }, [history, userRegInfo]);


    return (
        <div className={show ? [classes.ModalWrapper, classes.show].join(" ") : [classes.ModalWrapper, classes.hide].join(" ") }>
            <p style={{ float: 'right', paddingRight: '15px', color: '#161A1A' }} onClick={() => close()}><IoMdClose /></p>
            <div className={classes.ModalBody}>
                {error && <Message variant='danger'>{ error }</Message>}
                {loading && <Loader />}
                <h2 className={classes.ModalHeaderText}>Ready to sign up?</h2>
                <div className={classes.ModalSocialMedial}>
                    <button className={classes.ModalFaceBookButton}><ImFacebook /><span>Facebook</span></button>
                    <button className={classes.ModalGoogleButton} onClick={socialLoginHandler}><FcGoogle style={{fontSize:'30px'}}/><span>Google</span></button>
                </div>
                <div className={classes.FormWrapper}>
                    <form className={classes.form}>
                        <div className={classes.Form}>
                            <input className={classes.FormInput} type='email' value={email} name='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className={classes.Form}>
                            <input className={classes.FormInput} type='password' value={password} name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <div className={classes.Form}>
                            <input className={classes.FormInput} type='text' value={userName} name='username' placeholder='Enter Username' onChange={(e) => setUserName(e.target.value)}/>
                        </div>
                        <div className={classes.FormSelect}>
                            <input className={classes.FormInputDate} type='date' value={dateOfBirth} name='username' placeholder='Date of birth' onChange={(e) => setDateOfBirth(e.target.value)}/>
                            <select className={classes.select} value={gender} onChange={(e) => setGender(e.target.value)}>
                                <option value="male">Gender</option>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="others">Others</option>
                            </select>

                        </div>
                    </form>
                    <div className={classes.ModalFormChild}>
                        <div className={classes.ModalFormChilds}>
                            <p className={classes.Icon}><span></span>I'm not a robot</p>
                            <img className={classes.ModalRecaptcha} src={RecaptchLogo} alt='recaptcha logo'></img>
                        </div>
                    </div>
                    <div className={classes.ModalTerms} >
                        <h5 style={{color: '#121212', fontSize:'16px', letterSpacing: '0.07px'}}>By clicking on "Sign up", you accept the </h5>
                        <h5 style={{color: '#2D9BEF', fontSize:'14px', letterSpacing: '0.07px', marginTop: '-20px'}}>Terms and Conditions to use </h5>
                    </div>
                    
                    <button className={classes.ModalSignUp} onClick={ signUpHandler}>SIGN UP</button>
                    <h4 style={{ color: '#161A1A', textAlign: 'center', letterSpacing: '0.1px', fontSize: '12px', marginTop: '0px' }}>Already have an account? <Link to='/login' style={ { color: '#2D9BEF'}} >Log in</Link></h4>
                </div>
            </div>
            
        </div>
    )
}

export default RegModal
