// import logo from './logo.svg';
import {useState, useEffect} from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './NavBar';
import Header from './Header';
import Home from './Home';
import About from './About';
import Fun from './Fun'


function App() {
  const [users, setUsers] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [emojis, setEmojis] = useState([]);
  

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then(res => res.json())
    .then(data => setUsers(data));

    fetch('http://localhost:9292/emojis')
    .then(res => res.json())
    .then(data => setEmojis(data));

    fetch('http://localhost:9292/drinks')
    .then(res => res.json())
    .then(data => setDrinks(data));
  },[])

  
  function onHandleSubmit(newUser) {
      setUsers([...users, newUser])
  }

  function handleDelete(id) {
      fetch(`http://localhost:9292/users/${id}`, {
          method: 'DELETE'
      })
      deleteUser(id)
  }

  function deleteUser(id){
      const updatedUsers = users.filter((user) => user.id !== id)
      setUsers(updatedUsers)
  }


  return (
    <div className="App">
      <Header />
      <NavBar />
      <hr/>
      <DndProvider backend={HTML5Backend}>
        <Switch>
          <Route exact path="/">
            <Home users={users} emojis={emojis} drinks={drinks} onHandleSubmit={onHandleSubmit} handleDelete={handleDelete} />
          </Route>
          <Route exact path="/fun">
            <Fun emojis={emojis} drinks={drinks} />
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
