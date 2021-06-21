import React, {useContext,useEffect} from 'react';
import {useParams} from 'react-router'
import { GenreContext } from '../../../context/GenreContext';
import SongInPlaylist from "./SongInPlaylist";
import { Row,Col } from 'react-bootstrap';
import './PlaylistSongs.css'
const PlaylistSongs = () => {
  const {playlistid}:any = useParams()
  const {getOnePlaylist,playlistsongs}:any= useContext(GenreContext)

  useEffect(()=>{
    getOnePlaylist(playlistid)
  },[])

  return (
   <div className="container-fluid">
    <Row className= "text-white mb-2">
      <Col md={3}>#</Col>
      <Col md={3}>TITLE</Col>
      <Col md={3}>ARTIST</Col>
      <Col md={3}>ALBUM</Col>
    </Row>

   
     {playlistsongs.map((song: any, index:number) => {
      return (
        
        <SongInPlaylist key={song._id} song={song} index={index}/>
       
      );
     })}
 
   </div>
  );
}

export default PlaylistSongs;