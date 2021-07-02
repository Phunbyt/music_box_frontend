import MobileTopImage from './MobileTopImage'
import MobileTopControls from "./MobileTopControl"
import Details from './Details'
import styles from './MobileTop.module.css'


const MobileTop = (props: Record<string, any>) =>{
    return (
        <div>
            <MobileTopControls />
            <div className={styles.artistMobileTopContainer}>
            <MobileTopImage />
            <Details title={props.name} description={props.description} songsAndDuration={props.songsAndDuration}  />
            </div>
        </div>
    )
}

export default MobileTop