import React from 'react'
import classes from './Footer.module.css';
import fb from '../../asset/img/fb.png'
import ig from '../../asset/img/ig.png'
import twitter from '../../asset/img/twitter.png'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <h4 style={{ color: 'white', margin: 0, paddingLeft: '40px', paddingTop: '50px', lineHeight: '0.8', fontSize: '30px'}}>Music<br />Box</h4>
            <div className={classes.FooterWrapper}>
                <div className={classes.FooterOtherWrapper}>
                    <div className={classes.FWrapperHeader}>
                        <h5 className={classes.FHeader}>MUSICBOX</h5>
                        <h5 className={classes.FHeader}>COMMUNITIES</h5>
                    </div>
                    <div className={classes.FWrapperHeader}>
                        <h5 className={classes.Fbody}>About</h5>
                        <h5 className={classes.Fbody}>For Artists</h5>
                    </div>
                    <div className={classes.FWrapperHeader}>
                        <h5 className={classes.Fbody}>Premium</h5>
                        <h5 className={classes.Fbody}>Developers</h5>
                    </div>
                    <div className={classes.FWrapperHeader}>
                        <h5 className={classes.Fbody}>Features</h5>
                        <h5 className={classes.Fbody}>Press</h5>
                    </div>
                </div>
                <div className={classes.FLinks}>
                    <h5 className={classes.FHeader}> USEFUL LINKS</h5>
                    <h5 className={classes.FLinksBody}>Help</h5>
                    <h5 className={classes.FLinksBody}>Web Player</h5>
                    <h5 className={classes.FLinksBody}>Explore</h5>
                    <h5 className={classes.FLinksBody}>Download App</h5>
                </div>
            </div>
            <div className={classes.FIconsWrapper}>
                <div className={classes.FIconsGroup}>
                    <img className={ classes.FIcons} src={fb} alt='facebook' />
                    <img className={ classes.FIcons} src={ig} alt='instagram' />
                    <img className={classes.FIcons} src={twitter} alt='twitter' />
                </div>
                <h5 style={{ color: '#ffffff', fontSize: '25px', marginTop: '30px'}}>English (us) </h5>
            </div>
        </div>
    )
}

export default Footer
