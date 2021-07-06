
import styles from './RefreshTable.module.css'

const RefreshTable = (props: Record<string, any>) => {
    const num = props.num;
    const image = props.image;
    const title = props.title;
    const artist = props.artist;
    const album = props.album;
    return (
        <div className={styles.tracksTable}>
            <p className={styles.tracksTableNum}>{num}</p>
            <div className={styles.tracksTableImageContainer}>
                <img className={styles.tracksTableImage} src={image} alt={title} />
            </div>
            <p className={styles.tracksTableTitle} >{title}</p>
            <p className={styles.tracksTableArtist} >{artist}</p>
            <p className={styles.tracksTableAlbum} >{album}</p>
            <button className={styles.tracksTableButton}>ADD</button> 
        </div>
    )
}

export default RefreshTable