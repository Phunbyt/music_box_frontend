
import styles from './AlbumMoreTop.module.css'

const AlbumMoreTop = (props: Record<string, any>) =>{
    const artist = props.albumArtist
    return (
        <div className={styles.albumMoreTop}>
            <h3 className='album-more-text'>{`More by ${artist}`}</h3>
            <button className='album-more-button' style={{background:'transparent', borderStyle:'none', color:'#FFFFFF'}}>VIEW ALL</button>
        </div>
    )
}

export default AlbumMoreTop