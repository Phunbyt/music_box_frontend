import AlbumImage from './AlbumImage'
import AlbumDetails from './AlbumDetails'
import AlbumTopButtons from './AlbumTopButtons'
import styles from './AlbumTop.module.css'

const AlbumTop = (props: Record<string, any>) =>{
    const albumImage = props.image;
    const albumTitle = props.title;
    const albumArtist = props.artist;
    const trackDetails = props.trackDetails
    const releaseDate = props.releaseDate
    return (
        <div className={styles.albumTop}>
            <AlbumImage image={albumImage}/>
            <AlbumDetails title={albumTitle} artist={albumArtist} trackDetails={trackDetails} />
            <div className={styles.albumTopRight}>
            <AlbumTopButtons />
            <p className={styles.topBottomText}>{releaseDate}</p>
            </div>
        </div>
    )
}

export default AlbumTop