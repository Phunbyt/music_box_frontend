

const PublicPlaylistTopDetails = (props: Record<string, string>) =>{
    
    const name = props.name;
    const description = props.description;
    const details = props.songsAndDuration;
        return (
            <div id='public-playlist-top-details'>
                <p id='public-playlist-top-name'>Playlist</p>
                <h1 id='public-playlist-top-title'>{name}</h1>
                <p id='public-playlist-top-description'>{description}</p>
                <p style={{color: "#99999F"}}>{details}</p>
            </div>
        )
    }
    
    export default PublicPlaylistTopDetails