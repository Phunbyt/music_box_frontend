import './App.css';
import Homepage from './screens/Homepage';
import ArtistsResults from './screens/ArtistsResults/ArtistsResults';
import AlbumResults from './screens/AlbumsResults/AlbumResults'
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';

import classes from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import Modal from './components/Modal/Modal';
import RegModal from './components/RegistrationModal/RegModal'
import SocialLogin from './screens/SocialAuth/SocialAuth'
import NavigationBar from './components/Navbar/Navbar';

const App = () => {
  return (
    <Router>
      <Switch>
      <div className={classes.App}>
        {/* <NavigationBar/> */}
        <main>
          <Route exact path='/' component={LandingPage} />
          <Route  path='/home' component={Homepage} />
          <Route exact path='/artistdetails' component={ArtistsResults} />
          <Route exact path='/albumdetails' component={AlbumResults} />
          <Route path='/music/socialLogin/:token/:data' component={SocialLogin} />
          <Route path='/login' component={Modal} />
          <Route path='/register' component={RegModal} />
        </main>
        <Footer />
      </div>
      </Switch>
    </Router>
  );
};

export default App;
