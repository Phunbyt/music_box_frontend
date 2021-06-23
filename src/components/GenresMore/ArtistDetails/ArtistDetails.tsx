import React, {useEffect, useContext} from 'react';
import { GenreContext } from '../../../context/GenreContext';
import { useParams } from 'react-router';
import { Row,Col } from 'react-bootstrap';
import {TimeConverter} from '../../../utils/TimeConverter'
interface Songs{
  id: number,
  title: string,
  link: string,
  duration: number,
  preview:string
}
interface Albums {
 id: number;
 title: string;
 cover: string;
 cover_small: string,
 cover_medium: string;
 cover_big: string;
 cover_xl: string;
 md5_image: string;
 tracklist: string;
 type: string;
}
const ArtistDetails = () => {
  const {getArtistDetails, artistSongs, artistAlbums}:any= useContext(GenreContext)
  const {artistname}:any = useParams()
  useEffect(()=>{
    getArtistDetails(artistname)
   
  },[])
  return (
   <div className="container-fluid">
    <h1 className="text-white">{artistname}</h1>
    <h2 className="text-white">Songs</h2>
    <Row className="text-white">
     <Col>
      <h3>Title</h3>
     </Col>
    </Row>
    {artistSongs.map((song: Songs) => {
     return (
      <div key={song.id}>
       <Row className="text-white">
        <Col md={4}>
         <h5>{song.title}</h5>
        </Col>
        <Col>
         <p>{TimeConverter(song.duration)}</p>
        </Col>
       </Row>
      </div>
     );
    })}

    <h2 className="text-white mt-5">Albums</h2>
    <Row className="text-white">
     <Col>
      <h3>Title</h3>
     </Col>
    </Row>
    {artistAlbums.map((album: Albums) => {
     return (
      <div key={album.id}>
       <Row className="text-white">
        <Col md={4}>
         <h5>{album.title}</h5>
        </Col>
        <Col md={3}>
         <img src={album.cover_medium} width = "100%" alt="" />
        </Col>
       </Row>
      </div>
     );
    })}
   </div>
  );
}
 
export default ArtistDetails;