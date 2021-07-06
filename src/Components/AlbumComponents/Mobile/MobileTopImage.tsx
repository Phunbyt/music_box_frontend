
import styles from './MobileTopImage.module.css'

const MobileTopImage = (props: Record<string, any>) => {
    const image = props.image
    return (
        <div className={styles.topImageContainer}>
            <img className={styles.mobileImage} src={image} alt="" />
        </div>
    )
}

export default MobileTopImage