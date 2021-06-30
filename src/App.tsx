import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ListeningHistory from './components/ListeningHistory/ListeningHistory';
import UserForm from './components/userProfile/userForm';
import './App.css';
import Homepage from './screens/Homepage';
import ArtistsResults from './screens/ArtistsResults/ArtistsResults';
import AlbumResults from './screens/AlbumsResults/AlbumResults';
import BrowserGenresComp from './BrowseGenresComp';

import classes from './App.module.css';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import Modal from './components/Modal/Modal';
import RegModal from './components/RegistrationModal/RegModal';
import SocialLogin from './screens/SocialAuth/SocialAuth';
import NavigationBar from './components/Navbar/Navbar';

const App = () => {
  return (
    <div className='App'>
      <main>
        <BrowserGenresComp />
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/home' component={Homepage} />
          <Route exact path='/artistdetails' component={ArtistsResults} />
          <Route exact path='/albumdetails' component={AlbumResults} />
          <Route
            path='/music/socialLogin/:token/:data'
            component={SocialLogin}
          />
          <Route path='/login' component={Modal} />
          <Route path='/register' component={RegModal} />
          <Route exact path='/user-profile' component={UserForm} />
          <Route exact path='/listening-history' component={ListeningHistory} />
        </Switch>
      </main>
    </div>
  );
};

export default App;
