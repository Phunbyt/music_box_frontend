import React from 'react'
import classes from './Footer.module.css';
import fb from '../../asset/img/fb.png'
import ig from '../../asset/img/ig.png'
import twitter from '../../asset/img/twitter.png'

const Footer = () => {
    return (
        <div className={classes.Footer}>
            <h4 className={ classes.FooterLogo}>Music<br />Box</h4>
            <div className={classes.FooterItem_Container}>
                <div className={classes.FooterItem}>
                    <h5 className={classes.ItemHeader}>MUSICBOX</h5>
                    <ul className={classes.Items}>
                        <li>About</li>
                        <li>Premium</li>
                        <li>Features</li>
                    </ul>
                </div>
                <div className={classes.FooterItem}>
                    <h5 className={classes.ItemHeader}>COMMUNITIES</h5>
                    <ul className={classes.Items}>
                        <li>For Artists</li>
                        <li>Developers</li>
                        <li>Press</li>
                    </ul>
                </div>
                <div className={classes.FooterItem}>
                    <h5 className={classes.ItemHeader}>USEFUL LINKS</h5>
                    <ul className={classes.Items}>
                        <li>Help</li>
                        <li>Web Player</li>
                        <li>Explore Channel</li>
                        <li>Download App</li>
                    </ul>
                </div>
            </div>
            <div className={classes.FooterSocial}>
                <div className={classes.SocialIcons}>
                    <img className={ classes.FIcons} src={fb} alt='facebook' />
                    <img className={ classes.FIcons} src={ig} alt='instagram' />
                    <img className={classes.FIcons} src={twitter} alt='twitter' />
                </div>
                <h5 className={ classes.IconText}>English (us) </h5>
            </div>
            {/* <div className={classes.FooterWrapper}>
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
                <h5 style={{ color: '#ffffff', fontSize: '14px', marginTop: '13px'}}>English (us) </h5>
            </div> */}
        </div>
    )
}

export default Footer
