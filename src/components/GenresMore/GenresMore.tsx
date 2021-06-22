import  React, {useContext,useEffect, useState, useRef} from 'react';
import { GenreContext } from '../../context/GenreContext';
import './GenresMore.css'
import ArtistsByGenre from './ArtistsByGenre/Artists';
import PlaylistByGenre from './PlaylistsByGenre/Playlist';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
export interface GenresMoreProps {
  
}

const GenresMore= ({name}:any)=>{
  const {genreid}:any = useParams()
  const { getPlaylistRelatedGenres, getOneGenre, playlists, getArtistRelatedGenres, artists }: any =
   useContext(GenreContext);
  const [lessartists, setLessArtists] = useState(artists.slice(0,6))
  const [lessplaylists, setLessPlaylists] = useState(playlists.slice(0,6));
  const [genreName, setGenreName] = useState('')

  useEffect (()=>{

    async function getGenreName(id:number){
        const res = await getOneGenre(id);
        setGenreName(res)
    }

    getGenreName(genreid)
    
    getArtistRelatedGenres(genreid)
    getPlaylistRelatedGenres(genreid)
  },[])
  
  const viewAll = () =>{
    setLessArtists(artists)
    const viewall = document.querySelector('.viewall') as Element
    viewall.classList.add('d-none')
    const viewless = document.querySelector('.viewless') as Element
    viewless.classList.remove('d-none')
  } 

  const viewLess = ()=>{
    setLessArtists(artists.slice(0,6))
    const viewall = document.querySelector(".viewall") as Element;
    viewall.classList.remove("d-none");
    const viewless = document.querySelector(".viewless") as Element;
    viewless.classList.add("d-none");
  }


  const viewAllPlaylists = () => {
   setLessPlaylists(playlists);
   const viewall = document.querySelector(".viewallplaylists") as Element;
   viewall.classList.add("d-none");
   const viewless = document.querySelector(".viewlessplaylists") as Element;
   viewless.classList.remove("d-none");
  };

  const viewLessPlaylists= () => {
   setLessPlaylists(playlists.slice(0, 6));
   const viewall = document.querySelector(".viewallplaylists") as Element;
   viewall.classList.remove("d-none");
   const viewless = document.querySelector(".viewlessplaylists") as Element;
   viewless.classList.add("d-none");
  };

  const showTab1= ()=>{
    const showtab = document.getElementById('underline-1')
    const artist = document.getElementById("artist") as Element;
    const playlist = document.getElementById("playlist") as Element;
    showtab?.classList.remove('d-none')
    artist.classList.remove("d-none");
    playlist.classList.remove("d-none");
    artist.classList.add('d-flex')
    playlist.classList.add('d-flex')
  }

  const showTab2 = ()=>{
    const showtab = document.getElementById('underline-2')
    const artist = document.getElementById('artist') as Element
    const playlist = document.getElementById("playlist") as Element;
    showtab?.classList.remove('d-none')
    artist.classList.remove('d-flex')
    artist.classList.add("d-none");
    playlist.classList.add('d-flex')
    setLessArtists([]);
  }

  const showTab3 = () => {
   const showtab = document.getElementById("underline-3");
   const artist = document.getElementById("artist") as Element;
   const playlist = document.getElementById("playlist") as Element;
   showtab?.classList.remove("d-none");
   playlist.classList.remove("d-flex");
   playlist.classList.add("d-none");
   artist.classList.add("d-flex");
   setLessPlaylists([])
  };

  return (
   <div className="container-fluid">
    <div className="d-flex row">
     <h1 className="ml-3 text-white" id="genre-name">
      {genreName.toUpperCase()}
     </h1>
     {/* <h1 className="text-white col-lg-1 col-md-2">{genre[0].name}</h1> */}
     <div className="d-flex tab-list col-lg-4 col-md-6">
      <div className="justify-content-center">
       <button className="tab-link " onClick={() => showTab1()}>
        {" "}
        OVERVIEW
       </button>
       <div className="underline d-none" id="underline-1"></div>
      </div>
      <div className="justify-content-center">
       <button className="tab-link " onClick={showTab2}>
        {" "}
        PLAYLISTS
       </button>
       <div className="underline d-none" id="underline-2"></div>
      </div>
      <div className="justify-content-center">
       <button className="tab-link" onClick={showTab3}>
        {" "}
        ARTISTS
       </button>
       <div className="underline d-none" id="underline-3"></div>
      </div>
     </div>
    </div>
    <div id="playlist" className="d-flex">
     <h3 className="text-white">Playlists</h3>
     <button className="ml-auto viewallplaylists" onClick={viewAllPlaylists}>
      VIEW ALL
     </button>
     <button
      className="ml-auto viewlessplaylists d-none"
      onClick={viewLessPlaylists}
     >
      VIEW LESS
     </button>
    </div>

    <Row id="playlist" className="d-flex">
     {lessplaylists ? (
      lessplaylists.map((playlist: any) => {
       return <PlaylistByGenre key={playlist._id} playlist={playlist} />;
      })
     ) : (
      <p className="text-white">No results</p>
     )}
    </Row>

    <div id="artist" className="d-flex">
     <h3 className="text-white">Artists</h3>
     <button className="ml-auto viewall" onClick={viewAll}>
      VIEW ALL
     </button>
     <button className="ml-auto viewless d-none" onClick={viewLess}>
      VIEW LESS
     </button>
    </div>

    <Row id="artist" className="d-flex">
     {lessartists ? (
      lessartists.map((artist: any) => {
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