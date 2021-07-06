
import styles from './AlbumSideTableHeader.module.css'

const AlbumSideTableHeader =  () => {
    return (
        <div className={styles.albumSideTableHeader}>
            <p className={styles.albumSideTableHeaderNum}>#</p>
            <p className={styles.albumSideTableHeaderTitle}>TITLE</p>
            <p className={styles.albumSideTableHeaderArtist}>ARTIST</p>
            <p className={styles.albumSideTableHeaderTime}>TIME</p>
        </div>
    )
}


export default AlbumSideTableHeader