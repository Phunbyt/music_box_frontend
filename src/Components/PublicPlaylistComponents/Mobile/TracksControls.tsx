import { useState } from 'react'
import styles from './TracksControls.module.css'

const TracksControls = (props: Record<string, any>) =>{
    const [searchText, setSearchText] = useState('')
    const [showInput, setShowInput] = useState("none")
    const [buttonDirection, setButtonDirection] = useState('fas fa-chevron-up')

    const displayTracksTable = props.toggleDisplay

    const trackSearchHandler = (event: any) =>{
        setSearchText(event.target.value)
    }

    const clickHandler = () =>{
        if (showInput === 'inline-block') { setShowInput("none") }
        if (showInput === 'none') { setShowInput("inline-block") }
    }

    const toggleDisplay = () => {
        displayTracksTable()
        if (buttonDirection === 'fas fa-chevron-up'){ setButtonDirection('fas fa-chevron-down')}
        if (buttonDirection === 'fas fa-chevron-down'){ setButtonDirection('fas fa-chevron-up')}
    }
    return (
        <div className={styles.tracksControls}>
            <div className='artist-mobile-tracks-controls-left'>
                <input className={styles.search} id='artist-mobile-search' type='text' onChange={trackSearchHandler} value={searchText} style={{display: `${showInput}`}} />
                <label className='fas fa-search artist-mobile-search-label' htmlFor='artist-mobile-search' onClick={clickHandler}></label>
            </div>
            <div className='artist-mobile-tracks-controls-right'>
            <button className={styles.collapse} onClick={toggleDisplay} >Playlist songs  <i className={buttonDirection}></i></button>
            </div>
        </div>
    )
}

export default TracksControls