
import styles from './AlbumMoreAlbums.module.css'

const AlbumMoreAlbums = (props: Record<string, any>) =>{
    return (
        <div className={styles.albumMoreAlbums}>
            <div className={styles.albumMoreAlbumsDetails}>
            {props.albums.map((album: Record<string, any>) => (
                <div className={styles.albumMoreAlbumsDetailsContainer} key={album.id}>
                <div className={styles.albumMoreAlbumsImageContainer}>
                    <img className={styles.albumMoreAlbumsImage} src={album.cover} alt='' />
                </div>
                <p className='album-more-albums-title'>{album.title}</p>
                <p className='album-more-album-release-date' style={{marginTop: '-10px'}} >{`Released: ${album.release_date}`}</p>
                </div>
                ))}
                </div>
        </div>
    )
}

export default AlbumMoreAlbums