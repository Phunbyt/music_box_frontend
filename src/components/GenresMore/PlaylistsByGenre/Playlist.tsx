import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PlaylistByGenre= ({playlist}:any) => {
  return (
   <Col xl={2} lg={3} md={4} sm={6}>
    <Link to={`/genres/playlist/${playlist._id}`} className="d-block genre text-right">
     <img
      className="artist-poster"
      alt="playlist poster"
      src={playlist.picture_medium}
     />
     <h3 className="genre-name text-white">{playlist.name}</h3>
    </Link>
   </Col>
  );
}
 
export default PlaylistByGenre;