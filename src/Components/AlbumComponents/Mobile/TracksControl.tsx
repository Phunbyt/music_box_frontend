import { useState } from 'react'
import styles from './TracksControl.module.css'

const TracksControls = (props: Record<string, any>) =>{
    const [buttonDirection, setButtonDirection] = useState('fas fa-chevron-up')

    const displayTracksTable = props.toggleDisplay

    const toggleDisplay = () => {
        displayTracksTable()
        if (buttonDirection === 'fas fa-chevron-up'){ setButtonDirection('fas fa-chevron-down')}
        if (buttonDirection === 'fas fa-chevron-down'){ setButtonDirection('fas fa-chevron-up')}
    }
    return (
        <div className={styles.tracksControls}>
            <div className='artist-mobile-tracks-controls-left'>
                <h4 className='far fa-dot-circle'>   1 SIDE</h4>
            </div>
            <div className={styles.collapseContainer}>
            <button className={styles.collapse} onClick={toggleDisplay} >Playlist songs  <i className={buttonDirection}></i></button>
            </div>
        </div>
    )
}

export default TracksControls