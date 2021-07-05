import FeaturedArtistDetails from './FeaturedArtistDetails'
import styles from './FeaturedArtist.module.css'

const FeaturedArtist = (props: Record<string, any>) =>{
    
    return (
        <div className={styles.featuredArtist}>
            {props.songs.map((song: Record<string, any>) => (
            <FeaturedArtistDetails key={`${song.title} ${song.artist}`} artistId={song.artistId} artist={song.artist} artistImg={song.artistImg} />
            )
            )}
        </div>
    )
}

export default FeaturedArtist