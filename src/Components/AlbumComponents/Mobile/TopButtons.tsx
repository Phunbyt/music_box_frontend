
import styles from './TopButtons.module.css'

const TopButtons = () =>{
    return (
        <div className={styles.topButtons}>
                <button className={`far fa-heart ${styles.follow}`}>   ADD ALBUM</button>
                <button className={`fas fa-play ${styles.shuffle}`}>  PLAY</button>
        </div>
    )
}

export default TopButtons