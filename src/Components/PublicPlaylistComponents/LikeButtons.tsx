import { useState } from 'react'

const LikeButtons = (props: Record<string, any>) =>{
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
        <button className={`${props.styling}`} style={{color:`${likeColor}`}} onClick={likeHandler}><i className="far fa-heart"></i></button>
    )
}

export default LikeButtons