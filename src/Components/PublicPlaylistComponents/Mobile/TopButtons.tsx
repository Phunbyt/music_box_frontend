
import styles from './TopButtons.module.css'

const TopButtons = () =>{
    return (
        <div className={styles.topButtons}>
                <button className={`far fa-heart ${styles.follow}`}>   FOLLOW</button>
                <button className={`fas fa-random ${styles.shuffle}`}>  SHUFFLE PLAY</button>
        </div>
    )
}

export default TopButtons