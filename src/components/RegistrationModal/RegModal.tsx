import React, { useState, useEffect, FormEvent, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { ImFacebook } from 'react-icons/im'
import { IoMdClose } from 'react-icons/io'
import classes from './RegModal.module.css'
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

    const dispatch = useDispatch()
    const userRegistration = useSelector((state: RootState) => state.userRegistration)

    const { loading, error, userRegInfo } = userRegistration
    console.log('registration', error)

    const history = useHistory();

    const signUpHandler = (e: FormEvent<HTMLFormElement>) => {
        console.log('got here');
        
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
            close();
            history.push('/home')
        }
    }, [history, userRegInfo]);


    return (
        <div className={show ? [classes.ModalWrapper, classes.show].join(" ") : [classes.ModalWrapper, classes.hide].join(" ") }>
                {error && <Message variant='danger'>{ error }</Message>}
                {loading && <Loader />}
            <p className={ classes.ModalStar}style={{ float: 'right', paddingRight: '15px', color: '#ffffff' }} onClick={() => close()}><IoMdClose /></p>
            <div className={classes.ModalBody}>
                <h2 className={classes.ModalHeaderText}>Ready to sign up?</h2>
                <h2 className={classes.ModalHeaderTextMedium}>Create Account</h2>
                <div className={classes.ModalSocialMedial}>
                    <button className={classes.ModalFaceBookButton}><ImFacebook /><span>Facebook</span></button>
                    <button className={classes.ModalGoogleButton} onClick={socialLoginHandler}><FcGoogle style={{fontSize:'30px'}}/><span>Google</span></button>
                </div>
                <div className={classes.FormWrapper}>
                    <form className={classes.form} onSubmit={signUpHandler}>
                        <div className={classes.Form}>
                        <label className={ classes.FormLabel }htmlFor='email'>Email</label><br/>
                            <input className={classes.FormInput} type='email' value={email} name='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required/>
                        </div>
                        <div className={classes.Form}>
                            <label className={ classes.FormLabel }htmlFor='email'>Password</label><br/>
                            <input className={classes.FormInput} type='password' value={password} name='password' placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required/>
                        </div>
                        <div className={classes.Form}>
                        <label className={ classes.FormLabel }htmlFor='email'>Username</label><br/>
                            <input className={classes.FormInput} type='text' value={userName} name='username' placeholder='Enter Username' onChange={(e) => setUserName(e.target.value)} required/>
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
                        <div className={classes.Wrap}>
                        <div className={classes.ModalTerms} >
                            <h5 className={classes.ModalTermsText}>By clicking on "Sign up", you accept the </h5>
                            <h5 className={classes.ModalTermsTextc}>Terms and Conditions to use </h5>
                        </div>
                            <button type='submit' className={classes.ModalSignUp}>SIGN UP</button>
                        </div>
                    </form>
                    <h4 className={ classes.AlreadyHaveAccount}style={{ color: '#161A1A', textAlign: 'center', letterSpacing: '0.1px', fontSize: '14px', marginTop: '10px' }}>Already have an account? <Link to='/login' style={ { color: '#2D9BEF'}} >Log in</Link></h4>
                </div>
            </div>
            
        </div>
    )
}

export default RegModal
