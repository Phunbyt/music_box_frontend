import artistImage from '../../../assets/images/filip-havlik.jpg'
import styles from './MobileTopImage.module.css'

const MobileTopImage = () => {
    return (
        <div className={styles.topImageContainer}>
            <img className={styles.mobileImage} src={artistImage} alt="" />
        </div>
    )
}

export default MobileTopImage