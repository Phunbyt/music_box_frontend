import PublicPlaylistImage from './PublicPlaylistImage'
import PublicPlaylistTopDetails from './PublicPlaylistTopDetails'
import PublicPlaylistTopButtons from './PublicPlaylistTopButtons'
import styles from './PublicPlaylistTop.module.css'

const PublicPlaylistTop = (props: Record<string, any>) =>{
    return (
        <div className={styles.publicPlaylistTop}>
            <PublicPlaylistImage />
            <PublicPlaylistTopDetails name={props.name} description={props.description} songsAndDuration={props.songsAndDuration} />
            <div className={styles.pulicPlaylistTopRight}>
             <PublicPlaylistTopButtons followers={props.followers} />
             <p className={styles.topBottomText}>{props.followers}</p>
            </div>
        </div>
    )
}

export default PublicPlaylistTop