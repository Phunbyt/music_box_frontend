import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import BrowseGenres from './components/BrowseGenres/Browse/Browse';
import GenresMore from './components/BrowseGenres/GenresMore/GenresMore';
import PlaylistSongs from './components/BrowseGenres/GenresMore/PlaylistSongs/PlaylistSongs'
import GenreContextProvider from './context/GenreContext';
// import NavigationBar from './components/BrowseGenres/Navbar/Navbar';
import ArtistDetails from './components/BrowseGenres/GenresMore/ArtistDetails/ArtistDetails';
const BrowseGenresComp =() => {
  return (
   <GenreContextProvider>
    <div>
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
     </Switch>
    </div>
   </GenreContextProvider>
  );
}

export default BrowseGenresComp;
