import  React, {useContext,useEffect} from 'react';
import { GenreContext } from '../../context/GenreContext';
import './GenresMore.css'
import ArtistsByGenre from './ArtistsByGenre/Artists';
import PlaylistByGenre from './PlaylistsByGenre/Playlist';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
export interface GenresMoreProps {
  
}

const GenresMore= ()=>{
  const {genreid}:any = useParams()
  const { getPlaylistRelatedGenres, playlists, getMusicRelatedGenres, artists }: any =
   useContext(GenreContext);
  
  useEffect(()=>{
    getMusicRelatedGenres(genreid)
    getPlaylistRelatedGenres(genreid)
  },[])

  return (
   <div className="container-fluid">
    <h3 className="text-white">Playlists</h3>
    <Row>
     {playlists ? (
      playlists.map((playlist: any) => {
       return <PlaylistByGenre key={playlist._id} playlist={playlist} />;
      })
     ) : (
      <p className="text-white">No results</p>
     )}
    </Row>
    <h3 className="text-white">Artists</h3>

    <Row>
     {artists ? (
      artists.map((artist: any) => {
       return <ArtistsByGenre key={artist.id} artist={artist} />;
      })
     ) : (
      <p className="text-white">No results</p>
     )}
    </Row>
   </div>
  );
}

export default GenresMore