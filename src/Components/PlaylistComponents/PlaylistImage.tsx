import playlistImage from '../../assets/images/classicRock.png'
import styles from './PlaylistImage.module.css'

const PlaylistImage = (props:any) =>{

    let image = playlistImage
    if (props.image) {
        image = props.image
    }
    return (
        <div className={styles.playlistImageContainer}>
            <img className={styles.playlistImage} src={image} alt='' />
        </div>
    )
}

export default PlaylistImage