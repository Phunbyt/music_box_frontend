import React, {useContext,useEffect} from 'react';
import {useParams} from 'react-router'
import { GenreContext } from '../../../../context/GenreContext';
import SongInPlaylist from "./SongInPlaylist";
import { Row,Col } from 'react-bootstrap';
import './PlaylistSongs.css'
import NavigationBar from '../../../Navbar/Navbar';
const PlaylistSongs = () => {
  const {playlistid}:any = useParams()
  const {getOnePlaylist,playlistsongs}:any= useContext(GenreContext)

  useEffect(()=>{
    getOnePlaylist(playlistid)
  },[])

  return (
    <>
    <NavigationBar/>
   <div className="container-fluid mt-4" id ="playlistsongs">
    <Row className= "text-white mb-2">
      <Col md={3} lg={3} xs ={3}>#</Col>
      <Col md={3} lg={3} xs = {3}>TITLE</Col>
      <Col md={3} lg={3} xs = {3}>ARTIST</Col>
      <Col md={3} lg={3} xs = {3}>ALBUM</Col>
    </Row>

   
     {playlistsongs.map((song: any, index:number) => {
      return (
        <Row>
          <SongInPlaylist key={song._id} song={song} index={index}/>
        </Row>
      );
     })}
 
   </div>
   </>
  );
}

export default PlaylistSongs;