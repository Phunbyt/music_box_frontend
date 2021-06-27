import './App.css';
import Homepage from './components/Homepage/Homepage';
import ArtistsResults from './components/Homepage/ArtistsResults/ArtistsResults';
import AlbumResults from './components/Homepage/AlbumsResults/AlbumResults'
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/home' component={Homepage} />
          <Route exact path='/artistdetails' component={ArtistsResults} />
          <Route exact path='/albumdetails' component={AlbumResults} />
        </Switch>
      </BrowserRouter>  
    </>
  );
}

export default App;
