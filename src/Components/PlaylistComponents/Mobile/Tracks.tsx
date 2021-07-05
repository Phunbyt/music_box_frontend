import { useState } from 'react'
import TracksControls from './TracksControls'
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
            <TracksControls toggleDisplay={collapseTableHandler} />
            <div className='artist-mobile-tracks-collapse' style={{display: `${displayTable}`}}>
            {tracks.map((track:Record<string, any>) =>(
                <TracksTable title={track.title} artist={track.artist} image={track.img} time={`${String(track.duration)[0]}:${String(track.duration).slice(1)}`} key={`${track.title} ${track.artist}`} />
            ))}
            </div>
        </div>
    )
}

export default Tracks