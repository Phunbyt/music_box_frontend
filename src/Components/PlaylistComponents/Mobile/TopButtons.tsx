
import styles from './TopButtons.module.css'

const TopButtons = () =>{
    return (
        <div className={styles.topButtons}>
                <button className={styles.follow}>Edit Playlist Name</button>
                <button className={styles.shuffle}>Edit description</button>
        </div>
    )
}

export default TopButtons