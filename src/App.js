// import logo from './logo.svg';
import './App.css';
import './Users';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Header from './Header';
import Home from './Home';
import About from './About';
import Users from './Users'


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
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
