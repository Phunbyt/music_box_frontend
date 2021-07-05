
import styles from './AlbumDetails.module.css'

const AlbumTopDetails = (props: Record<string, string>) =>{
    let title = 'Mellon Collie and the Infinite Sadness';
    if(props.title){
        title = props.title[0].toUpperCase() + props.title.slice(1);
     }
    const description = props.artist
    const details = props.trackDetails
  
        return (
            <div className={styles.albumDetails}>
                <p id='album-top-name'>Album</p>
                <h1 id='album-top-title'>{title}</h1>
                <p id='album-top-description'>{description}</p>
                <p style={{color: "#99999F"}}>{details}</p>
            </div>
        )
    }
    
    export default AlbumTopDetails