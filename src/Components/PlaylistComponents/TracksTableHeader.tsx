
import styles from './TracksTableHeader.module.css'

const TracksTableHeader = () => {
    return (
        <div className={styles.tracksTableHeader}>
            <p className={styles.tracksTableNum}>#</p>
            <p className={styles.tracksTableTitle}>TITLE</p>
            <p className={styles.tracksTableArtist}>ARTIST</p>
            <p className={styles.tracksTableAlbum}>ALBUM</p>
            <p className={styles.tracksTableTime}>TIME</p>
        </div>
    )
}

export default TracksTableHeader