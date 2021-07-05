
import { useState } from 'react'
import styles from './AlbumSideTop.module.css'

const AlbumSideTop = (props: Record<string, any>) => {
    const [buttonDirection, setButtonDirection] = useState('fas fa-chevron-up')

    const displayTracksTable = props.toggleDisplay

    const toggleDisplay = () => {
        displayTracksTable()
        if (buttonDirection === 'fas fa-chevron-up'){ setButtonDirection('fas fa-chevron-down')}
        if (buttonDirection === 'fas fa-chevron-down'){ setButtonDirection('fas fa-chevron-up')}
    }
    return (
        <div className={styles.albumSideTop}>
            <h4 className="far fa-dot-circle"> 1 SIDE</h4>
            <div style={{display: 'flex'}}>
            <button className={styles.tracklistCollapse} onClick={toggleDisplay}>Album songs  <i className={buttonDirection}></i></button>
            </div>
        </div>
    )
}

export default AlbumSideTop