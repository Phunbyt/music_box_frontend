import React from 'react';
import {Col} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Artist.css'
const ArtistsByGenre = ({artist}:any) => {
  return (
   <Col xl={2} lg={3} md={4} sm={6}>
    <Link to={`/genres/${artist.id}`} className="d-block playlist text-right">
     <img
      className="artist-poster"
      alt="genre poster"
      src={artist.picture_medium}
     />
     <p className="artist-name text-center">{artist.name}</p>
    </Link>
   </Col>
  );
}
 
export default ArtistsByGenre;