import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ListeningHistory from './components/ListeningHistory/ListeningHistory'
import UserForm from './components/userProfile/userForm'
import './App.css';

const App =() => {
  return (
    <div className='App'>
      <Router>
          <Switch>
            <Route exact path='/user-profile' component={UserForm} />
            <Route exact path='/listening-history' component={ListeningHistory} />
            {/* <Route exact path='/' component={LandingPage} /> */}
          </Switch>
        </Router>
      </div>
  );
}

export default App;
