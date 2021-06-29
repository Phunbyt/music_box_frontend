import React from "react";
import { FaHeart, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { recentPlay } from "../../screens/Homepage";
import "./RecentActivity.css";
import 'font-awesome/css/font-awesome.min.css';

export interface RecentActivityProps {
  value: recentPlay;
}

const RecentActivity: React.SFC<RecentActivityProps> = ({ value }) => {
  let albumPic = "";
  let albumTitle = "";
  let albumLikes = "";
  let artistPic = "";
  let playlistPic = ""
  let artistName = "";
  let artistLikes;
  let playListName = "";
  let playListLikes;

  if (
    value &&
    value.albums &&
    value.albums[0].album &&
    value.artist &&
    value.playlist
  ) {
    playlistPic = value.playlist[0].playlist.pic || 'https://cdns-images.dzcdn.net/images/artist//500x500-000000-80-0-0.jpg'
    albumPic = value.albums[0].album.cover_medium;
    albumTitle = value.albums[0].album.title;
    albumLikes = value.albums[0].album.likeCount;
    artistPic = value.artist[0].artist.pictureMedium;
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
              <img 
                className="recent-activity-real-image"
                src={artistPic}
                style={{
                  height: "100%",
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                  borderRadius: '50%'
                 }} />
              <div><i className="fa fa-play-circle play" style={{left: '80px'}}></i></div>
            </div>
            <div>
              <p className="details" style={{textAlign: "center", marginTop: "10px"}}>
                Artist - {artistName}
              </p>
              <p style={{textAlign: "center", marginTop: "-20px", color: "#99999F"}}><FaHeart className="love" />{" "} 
              {artistLikes}</p>
            </div>
          </div> 


          <div className="pic-text">
            <div className="recent-activity-image">
              <img 
                className="recent-activity-real-image"
                src={albumPic}
                style={{
                  height: "100%",
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                 }} />
              <div><i className="fa fa-play-circle play"></i></div>
            </div>
            <div>
              <p className="details" style={{textAlign: "center", marginTop: "10px"}}>
                Artist - {albumTitle}
              </p>
              <p style={{textAlign: "center", marginTop: "-20px", color: "#99999F"}}><FaHeart className="love" />{" "} 
              {albumLikes}</p>
            </div>
          </div> 

          <div className="pic-text">
            <div className="recent-activity-image">
              <img 
                className="recent-activity-real-image"
                src={playlistPic}
                style={{
                  height: "100%",
                  width: "100%",
                  display: "block",
                  objectFit: "cover",
                 }} />
              <div><i className="fa fa-play-circle play"></i></div>
            </div>
            <div>
              <p className="details" style={{textAlign: "center", marginTop: "10px"}}>
                Artist - {playListName}
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
