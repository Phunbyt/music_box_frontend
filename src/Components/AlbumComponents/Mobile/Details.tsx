import { useState } from 'react'
import TopButtons from './TopButtons'
import styles from './Details.module.css'

const ArtistMobileDetails = (props: Record<string, any>) =>{
    const [downloadButton, setDownloadbutton] = useState("fas fa-toggle-off fa-2x")
    let title = 'Mellon Collie and the Infinite Sadness';
    if(props.title){
       title = props.title[0].toUpperCase() + props.title.slice(1);
    }

    let releaseDate = '23.10.95';
    if(props.releaseDate){
       releaseDate = props.releaseDate.split(": ")[1]
    }
    const artist = props.artist;
    const trackDetails = props.trackDetails

    const toggleHandler = () =>{
        if (downloadButton === "fas fa-toggle-off fa-2x") {
            setDownloadbutton("fas fa-toggle-on fa-2x")
        }
        if (downloadButton === "fas fa-toggle-on fa-2x") {
            setDownloadbutton("fas fa-toggle-off fa-2x")
        }
    }

    return (
        <div className={styles.details}>
            <h1>{title}</h1>
            <p className='fas fa-star' style={{textAlign: 'center', marginTop: '-15px'}}> {artist}</p>
            <TopButtons />
            <p style={{color: '#99999F', marginTop: '13px'}}>{releaseDate} <i className="fas fa-circle" style={{fontSize: '6px', alignSelf: 'center'}}></i> {trackDetails}</p>
            <div className={styles.download}>
                <h3 className={styles.downloadText}>DOWNLOAD</h3>
                <button onClick={toggleHandler} className={styles.downloadButton} style={{background: 'transparent', color: "grey"}}><i className={downloadButton}></i></button>
            </div>
        </div>
    )
}

export default ArtistMobileDetails