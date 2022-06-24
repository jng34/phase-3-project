import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';
import Form from './Form';


function Home() {

    
    const [showForm, setShowForm] = useState(false);
    const [ users, setUsers ] = useState([]);
    const [ drinks, setDrinks ] = useState([]);
    const [ emojis, setEmojis ] = useState([]);
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


    function handleClick() {
        setShowForm((showForm) => !showForm);
    }

    function onHandleSubmit(newUser) {
        setUsers([...users, newUser])
        console.log(users)
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
    }
    

    const renderUsers = users.map((user) => (
        <UserCard key={user.id} user_id={user.id} name={user.username} image={user.image} emoji_icon={user.emoji.icon} drink_image={user.drink.image} handleDelete={handleDelete} handleEmojiClick={handleEmojiClick} handleDrinkClick={handleDrinkClick}/>
    ))

    return (

        <div className="App">
            <h4><em>"Where DRY code becomes wet..."</em></h4>
            <br />       
            <div className='container'>
                <div className='buttonContainer'>
                    <button onClick={handleClick}>{showForm?'Hide Add User':'Add User'}</button>
                </div>
                <br />
                {showForm ? <Form drinks={drinks} onHandleSubmit={onHandleSubmit}/> :null}
                <br />
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {renderUsers}
                </div>
                <br /><br />
            </div>
        </div>
    )
}

export default Home;