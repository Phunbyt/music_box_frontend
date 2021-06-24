import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'
import Modal from '../Modal/Modal'
import RegModal from '../RegistrationModal/RegModal';
import Backdrop from '../Backdrop/Backdrop'

const Header = () => {
    const [showModal, setShowModal] = useState(false)
    const [showReg, setShowReg] = useState(false)
    const loginHandler = () => {
       if(!showReg) setShowModal(!showModal);

    }

    const signupHandler = () => {
        if (!showModal) setShowReg(!showReg);
    }
const closeHandler = () => {
    signupHandler();
    loginHandler();
    }
    return (
        <div className={classes.Header}>
            <h4 className={classes.HeaderDesign}>Music<br/>Box</h4>
            <div className={classes.Span_Wrapper}>
                <span className={classes.Span}></span>
                <span className={classes.Span}></span>
                <span className={classes.Span}></span>
            </div>
            <div> <Modal show={showModal} close={loginHandler} /> </div>
            <Backdrop show={showModal || showReg} clicked={closeHandler} />
            <div> <RegModal show={showReg} close={ signupHandler} /></div>
            <div className={classes.HeaderLarge}>
                <h4 className={classes.HeaderLarge_h4}> Download </h4>
                <h4 className={classes.HeaderLarge_h4}> Help </h4>
                <button className={classes.HeaderButton} onClick={loginHandler}>Log In </button>
                <button className={classes.HeaderButtonS} onClick={signupHandler}>Sign Up </button>

            </div>
        </div>
    )
}

export default Header
