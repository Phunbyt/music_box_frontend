import React from "react";
import { FaHeart } from "react-icons/fa";
import axios from 'axios'
import { recentPlay } from "../Homepage";
import "./RecentActivity.css";
import 'font-awesome/css/font-awesome.min.css';

export interface RecentActivityProps {
  value: recentPlay;
}

const likeArtist = async (info:string) => {
  try {
    const token = localStorage.getItem("Token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const {data} = await axios.put(`https://music-box-a.herokuapp.com/artist/like/${info}`,'',config)
    console.log(data);
  } catch (error) {
    console.log(error)
  }
}
const RecentActivity: React.SFC<RecentActivityProps> = ({ value }) => {
  let albumPic = "";
  let albumTitle = "";
  let albumLikes = "";
  let artistPic = "";
  let playlistPic = "https://cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg"
  let artistName = "";
  let artistLikes;
  let playListName = "";
  let playListLikes;
  let artistUniqueId = ""

  if (
    value &&
    value.albums &&
    value.albums[0].album &&
    value.artist &&
    value.playlist
  ) {
    albumPic = value.albums[0].album.cover_medium;
    albumTitle = value.albums[0].album.title;
    albumLikes = value.albums[0].album.likeCount;
    artistPic = value.artist[0].artist.pictureMedium;
    artistUniqueId = value.artist[0].artist._id;
    artistName = value.artist[0].artist.artistName;
    artistLikes = value.artist[0].artist.likeCount;
    playListName = value.playlist[0].playlist.name;
    playListLikes = value.playlist[0].playlist.likes.length;
  }

  return (
    <div className="recently-played">
      <div className="top">
        <p style={{ color: "white" }}>Recently Played</p>
      </div>
      <div className="bottom">
        <div className="cards">
          <div className="pic-text">
            <div className="recent-activity-image">
              <img alt="pic"
                className="recent-activity-real-image"
                src={artistPic} style={{borderRadius: '50%'}}
                 />
              <div><i className="fa fa-play-circle play" style={{left: '80px'}}></i></div>
            </div>
            <div>
              <p className="details" style={{textAlign: "center", marginTop: "10px"}}>
                Artist - {artistName}
              </p>
              <p style={{textAlign: "center", marginTop: "-20px", color: "#99999F"}}><FaHeart className="love" onClick={() => likeArtist(artistUniqueId)} />{" "} 
              {artistLikes}</p>
            </div>
          </div> 


          <div className="pic-text">
            <div className="recent-activity-image">
              <img alt="pic"
                className="recent-activity-real-image"
                src={albumPic}
                />
              <div><i className="fa fa-play-circle play"></i></div>
            </div>
            <div>
              <p className="details" style={{textAlign: "center", marginTop: "10px"}}>
                Album - {albumTitle}
              </p>
              <p style={{textAlign: "center", marginTop: "-20px", color: "#99999F"}}><FaHeart className="love" />{" "} 
              {albumLikes}</p>
            </div>
          </div> 

          <div className="pic-text">
            <div className="recent-activity-image">
              <img alt="pic"
                className="recent-activity-real-image"
                src={playlistPic}
                />
              <div><i className="fa fa-play-circle play"></i></div>
            </div>
            <div>
              <p className="details" style={{textAlign: "center", marginTop: "10px"}}>
                Playlist - {playListName}
              </p>
              <p style={{textAlign: "center", marginTop: "-20px", color: "#99999F"}}><FaHeart className="love" />{" "} 
              {playListLikes}</p> 
            </div>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;
