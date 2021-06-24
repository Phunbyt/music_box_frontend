import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import classes from './App.module.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import LandingPage from './screens/LandingPage/LandingPage';
import LoginScreen from './screens/LoginScreen/LoginScreen';
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
          <Route path='/' component={LandingPage} exact />
          {/* <Route path='/home' component={HomePage} /> */}
          <Route path='/music/socialLogin/:token/:data' component={SocialLogin} />
          <Route path='/login' component={Modal} />
          <Route path='/register' component={RegModal} />
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
