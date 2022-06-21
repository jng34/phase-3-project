// import logo from './logo.svg';
import './App.css';
import './Students';
import { Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Header from './Header';
import Home from './Home';
import About from './About';
import Students from './Students'
import StudentCard from './StudentCard';


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
        <Route exact path="/students">
          <Students />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
