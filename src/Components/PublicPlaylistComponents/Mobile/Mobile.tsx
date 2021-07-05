
import MobileTop from './MobileTop'
import Tracks from './Tracks'
import FeaturedArtistTop from '../FeaturedArtistTop'
import FeaturedArtist from '../FeaturedArtist'
import styles from './Mobile.module.css'

const ArtistMobile = (props: Record<string, any>) => {
    const loading = props.loading
    return (
        <div className={styles.mobile}>
            <MobileTop name={props.name} description={props.description} songsAndDuration={props.songsAndDuration} followers={props.followers}/>
            {
                !loading?
                <Tracks tracks={props.tracks} />
                : null
            }
            <FeaturedArtistTop />
            {
                !loading?
                    <FeaturedArtist songs={props.tracks} />
                : null
            } 
        </div>
    )
}

export default ArtistMobile