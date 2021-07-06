
import AlbumMoreTop from './AlbumMoreTop'
import AlbumMoreAlbums from './AlbumMoreAlbums'
import styles from './AlbumMore.module.css'

const AlbumMore = (props: Record<string, any>) => {
    // console.log(props.albums)
    return (
        <div className={styles.albumMore}>
            <AlbumMoreTop albumArtist={props.albumArtist}/>
            <AlbumMoreAlbums albums={props.albums} />
        </div>
    )
}

export default AlbumMore