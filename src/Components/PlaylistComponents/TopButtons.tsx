
import styles from './TopButtons.module.css'

const TopButtons = (props: Record<string, any>) => {
    return (
        <div className={styles.topButtons}>
            <div className={styles.topButtonsContainer}>
            <button className={styles.topButton1} >SHUFFLE PLAY</button>
            <button className={styles.topButton2}>EDIT</button>
            <button className={`fas fa-ellipsis-h ${styles.topButton3}`}></button>
            </div>
            
        </div>
    )
}

export default TopButtons