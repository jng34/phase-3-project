import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import UserCard from './UserCard';


function Main() {
    const [singleUser, setSingleUser] = useState({})
    const [users, setUsers] = useState([]);
    const [drinks, setDrinks] = useState([]);
    const [emojis, setEmojis] = useState([]);

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
        fetch('http://localhost:9292/users/1')
        .then(res => res.json())
        .then(data => setSingleUser(data));

        fetch('http://localhost:9292/users')
        .then(res => res.json())
        .then(data => setUsers(data));

        fetch('http://localhost:9292/drinks')
        .then(res => res.json())
        .then(data => setDrinks(data));

        fetch('http://localhost:9292/emojis')
        .then(res => res.json())
        .then(data => setEmojis(data));
    }, [])

    //Refactor renders later with Card.js component - replace UserCard with general Card
    const renderSingleUser =
        <div className="card bg-warning" style={{width: "18rem"}}>
                <img src='https://i.etsystatic.com/16421349/r/il/ef72eb/2990585977/il_794xN.2990585977_91q7.jpg' className="card-img-top" alt='student'/>
                <div className="card-body">
                    <h5 className="card-title">Name: Poop</h5>
                    <p className="card-text">~~Smelly code~~</p>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Feeling here</li>
                    <li className="list-group-item">Drink here</li>
                </ul>
                <div className="card-body">
                    <button>Delete</button>
                </div>
        </div>

    const renderUsers = users.map((user) => (
        <UserCard id={user.id} name={user.username} image={user.image}/>
    ))

    const renderDrinks = drinks.map((drink) => (
        <div key={drink.id}>
            <p>{drink.name}</p>
            <img id='card-size' className='img-thumbnail' src={drink.image} alt="drink" /> 
        </div> 
    ))

    const renderEmojis= emojis.map((emoji) => (
        <div key={emoji.id}>
            <p>{emoji.feeling}</p>
            <img id='card-size' src={emoji.icon} alt="emoji" /> 
        </div> 
    ))


    return (
        <div className='container'>
            {renderSingleUser}
            <div id='container'>
                {renderUsers}
            </div>
            <div id='container'>
                {renderDrinks}
            </div>
            <div id='container'>
                {renderEmojis}
            </div>
        </div>
    )
}

export default Main;