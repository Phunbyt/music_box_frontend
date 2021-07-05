
import styles from './TracksTableHeader.module.css'

const TracksTableHeader = () => {
    return (
        <div className={styles.artistTracksTableHeader}>
            <p className={styles.headerNum}>#</p>
            <p className={styles.headerTitle}>TITLE</p>
            <p className={styles.headerArtist}>ARTIST</p>
            <p className={styles.headerAlbum}>ALBUM</p>
            <p className={styles.headerTime}>TIME</p>
        </div>
    )
}

export default TracksTableHeader