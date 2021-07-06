import FeaturedArtistDetails from './FeaturedArtistDetails'
import styles from './FeaturedArtist.module.css'

const FeaturedArtist = (props: Record<string, any>) =>{
    
    return (
        <div className={styles.featuredArtist}>
            {props.songs.map((song: Record<string, any>) => (
            <FeaturedArtistDetails key={`${song.tracktitle} ${song.trackArtist}`} artistId={song.trackArtistId} artist={song.trackArtist} artistImg={song.trackArtistImg} />
            )
            )}
        </div>
    )
}

export default FeaturedArtist