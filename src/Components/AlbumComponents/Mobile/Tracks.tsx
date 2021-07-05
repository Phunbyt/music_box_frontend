import { useState } from 'react'
import TracksControl from './TracksControl'
import TracksTable from './TracksTable'

const Tracks = (props: Record<string, any>) =>{
    const [displayTable, setDisplayTable] = useState('block')
    const tracks = props.tracks
    const collapseTableHandler = () => {
        if (displayTable === 'block') {
          setDisplayTable('none')
        }
        if (displayTable === 'none') {
          setDisplayTable('block')
        }
      }
    return (
        <div className='artist-mobile-tracks'>
            <TracksControl toggleDisplay={collapseTableHandler} />
            <div className='artist-mobile-tracks-collapse' style={{display: `${displayTable}`}}>
            {tracks.map((track:Record<string, any>, index: number) =>(
                <TracksTable title={track.title} num={index + 1} artist={track.artist} time={`${String(track.duration)[0]}:${String(track.duration).slice(1)}`} key={`${track.title} ${track.artist}`} />
            ))}
            </div>
        </div>
    )
}

export default Tracks