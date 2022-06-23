import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import UserCard from './UserCard';
import Form from './Form';


function Main() {
    const [users, setUsers] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [emojis, setEmojis] = useState([]);
    const [showForm, setShowForm] = useState(false);

    //create drop target
    // const [{ isOver }, dropRef] = useDrop({
    //     accept: 'user',
    //     drop: (item) => setBasket((basket) => 
    //                         !basket.includes(item) ? [...basket, item] : basket),
    //     collect: (monitor) => ({
    //         isOver: monitor.isOver()
    //     })
    // })

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

    function handleClick() {
        setShowForm((showForm) => !showForm);
    }

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

    const renderUsers = users.map((user) => (
        <UserCard key={user.id} user_id={user.id} name={user.username} image={user.image} emoji={user.emoji} drink={user.drink} handleDelete={handleDelete}/>
    ))


    // const renderDrinks = drinks.map((drink) => (
    //     <div key={drink.id}>
    //         <p>{drink.name}</p>
    //         <img id='card-size' className='img-thumbnail' src={drink.image} alt="drink" /> 
    //     </div> 
    // ))

    // const renderEmojis= emojis.map((emoji) => (
    //     <div key={emoji.id}>
    //         <p>{emoji.feeling}</p>
    //         <img id='card-size' src={emoji.icon} alt="emoji" /> 
    //     </div> 
    // ))


    return (
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
            {/* <div id='container'>
                {renderDrinks}
            </div>
            <div id='container'>
                {renderEmojis}
            </div> */}
            <br /><br />
        </div>
    )
}

export default Main;