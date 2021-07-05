import { useState } from 'react'
import styles from './TracksTable.module.css'

const TracksTable = (props: Record<string, any>) =>{
    const [likeColor, setLikeColor] = useState('white')
    const likeHandler = () =>{
        if (likeColor === 'white') {
            setLikeColor("red")
        }
        if (likeColor === 'red') {
            setLikeColor('white')
        }
    }
    const image = props.image
    const title = props.title
    const artist = props.artist
    const time = props.time
    const details = `${artist} / ${time}`
    return (
        <div className={styles.tracksTable}>
            <div className={styles.tracksImageContainer}>
                <img className={styles.tracksImage} src={image} alt='' />
            </div>
            <div className={styles.tracksDetailsContainer}>
                <p style={{margin: '0px'}}>{title}</p>
                <p style={{margin: '0px', letterSpacing: '0.08px', color: '#99999F'}}>{details}</p>
            </div>
            <button className={styles.tracksLike} style={{color:`${likeColor}`}} onClick={likeHandler} ><i className="far fa-heart"></i></button>
            <button className={`fas fa-ellipsis-v ${styles.tracksMenu}`}></button>
        </div>
    )
}

export default TracksTable