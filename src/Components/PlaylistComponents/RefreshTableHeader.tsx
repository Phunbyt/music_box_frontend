
import styles from './RefreshTableHeader.module.css'

const RefreshTableHeader = () => {
    return (
        <div className={styles.refreshHeader }>
            <p className={styles.refreshNum}>#</p>
            <p className={styles.refreshTitle}>TITLE</p>
            <p className={styles.refreshArtist}>ARTIST</p>
            <p className={styles.refreshAlbum}>ALBUM</p>
        </div>
    )
}

export default RefreshTableHeader