import React from 'react'
import classes from './LandingPage.module.css'
import { ImFacebook } from 'react-icons/im'
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    return (
        <div className={classes.Wrapper}>
            <h4 className={classes.Mmusic}>music<br />box</h4>
            <p className={classes.MText}>Play your favorite songs and artists.</p>
            <button className={classes.ModalFaceBookButton}><ImFacebook /><span>Sign up with Facaebook</span></button>
            <button className={classes.ModalGoogleButton}><FcGoogle style={{fontSize:'30px'}}/><span>Sign up with Google</span></button>
            <button className={classes.Signup}>Sign up with Email</button>
            <div className={classes.BottomText}>
                <p className={classes.Question}>Already have an account?</p>
                <Link className={ classes.Login} to='/login'>Log In</Link>
            </div>
        </div>
    )
}

export default LandingPage
