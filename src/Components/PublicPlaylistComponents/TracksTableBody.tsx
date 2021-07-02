
import LikeButtons from './LikeButtons'
import styles from './TracksTableBody.module.css'

const TracksTableBody = (props: Record<string, any>) => {
    const num = props.num
    const title = props.title
    const artist = props.artist
    const album = props.album
    const time = props.time
    const image = props.image
    return (
        <div className={styles.artistTrackTable}>
            <p className={styles.artistTrackTableNum}>{num}</p>
            <img className={styles.artistTrackTableImage} src={image} alt=''></img>
            <p className={styles.artistTrackTableTitle} style={{overflow: 'hidden'}} >{title}</p>
            <p className={styles.artistTrackTableArtist} style={{overflow: 'hidden'}} >{artist}</p>
            <p className={styles.artistTrackTableAlbum} style={{overflow: 'hidden'}} >{album}</p>
            <p className={styles.artistTrackTableTime}>{time}</p>
            <button className={`fas fa-ellipsis-h whiteColor ${styles.trackMenu}`}></button>
            <LikeButtons styling={styles.artistTrackTableButton} />
            <button className={styles.artistTrackTableButtonAdd}><i className="fas fa-plus"></i></button> 
        </div>
    )
}

export default TracksTableBody
