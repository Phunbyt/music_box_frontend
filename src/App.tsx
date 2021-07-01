import './App.css';
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import LandingPage from './screens/LandingPage/LandingPage'
import LibraryComponents from './components/LibraryComponents/LibraryComponents';
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from './components/Homepage/Homepage';
import ArtistsResults from './components/Homepage/ArtistsResults/ArtistsResults';
import AlbumResults from './components/Homepage/AlbumsResults/AlbumResults'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchNoResultComp from './components/NoResult/SearchNoResultComp';
import LibraryAlbums from './screens/Library/LibraryAlbums/LibraryAlbums';
import LibraryArtists from './screens/Library/LibraryArtists/LibraryArtists';
import LibraryPlaylists from './screens/Library/LibraryPlaylists/LibraryPlaylists';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/library' component={LibraryComponents} />
          <Route exact path='/home' component={Homepage} />
          <Route exact path='/artistdetails' component={ArtistsResults} />
          <Route exact path='/albumdetails' component={AlbumResults} />
          <Route path="/playlists" exact component={LibraryPlaylists} />
          <Route path="/albums" exact component={LibraryAlbums} />
          <Route path="/artists" exact component={LibraryArtists} />
          <Route path="/noResult" exact component={SearchNoResultComp} />
        </Switch>
      </BrowserRouter>  
    </>
  );
}

export default App;
