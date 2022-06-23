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
import DragNDrop from './DragNDrop';

function App() {
  const [users, setUsers] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [emojis, setEmojis] = useState([]);
  const [ emojiData, setEmojiData ] = useState({emoji_id: 1})
  const [ drinkData, setDrinkData ] = useState({drink_id: 1})
  

  useEffect(() => {
    fetch('http://localhost:9292/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[emojiData,drinkData])


  useEffect(() => {
    fetch('http://localhost:9292/emojis')
    .then(res => res.json())
    .then(data => setEmojis(data));
  },[])

  useEffect(() => {
    fetch('http://localhost:9292/drinks')
    .then(res => res.json())
    .then(data => setDrinks(data));
  },[])

  
  function onHandleSubmit(newUser) {
      setUsers([...users, newUser])
      // setUsers((users)=>({...users, newUser}))
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

  function handleEmojiClick(id) {
    const name = "emoji_id"
    const value = Math.floor(Math.random()*(8)+1)
    setEmojiData((emojiData)=>({...emojiData, [name]:value}))
    fetch(`http://localhost:9292/users/emoji/${id}`,{
    method: "PATCH",
    headers: {
      "Content-Type":"application/json"
    },
    body:JSON.stringify(emojiData)
    })
    .then(r=>r.json())
    .then(data=>console.log(data.emoji))
  }

  function handleDrinkClick(id) {
    const name = "drink_id"
    const value = Math.floor(Math.random()*(6)+1)
    setDrinkData((drinkData)=>({...drinkData, [name]:value}))
    fetch(`http://localhost:9292/users/drink/${id}`,{
      method: "PATCH",
      headers: {
        "Content-Type":"application/json"
      },
      body:JSON.stringify(drinkData)
    })
    .then(r=>r.json())
    .then(data=>console.log(data.drink))
  }
  


  return (
    <div className="App">
      <Header />
      <NavBar />
      <hr/>
      <DndProvider backend={HTML5Backend}>
        <Switch>
          <Route exact path="/">
            <Home users={users} emojis={emojis} drinks={drinks} onHandleSubmit={onHandleSubmit} handleDelete={handleDelete} emojiData={emojiData} handleEmojiClick={handleEmojiClick} handleDrinkClick={handleDrinkClick}/>
          </Route>
          <Route exact path="/fun">
            <Fun />
          </Route>
          <Route exact path="/dnd">
            <DragNDrop />
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
