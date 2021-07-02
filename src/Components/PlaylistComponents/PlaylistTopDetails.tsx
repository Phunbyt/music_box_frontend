
import styles from './PlaylistTopDetails.module.css'

const PlaylistTopDetails = (props: Record<string, string>) =>{
    const name = props.name
    const description = props.description
    const details = props.songsAndDuration
        return (
            <div className={styles.playlistTopDetails}>
                <p id='playlist-top-name' style={{marginBottom: '-15px'}}>Created Playlist</p>
                <h1 id='playlist-top-title'>{name}</h1>
                <p id='playlist-top-description'>{description}</p>
                <p style={{color: "#99999F"}}>{details}</p>
            </div>
        )
    }
    
    export default PlaylistTopDetails