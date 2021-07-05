
import publicPlaylistImage from '../../assets/images/filip-havlik.jpg'
import styles from './PublicPlaylistImage.module.css'

const PublicPlaylistImage = (props:any) =>{

    let image = publicPlaylistImage
    if (props.image) {
        image = props.image
    }
    return (
        <div className={styles.publicPlaylistImageContainer}>
            <img className={styles.publicPlaylistImage} src={image} alt='' />
        </div>
    )
}

export default PublicPlaylistImage