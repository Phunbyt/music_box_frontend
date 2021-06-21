import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import BrowseGenres from './components/Browse/Browse';
import GenresMore from './components/GenresMore/GenresMore';
import PlaylistSongs from './components/GenresMore/PlaylistSongs/PlaylistSongs'
import GenreContextProvider from './context/GenreContext';


const App =() => {
  return (
   <GenreContextProvider>
    <div>
     <Switch>
      <Route exact path="/genres" component={BrowseGenres} />
      <Route exact path ="/genres/:genreid">
        <GenresMore />
      </Route>
      <Route exact path ="/genres/playlist/:playlistid">
        <PlaylistSongs/>
      </Route>
     </Switch>
    </div>
   </GenreContextProvider>
  );
}

export default App;
