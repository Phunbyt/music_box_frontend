import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import LibraryPlaylists from '../../screens/Library/LibraryPlaylists/LibraryPlaylists';
import LibraryAlbums from '../../screens/Library/LibraryAlbums/LibraryAlbums';
import LibraryArtists from '../../screens/Library/LibraryArtists/LibraryArtists';
import LibraryNavBar from '../../screens/Library/LibraryNavBar/LibraryNavBar';



export default function LibraryComponents() {

  return (
    <>
      <Router>
        {/* <Switch> */}
        <LibraryNavBar />
        <Route path="/playlists" exact component={LibraryPlaylists} />
        <Route path="/albums" exact component={LibraryAlbums} />
        <Route path="/artists" exact component={LibraryArtists} />

        {/* </Switch> */}
      </Router>
    </>
  );
}


