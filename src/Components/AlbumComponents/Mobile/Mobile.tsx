
import MobileTop from './MobileTop'
import Tracks from './Tracks'
import AlbumMore from '../AlbumMore'
import styles from './Mobile.module.css'

const ArtistMobile = (props: Record<string, any>) => {
    const loading = props.loading
    return (
        <div className={styles.mobile}>
            <MobileTop image={props.image} title={props.title} artist={props.artist} trackDetails={props.trackDetails} releaseDate={props.releaseDate} status={props.status}/>
            {
                !loading?
                <Tracks tracks={props.tracks} />
                : null
            }
            <AlbumMore albumArtist={props.albumArtist} albums={props.albums} />
        </div>
    )
}

export default ArtistMobile