import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

 
// const ProtectedRoutes = ({children, ...rest} : any) => {
//     return ( 
//         <Route {...rest} 
//         render={({location}) => localStorage.getItem('Token') ?
//          (children) : 
//          <Redirect to={{pathname: '/login', state: {from: location}}}/>
//         }
//         />
//      );
// }
 
// export default ProtectedRoutes;


