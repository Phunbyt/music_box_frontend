
import MobileTop from './MobileTop'
import Tracks from './Tracks'
import styles from './Mobile.module.css'

const ArtistMobile = (props: Record<string, any>) => {
    const loading = props.loading
    return (
        <div className={styles.mobile}>
            <MobileTop name={props.name} description={props.description} songsAndDuration={props.songsAndDuration} />
            {
                !loading?
                <Tracks tracks={props.tracks} />
                : null
            }
        </div>
    )
}

export default ArtistMobile