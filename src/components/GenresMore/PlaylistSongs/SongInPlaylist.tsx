import React from 'react';
import { Col, Row } from 'react-bootstrap';
import "./SongInPlaylist.css";

const SongInPlaylist= ({song ,index}:any) => {
  return (

    <Row className = "text-white mb-2 playlist-song justify-content-center ">
      
     <Col md={3} xs={3} className ="d-flex">
      <p>{index+1}</p>
      <img className="song-poster" alt ="song poster" src = {song.img}/>
     </Col>
      <Col md = {3} xs={3}>
        <p className="text-white">{song.title}</p>
      </Col>
      <Col md = {3} xs={3}>
        <p>{song.artist}</p>
      
      </Col>
      <Col md = {3} xs={3}>
        <p>{song.album}</p>
      </Col>
    </Row>
   
  );
}
 
export default SongInPlaylist;