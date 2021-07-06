
import styles from './TracksTable.module.css'

const TracksTable = (props: Record<string, any>) =>{
    const num = props.num
    const title = props.title
    const time = props.time
    return (
        <div className={styles.tracksTable}>
            <p>{num}</p>
            <div className={styles.tracksDetailsContainer}>
                <p style={{margin: '0px'}}>{title}</p>
                <p style={{margin: '0px', letterSpacing: '0.08px', color: '#99999F'}}>{time}</p>
            </div>
            <button className={`fas fa-ellipsis-v ${styles.tracksMenu}`}></button>
        </div>
    )
}

export default TracksTable