
import styles from './MobileTopControls.module.css'

const MobileTopControls = () =>{
    return (
        <div className={styles.artistMobileTopControls}>
            <div className='artist-mobile-top-left'>
            <button className={`fas fa-arrow-left ${styles.artistMobileTopBack}`}></button>
            </div>
            <div className='artist-mobile-top-right'>
            <button className={`fas fa-ellipsis-v ${styles.artistMobileTopMenu}`}></button>
            </div>
        </div>
    )
}

export default MobileTopControls