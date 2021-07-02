
import LikeButtons from './LikeButtons'
import styles from './AlbumSideTableSongs.module.css'

const AlbumSidetableSongs = (props: Record<string, any>) => {
    const num = props.num;
    const title = props.title;
    const artist = props.artist;
    const time = props.time;
    return (
        <div className={styles.albumSideTableSongs} style={{color: "#FFFFFF"}}>
            <p className={styles.albumSideTableSongsNum}>{num}</p>
            <p className={styles.albumSideTableSongsTitle}>{title}</p>
            <p className={styles.albumSideTableSongsArtist}>{artist}</p>
            <p className={styles.albumSideTableSongsTime}>{time}</p>
            <LikeButtons styling={styles.albumSideTableSongsLove} />
            <button className={styles.albumSideTableSongsPlus}><i className="fas fa-plus"></i></button>
        </div>
    )
}

export default AlbumSidetableSongs