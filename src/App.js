import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Header from './Header';
import Home from './Home';
import About from './About';
import Fun from './Fun'

function App() {
  
  return (
    <div className="App">
      <Header />
      <NavBar />
      <hr/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/fun">
            <Fun />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
