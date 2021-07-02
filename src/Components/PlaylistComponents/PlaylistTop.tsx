import PlaylistImage from './PlaylistImage'
import PlaylistTopDetails from './PlaylistTopDetails'
import TopButtons from './TopButtons'
import styles from './PlaylistTop.module.css'

const PlaylistTop = (props: Record<string, any>) =>{
    return (
        <div className={styles.playlistTop}>
            <PlaylistImage />
            <PlaylistTopDetails name={props.name} description={props.description} songsAndDuration={props.songsAndDuration}/>
            <div className={styles.topRight}>
            <TopButtons  />
            <p className={styles.topBottomText}>{props.createdAt}</p>
            </div>
        </div>
    )
}

export default PlaylistTop