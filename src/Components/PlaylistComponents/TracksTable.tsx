
import styles from './TracksTable.module.css'

const SongTable = (props: any) => {
    const num = props.num;
    const image = props.image;
    const title = props.title;
    const artist = props.artist;
    const album = props.album;
    const time = props.time;
    return (
        <div className={styles.tracksTable}>
            <p className={styles.tracksTableNum}>{num}</p>
            <div className={styles.tracksTableImageContainer}>
            <img className={styles.tracksTableImage} src={image} alt={time}></img>
            </div>
            <p className={styles.tracksTableTitle} >{title}</p>
            <p className={styles.tracksTableArtist} >{artist}</p>
            <p className={styles.tracksTableAlbum}>{album}</p>
            <p className={styles.tracksTableTime}>{time}</p>
            <button className={`${styles.tracksTableButton} fas fa-ellipsis-h`}></button> 
        </div>
    )
}

export default SongTable