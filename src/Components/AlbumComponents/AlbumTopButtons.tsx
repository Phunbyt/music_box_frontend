import { useState } from "react"
import styles from './AlbumTopButtons.module.css'

const ArtistTopButtons = () => {
    const [play, setPlay] = useState("PAUSE")

    const togglePlayHandler = () =>{
        if (play === 'PAUSE') {setPlay("PLAY")}
        if (play === 'PLAY') {setPlay("PAUSE")}
    }
    const [likeColor, setLikeColor] = useState('white')
    const likeHandler = () =>{
        if (likeColor === 'white') {
            setLikeColor("red")
        }
        if (likeColor === 'red') {
            setLikeColor('white')
        }
    }

    return (
        <div className={styles.topButtons}>
            <div className={styles.topButtonsContainer}>
            <button className={styles.topButton1} onClick={togglePlayHandler}>{play}</button>
            <button className={`far fa-heart ${styles.topButton2}`} style={{color:`${likeColor}`, borderColor:`${likeColor}`}} onClick={likeHandler} ></button>
            <button className={`fas fa-ellipsis-h ${styles.topButton3}`}></button>
            </div>
        </div>
    )
}

export default ArtistTopButtons