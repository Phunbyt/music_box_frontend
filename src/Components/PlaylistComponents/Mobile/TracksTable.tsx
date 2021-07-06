import { useState } from 'react'
import styles from './TracksTable.module.css'

const TracksTable = (props: Record<string, any>) =>{
    const [selected, setSelected] = useState("far fa-circle")
    const [selectedColor, setSelectedColor] = useState("white")
    const selectHandler = () =>{
        if (selected === 'fas fa-check-circle') {
            setSelected("far fa-circle")
            setSelectedColor('white')
        }
        if (selected === 'far fa-circle') {
            setSelected('fas fa-check-circle')
            setSelectedColor('green')
        }
    }
    const image = props.image
    const title = props.title
    const artist = props.artist
    return (
        <div className={styles.tracksTable}>
            <div className={styles.tracksImageContainer}>
                <img className={styles.tracksImage} src={image} alt='' />
            </div>
            <div className={styles.tracksDetailsContainer}>
                <p style={{margin: '0px'}}>{title}</p>
                <p style={{margin: '0px', letterSpacing: '0.08px', color: '#99999F'}}>{artist}</p>
            </div>
            <button className={styles.tracksSelect} onClick={selectHandler} style={{color: `${selectedColor}`}} ><i className={selected}></i></button>
        </div>
    )
}

export default TracksTable