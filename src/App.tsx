import React from 'react';
import BrowserGenresComp from './BrowseGenresComp'

import { BrowserRouter as Router, Route } from 'react-router-dom';

import classes from './App.module.css';
import Header from './components/Header/Header';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginScreen from './screens/Mobile/LoginScreen/LoginScreen';
import LandingPageMobile from './screens/Mobile/LandingPage/LandingPage';
//import HomePage from './screens/Homapage/HomePage'
import Modal from './components/Modal/Modal';
import RegModal from './components/RegistrationModal/RegModal'
import SocialLogin from './screens/SocialAuth/SocialAuth'

const App = () => {
  return (
   <Router>
    <div className={classes.App}>
     <Header />
     <main>
      <BrowserGenresComp />
      <Route exact path="/" component={LandingPage} />
      
      <Route path="/music/socialLogin/:token/:data" component={SocialLogin} />
      <Route path="/login" component={Modal} />
      <Route path="/register" component={RegModal} />
     </main>
     
    </div>
   </Router>
  );
};

export default App