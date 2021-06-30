import React from 'react';
import {Col} from 'react-bootstrap'
import like from "../../../../asset/img/like.svg";
import './Artist.css'
const ArtistsByGenre = ({artist}:any) => {
  return (
   <Col xl={2} lg={3} md={4} sm={6}>
    <a href={`/artists/${artist.name}`} className="d-block artist-link text-right">
     <img
      className="artist-poster"
      alt="genre poster"
      src={artist.picture_medium}
     />
     <p className="artist-name text-center">{artist.name}</p>
     <div className="d-flex likeArtist">
      <img alt="icon" src={like} />
      <p>238848</p>
     </div>
    </a>
   </Col>
  );
}
 
export default ArtistsByGenre;