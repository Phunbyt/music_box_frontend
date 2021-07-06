import "./App.css";
import LibraryComponents from "./components/LibraryComponents/LibraryComponents";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/Homepage/Homepage";
import ArtistsResults from "./components/Homepage/ArtistsResults/ArtistsResults";
import AlbumResults from "./components/Homepage/AlbumsResults/AlbumResults";
import BrowseGenres from "./components/BrowseGenres/Browse/Browse";
import GenresMore from "./components/BrowseGenres/GenresMore/GenresMore";
import PlaylistSongs from "./components/BrowseGenres/GenresMore/PlaylistSongs/PlaylistSongs";
import GenreContextProvider from "./context/GenreContext";
import NavigationBar from "./components/Homepage/Navbar/Navbar";
import ArtistDetails from "./components/BrowseGenres/GenresMore/ArtistDetails/ArtistDetails";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PlayerState from "./Contexts/playerState";
import SearchNoResultComp from "./components/NoResult/SearchNoResultComp";
import LibraryAlbums from "./screens/Library/LibraryAlbums/LibraryAlbums";
import LibraryArtists from "./screens/Library/LibraryArtists/LibraryArtists";
import LibraryPlaylists from "./screens/Library/LibraryPlaylists/LibraryPlaylists";
import PublicPlaylist from './PublicPlaylist'
import Album from './Album'
import Playlist from './Playlist'

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
              <Route exact path='/playlist/:playlistid' component={Playlist} />
              <Route exact path='/publicplaylist/:publicplaylistid' component={PublicPlaylist} />
              <Route exact path='/album/:albumid' component={Album} />
              <Route exact path="/library" component={LibraryComponents} />
              <Route exact path="/home" component={Homepage} />
              <Route exact path="/artistdetails" component={ArtistsResults} />
              <Route exact path="/albumdetails" component={AlbumResults} />
              <Route path="/playlists" exact component={LibraryPlaylists} />
              <Route path="/albums" exact component={LibraryAlbums} />
              <Route path="/artists" exact component={LibraryArtists} />
              <Route path="/noResult" exact component={SearchNoResultComp} />
            </Switch>
          </GenreContextProvider>
        </BrowserRouter>
      </PlayerState>
    </>
  );
};

export default App;
