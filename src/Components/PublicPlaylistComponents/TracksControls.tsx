import { useState } from 'react'
import styles from './TracksControls.module.css'

const TracksTableControls = (props: Record<string, any>) => {
    const [trackSearch, setTrackSearch] = useState("")
    const [buttonDirection, setButtonDirection] = useState('fas fa-chevron-up')

    const trackSearchHandler = (event: any) =>{
        setTrackSearch(event.target.value)
    }

    const displayTracksTable = props.toggleDisplay

    const toggleDisplay = () => {
        displayTracksTable()
        if (buttonDirection === 'fas fa-chevron-up'){ setButtonDirection('fas fa-chevron-down')}
        if (buttonDirection === 'fas fa-chevron-down'){ setButtonDirection('fas fa-chevron-up')}
    }
    return (
        <div className={styles.artistTrackTableControls}>
            <label htmlFor="playlist-search" className={`fas fa-search ${styles.trackSearch}`}>
                <input className={styles.playlistTracksSearch} id='artist-tracks-search' type='text' value={trackSearch} onChange={trackSearchHandler} placeholder='Playlist search' />
            </label>
            <div className={styles.artistTrackTableControlsRight}>
            <button className={styles.tracklistCollapse} onClick={toggleDisplay} >Playlist songs  <i className={buttonDirection}></i></button>
            </div>
        </div>
    )
}

export default TracksTableControls