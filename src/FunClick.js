import React, { useState, useEffect } from 'react';
import DrinkCard from './DrinkCard';
import EmojiCard from './EmojiCard';


function FunClick() {
    const [singleUser, setSingleUser] = useState({})
    const [emojis, setEmojis] = useState([])
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        const id =  Math.floor(Math.random()*(23)+1);
        fetch(`http://localhost:9292/users/${id}`)
        .then(res => res.json())
        .then(data => {
            setSingleUser(data)
        });
    }, [])

    useEffect(() => {
        fetch('http://localhost:9292/emojis')
        .then(res => res.json())
        .then(data => setEmojis(data));
    }, [])

    useEffect(() => {
        fetch('http://localhost:9292/drinks')
        .then(res => res.json())
        .then(data => setDrinks(data));
    }, [])

    function refreshPage(){window.parent.location = window.parent.location.href; }

        const renderSingleUser = 
        <div className="mx-auto my-auto border border-dark border-2 card rounded" style={{width: "18rem", cursor: "pointer"}} onClick={()=>refreshPage()}>
                <img src={singleUser.image} className="card-img-top" alt='student'/>
                <div className="card-body">
                    <h5 className="card-title">{singleUser.username}</h5>
                   
                </div>
        </div>

    
    const renderDrinks = drinks.map((drink) => (
        <DrinkCard key={drink.id} drinkId={drink.id} name={drink.name} image={drink.image} ans={singleUser.drink_id}/>
    ))

    const renderEmojis= emojis.map((emoji) => (
        <EmojiCard key={emoji.id} emojiId={emoji.id} feeling={emoji.feeling} icon={emoji.icon} ans={singleUser.emoji_id}/>
    ))

    return (
        <div>
            <h3>Guess this user's current feeling and drink of choice</h3>
            <br />
            <br />
            <div className="container">
                <div className="row">
                    <div className='col rounded'>
                        {renderEmojis}
                    </div>
                    <div className="col"> 
                        {renderSingleUser}
                        <p className="card-title">{"(Click pic to refresh)"}</p>
                    </div>
                    <div className='col rounded'>
                        {renderDrinks}
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default FunClick