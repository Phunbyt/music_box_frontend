import React from "react";
import { FaHeart, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { recentPlay } from "../Homepage";
import "./RecentActivity.css";
import rock from './rock.png';

export interface RecentActivityProps {
  value: recentPlay;
}

const RecentActivity: React.SFC<RecentActivityProps> = ({ value }) => {
  let albumPic = "";
  let albumTitle = "";
  let albumLikes = "";
  let artistPic = "";
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
            <div className="image" style={{
              background: `url(${artistPic}) center center no-repeat`,
              borderRadius: "50%",
            }}></div>
            <div>
              <p className="details" style={{textAlign: "center", marginTop: "10px"}}>
                Artist - {artistName}
              </p>
              <p style={{textAlign: "center", marginTop: "-20px", color: "#99999F"}}><FaHeart className="love" />{" "} 
              {artistLikes}</p>
            </div>
          </div> 
          <div className="pic-text">
            <div className="image" style={{
              background: `url(${albumPic}) center center no-repeat`
            }}></div>
            <div>
              <p className="details" style={{textAlign: "center", marginTop: "10px"}}>
                Album - {albumTitle}
              </p>
              <p style={{textAlign: "center", marginTop: "-20px", color: "#99999F"}}><FaHeart className="love" />{" "} 
              {albumLikes}</p>
            </div>
          </div>
          <div className="pic-text">
            <div className="image" style={{
              background: `url(${rock}) center center no-repeat`
            }}></div>
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
