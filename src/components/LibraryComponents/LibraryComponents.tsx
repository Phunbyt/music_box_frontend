import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LibraryPlaylists from '../../screens/Library/LibraryPlaylists/LibraryPlaylists';
import LibraryAlbums from '../../screens/Library/LibraryAlbums/LibraryAlbums';
import LibraryArtists from '../../screens/Library/LibraryArtists/LibraryArtists';
import SearchNoResultComp from "../NoResult/SearchNoResultComp";
import NavigationBar from '../Homepage/Navbar/Navbar'; 


export default function LibraryComponents() {

  return (
    <>
      <Router>
        {/* <Switch> */}
        <NavigationBar />
        <Route path="/playlists" exact component={LibraryPlaylists} />
        <Route path="/albums" exact component={LibraryAlbums} />
        <Route path="/artists" exact component={LibraryArtists} />
        <Route path="/noResult" exact component={SearchNoResultComp} />
        {/* </Switch> */}
      </Router>
    </>
  );
}


