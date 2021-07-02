import React, {useEffect, useContext} from 'react';
import { GenreContext } from '../../../../context/GenreContext';
import { useParams } from 'react-router';
import { Row,Col } from 'react-bootstrap';
import './ArtistDetails.css'
import NavigationBar from '../../../Homepage/Navbar/Navbar'
interface Songs{
  id: number,
  title: string,
  link: string,
  duration: number,
  preview:string,
  image:string
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
  
  const gradients = [
   "linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)",
   "linear-gradient(to right, #00b4db, #0083b0)",
   "linear-gradient(to right, #fc4a1a, #f7b733)",
   "linear-gradient(to right, #7f00ff, #e100ff)",
   "linear-gradient(to right, #ffafbd, #ffc3a0)",
   "linear-gradient(to right, #fc00ff, #00dbde)",
   "linear-gradient(to right, #00c6ff, #0072ff)",
   "linear-gradient(to right, #7474bf, #348ac7)",
   "linear-gradient(to right, #4776e6, #8e54e9)",
   "linear-gradient(to right, #348f50, #56b4d3)",
  ];
  return (
  <>
  <NavigationBar/> 
   <div className="container-fluid">
    <h1 className="text-white font-bold">{artistname}</h1>
    <h2 className="text-white">Songs</h2>
    
     <Row className="text-white d-flex">
      {artistSongs.map((song: Songs, i:number) => {
       return (
        <Col key={song.id} xl={2} lg={3} md={4} sm={6}>
         <div className=" song-bg" style = {{background:gradients[Math.floor(Math.random()*i)]}}>
          <img src={song.image} alt="song poster" className="artistSong" />
         </div>
         <p className = "song-title">{song.title}</p>
        </Col>
       );
      })}
     </Row>


    <h2 className="text-white mt-5">Albums</h2>

    <Row className = "text-white">
    {artistAlbums.map((album: Albums,i:number) => {
     return (
      <Col key={album.id} xl={2} lg={3} md={4} sm={6}>
         <div className=" song-bg" style = {{background:gradients[Math.floor(Math.random()*i)]}}>
          <img src={album.cover} alt="song poster" className="artistSong" />
         </div>
         <p className = "song-title">{album.title}</p>
        </Col>
       );
    })}
    </Row>
   </div>

   </>
  );
}
 
export default ArtistDetails;