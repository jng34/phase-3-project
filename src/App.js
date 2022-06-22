// import logo from './logo.svg';
import './App.css';
import './Users';
import { Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
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
      <DndProvider backend={HTML5Backend}>
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
      </DndProvider>
    </div>
  );
}

export default App;
