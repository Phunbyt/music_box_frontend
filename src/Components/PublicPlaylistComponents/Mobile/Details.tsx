import { useState } from 'react'
import TopButtons from './TopButtons'
import styles from './Details.module.css'

const ArtistMobileDetails = (props: Record<string, any>) =>{
    const [downloadButton, setDownloadbutton] = useState("fas fa-toggle-off fa-2x")
    const title = props.title
    const description = props.description;
    const followers = props.followers.split(" ")[0]
    const songsAndDuration= props.songsAndDuration

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
            <p className='fas fa-heart' style={{textAlign: 'center', marginTop: '-15px'}}> {followers} <i className="fas fa-circle" style={{fontSize: '6px', alignSelf: 'center'}}></i> {songsAndDuration}</p>
            <TopButtons />
            <p style={{color: '#99999F', marginTop: '13px'}}>{description}</p>
            <div className={styles.download}>
                <h2 className={styles.downloadText}>DOWNLOAD</h2>
                <button onClick={toggleHandler} className={styles.downloadButton} style={{background: 'transparent', color: "grey"}}><i className={downloadButton}></i></button>
            </div>
        </div>
    )
}

export default ArtistMobileDetails