import React from 'react';
import { Col } from 'react-bootstrap';
import "./SongInPlaylist.css";

const SongInPlaylist= ({song ,index}:any) => {
  return (
   <div className="col-md-12 text-white mb-2 playlist-song">
    <Col md={3} xs={3} className="d-flex align-items-center">
     <p className="text-left  my-2">{index + 1}</p>
     <img className="song-poster img-fluid" alt="song poster" src={song.img} />
    </Col>
    <Col md={3} xs={3}>
     <p className="text-left text-white my-2">{song.title}</p>
    </Col>
    <Col md={3} xs={3}>
     <p className="text-left my-2">{song.artist}</p>
    </Col>
    <Col md={3} xs={3}>
     <p className="text-left my-2">{song.album}</p>
    </Col>
   </div>
  );
}
 
export default SongInPlaylist;