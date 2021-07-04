import React, {useEffect, useState} from 'react'
import axios from 'axios';
import 'font-awesome/css/font-awesome.min.css';
import './ArtistsYouMayLike.css';
import ClipLoader from "react-spinners/ClipLoader";

export interface ArtistsYouMayLikeProps {
    
}
 
const ArtistsYouMayLike: React.FC<ArtistsYouMayLikeProps> = () => {
    const [artistYouMayLike, setArtistYouMayLike] = useState([] as Record<string, any>[]);
    const [loading, setLoading] = useState(false);
    const getArtists = async () => {
        try{
            setLoading(true);
            const token = localStorage.getItem("Token");
            const config = {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
            };
            const { data } = await axios.get("https://music-box-a.herokuapp.com/artist/mostPlayedArtists", config);
            setArtistYouMayLike(data.data);
            setLoading(false);
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        getArtists();
    }, [])

    return ( 
        <>
        {loading ? (
        <div className="App">
          <ClipLoader size={50} color={"#DEDFDF"} loading={loading} />
        </div>
      ) : (
        <div className="artists-you-may-like">
        <div className="artists-you-may-like-top">
            <p>You may like these Artists</p>
        </div>
        <div className="artists-you-may-like-bottom">
            {artistYouMayLike && artistYouMayLike.map((item: Record<string, any>) => (
                <div className="artist-you-may-like-div-container">
                    <div className="artist-you-may-like-div">
                    <img alt="artist-pic" className="artist-pic" src={item.pictureBig}/>
                    </div>
                    <p>{item.artistName}</p>
                    <p style={{font: 'normal normal normal 14px Lato', marginTop: '-15px', color: '#99999F'}}><i className="fa fa-heart" style={{letterSpacing: '0.08px', color: '#99999F', opacity: 1, marginRight: 5}}></i>{item.likeCount}</p>
                </div>
                
            ))}
        </div>
    </div> 
      )}

    
    </>
    );
}
 
export default ArtistsYouMayLike;