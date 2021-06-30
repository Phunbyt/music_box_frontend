import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";

import GenreContextProvider from "./context/GenreContext";

ReactDOM.render(
  
  <Provider store={store}>
    <Router>
      <GenreContextProvider>
        <App />
      </GenreContextProvider>
    </Router>
  </Provider>,
  document.getElementById('root')
);


