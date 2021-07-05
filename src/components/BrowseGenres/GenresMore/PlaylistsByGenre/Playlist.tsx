import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import playlist_poster from '../../../../asset/img/playlist_poster.png'
import like from '../../../../asset/img/like.svg';
import './Playlist.css'
const PlaylistByGenre= ({playlist}:any) => {
  return (
   <Col xl={2} lg={3} md={4} sm={6}>
    <Link
     to={`/genres/playlist/${playlist._id}`}
     className="d-block playlist text-left"
    >
     <img
      className="playlist-poster"
      alt="playlist poster"
      src={playlist.picture_medium ? playlist.picture_medium : playlist_poster}
     />
     <p className="playlist-name text-white">{playlist.name}</p>
     <div className="d-flex likePlaylist">
      <img alt="icon" src={like}/>
      <p>238848</p>
     </div>
    </Link>
   </Col>
  );
}
 
export default PlaylistByGenre;