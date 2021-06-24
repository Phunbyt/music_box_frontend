import './App.css';
import Homepage from './components/Homepage/Homepage';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path='/home' component={Homepage} />
        </Switch>
      </BrowserRouter>  
    </>
  );
}

export default App;
