import React from "react";
import { FaHeart, FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { recentPlay } from "../Homepage";
import progrock from './progrock.png';
import image from './Image.png';
import guitarsolo from './guitarsolo.png';

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


  if (value && value.albums && value.albums[0].album && value.artist && value.playlist) {
    albumPic = value.albums[0].album.cover_medium;
    albumTitle = value.albums[0].album.title;
    albumLikes = value.albums[0].album.likeCount;
    artistPic = value.artist[0].artist.pictureMedium;
    artistName = value.artist[0].artist.artistName;
    artistLikes = value.artist[0].artist.likeCount
    playListName = value.playlist[0].playlist.name;
    playListLikes = value.playlist[0].playlist.likes.length
  }
  
  return (
    <div className="main mt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-10 mx-auto">
            <div className="row">
              <div className="col-md-12">
                <div className="top my-4">
                  <p className="float-start text-white" style={{font: "normal normal bold 24px/61px Lato"}}>Recently played</p>
                  <p className="float-end text-white">
                    <FaChevronLeft
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderRadius: "50%",
                        fontSize: "20px",
                      }}
                    />
                    <FaChevronRight
                      style={{
                        cursor: "pointer",
                        color: "white",
                        borderRadius: "50%",
                        fontSize: "20px",
                      }}
                    />
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-2 text-center text-white">
                    <div
                      className="card rounded-circle"
                      style={{
                        height: "160px",
                        width: "100%",
                        margin: "auto",
                        background: `url(${artistPic}) center center no-repeat`,
                      }}
                    ></div>
                    <div>
                      <p className="mx-auto" style={{ font: "normal normal normal 16px/24px Lato"}}>Artist - {artistName}</p>
                    </div>
                    <div style={{ marginTop: "-20px" }}>
                      <FaHeart
                        style={{
                          cursor: "pointer",
                          color: "#99999F 0% 0% no-repeat padding-box",
                          borderRadius: "50%",
                          fontSize: "20px",
                        }}
                      />
                      {artistLikes}
                    </div>
                  </div>
                  <div className="col-md-2 text-center text-white">
                    <div
                      className="card"
                      style={{
                        height: "160px",
                        width: "100%",
                        margin: "auto",
                        background: `url(${albumPic}) center center no-repeat`,
                      }}
                    ></div>
                    <div>
                      <p className="mx-auto" style={{ font: "normal normal normal 16px/24px Lato"}} > Album - {albumTitle}</p>
                    </div>
                    <div style={{ marginTop: "-20px" }}>
                      <FaHeart
                        style={{
                          cursor: "pointer",
                          color: "white",
                          borderRadius: "50%",
                          fontSize: "20px",
                        }}
                      />
                      {albumLikes}
                    </div>
                  </div>
                  <div className="col-md-2 text-center text-white">
                    <div
                      className="card"
                      style={{
                        height: "160px",
                        width: "100%",
                        margin: "auto",
                        background: `url(${albumPic}) center center no-repeat`,
                      }}
                    ></div>
                    <div>
                      <p className="mx-auto" style={{ font: "normal normal normal 16px/24px Lato"}} >Playlist - {playListName}</p>
                    </div>
                    <div style={{ marginTop: "-20px" }}>
                      <FaHeart
                        style={{
                          cursor: "pointer",
                          color: "white",
                          borderRadius: "50%",
                          fontSize: "20px",
                        }}
                      />{" "}
                      {playListLikes}
                    </div>
                  </div>
                  <div className="col-md-2 text-center text-white">
                    <div
                      className="card"
                      style={{
                        height: "160px",
                        width: "100%",
                        margin: "auto",
                        background: `url(${image}) center center no-repeat`,
                      }}
                    ></div>
                    <div>
                      <p className="mx-auto" style={{ font: "normal normal normal 16px/24px Lato"}} >Soul</p>
                    </div>
                    <div style={{ marginTop: "-20px" }}>
                      <FaHeart
                        style={{
                          cursor: "pointer",
                          color: "white",
                          borderRadius: "50%",
                          fontSize: "20px",
                        }}
                      />
                      {Math.floor(Math.random() * 10)}
                    </div>
                  </div>
                  <div className="col-md-2 text-center text-white">
                    <div
                      className="card"
                      style={{
                        height: "160px",
                        width: "100%",
                        margin: "auto",
                        background: `url(${guitarsolo}) center center no-repeat`,
                      }}
                    ></div>
                    <div>
                      <p className="mx-auto" style={{ font: "normal normal normal 16px/24px Lato"}} >Guitar</p>
                    </div>
                    <div style={{ marginTop: "-20px" }}>
                      <FaHeart
                        style={{
                          cursor: "pointer",
                          color: "white",
                          borderRadius: "50%",
                          fontSize: "20px",
                        }}
                      />
                      {Math.floor(Math.random() * 10)}
                    </div>
                  </div>
                  <div className="col-md-2 text-center text-white">
                    <div
                      className="card"
                      style={{
                        height: "160px",
                        width: "100%",
                        margin: "auto",
                        background: `url(${progrock}) center center no-repeat`,
                      }}
                    ></div>
                    <div>
                      <p className="mx-auto" style={{ font: "normal normal normal 16px/24px Lato"}} >Pop</p>
                    </div>
                    <div style={{ marginTop: "-20px" }}>
                      <FaHeart
                        style={{
                          cursor: "pointer",
                          color: "white",
                          borderRadius: "50%",
                          fontSize: "20px",
                        }}
                      />{" "}
                      {Math.floor(Math.random() * 10)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentActivity;

