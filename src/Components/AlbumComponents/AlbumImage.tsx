
import styles from './AlbumImage.module.css'

const AlbumImage = (props:Record<string, any>) =>{

    const image = props.image
    return (
        <div className={styles.albumImageCntainer}>
            <img id={styles.albumImage} src={image} alt='' />
        </div>
    )
}

export default AlbumImage