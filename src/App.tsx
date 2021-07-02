import React from 'react';
import BrowserGenresComp from './BrowseGenresComp'

import './App.css';
import Homepage from './components/Homepage/Homepage';
import ArtistsResults from './components/Homepage/ArtistsResults/ArtistsResults';
import AlbumResults from './components/Homepage/AlbumsResults/AlbumResults'
import BrowseGenres from "./components/BrowseGenres/Browse/Browse";
import GenresMore from "./components/BrowseGenres/GenresMore/GenresMore";
import PlaylistSongs from "./components/BrowseGenres/GenresMore/PlaylistSongs/PlaylistSongs";
import GenreContextProvider from "./context/GenreContext";
import NavigationBar from "./components/BrowseGenres/Navbar/Navbar";
import ArtistDetails from "./components/BrowseGenres/GenresMore/ArtistDetails/ArtistDetails";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PlayerState from './Contexts/playerState';


const App = () => {
  return (
   <>
    <PlayerState>
     <BrowserRouter>
      <GenreContextProvider>
     
        <NavigationBar />

        <Switch>
         <Route exact path="/genres" component={BrowseGenres} />
         <Route exact path="/genres/:genreid">
          <GenresMore />
         </Route>
         <Route exact path="/genres/playlist/:playlistid">
          <PlaylistSongs />
         </Route>
         <Route exact path="/artists/:artistname">
          <ArtistDetails />
         </Route>
       

        <Route exact path="/home" component={Homepage} />
        <Route exact path="/artistdetails" component={ArtistsResults} />
        <Route exact path="/albumdetails" component={AlbumResults} />
       </Switch>
      </GenreContextProvider>
     </BrowserRouter>
    </PlayerState>
   </>
  );
}

export default App