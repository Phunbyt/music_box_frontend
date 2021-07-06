import MobileTopImage from './MobileTopImage'
import MobileTopControls from "./MobileTopControls"
import Details from './Details'
import styles from './MobileTop.module.css'


const MobileTop = (props: Record<string, any>) =>{
    return (
        <div>
            <MobileTopControls />
            <div className={styles.artistMobileTopContainer}>
            <MobileTopImage image={props.image} />
            <Details title={props.title} artist={props.artist} trackDetails={props.trackDetails} releaseDate={props.releaseDate} tracks={props.tracks} status={props.status} />
            </div>
        </div>
    )
}

export default MobileTop