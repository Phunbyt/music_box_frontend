import React from 'react';
import './App.css';
// import Header from './components/Header/Header'
// import Footer from './components/Footer/Footer'
// import LandingPage from './screens/LandingPage/LandingPage'
import LibraryComponents from './components/LibraryComponents/LibraryComponents';
import "bootstrap/dist/css/bootstrap.min.css";


const App =() => {
  return (
    <div className="bodyView">
      <LibraryComponents />
    </div>
  );
}

export default App;
