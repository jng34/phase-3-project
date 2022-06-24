import React, { useState, useEffect } from 'react';
import DrinkCard from './DrinkCard';
import EmojiCard from './EmojiCard';


function Fun() {
    const [singleUser, setSingleUser] = useState({})
    const [emojis, setEmojis] = useState([])
    const [drinks, setDrinks] = useState([])
    //set guesses by player
    const [emojiGuess, setEmojiGuess] = useState(0)
    const [drinkGuess, setDrinkGuess] = useState(0)
    
    //generates random number from 1-23
    

    useEffect(() => {
        const id =  Math.floor(Math.random()*(23)+1);
        fetch(`http://localhost:9292/users/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
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

    
    const renderSingleUser = 
        <div className="mx-auto border border-dark border-2 card rounded" style={{width: "18rem"}}>
                <img src={singleUser.image} className="card-img-top" alt='student'/>
                <div className="card-body">
                    <h5 className="card-title">{singleUser.username}</h5>
                </div>
        </div>

    
    const renderDrinks = drinks.map((drink) => (
        <DrinkCard key={drink.id} id={drink.id} name={drink.name} image={drink.image}/>
    ))

    const renderEmojis= emojis.map((emoji) => (
        <EmojiCard key={emoji.id} id={emoji.id} feeling={emoji.feeling} icon={emoji.icon}/>
    ))

    const emojiAllowDrop = (e) => {
        e.preventDefault();
    }

    const emojiDragEnter = (e) => {
        e.target.className = "col border border-3 border-primary"
    }

    const emojiDragLeave = (e) => {
        e.target.className = "col border border-dark"
    }
 
    const dropEmoji = (e) => {
        e.preventDefault();
        console.log(e)
        
        const emoji_id = e.dataTransfer.getData("emoji");
        console.log(emoji_id)    
        setEmojiGuess(emoji_id)
      
        const emoji = document.getElementById(emoji_id);
        console.log(emoji)
        emoji.style.display = 'block';

        e.target.appendChild(emoji);
        e.target = "col border border-dark"

    }
    

    const drinkDragEnter = (e) => {
        e.target.className = "col border border-3 border-danger"
    }

    const drinkDragLeave = (e) => {
        e.target.className = "col border border-dark"
    }

    const drinkAllowDrop = (e) => {
        e.preventDefault();
    }

    const dropDrink = (e) => {
        e.preventDefault();
        
        const drink_id = e.dataTransfer.getData("drink");    
        setDrinkGuess(drink_id)
      
        const drink = document.getElementById(drink_id);
        drink.style.display = 'block';

        e.target.appendChild(drink);
        e.target = "col border border-dark"
    }
    

    console.log(singleUser)
    //condition to check for correct guess
    if (emojiGuess !== 0 && drinkGuess !== 0) {
        if (singleUser.emoji_id === emojiGuess && singleUser.drink_id === drinkGuess) {
            alert('correct!')
        } else {
            alert('wrong!')
            setEmojiGuess(0)
            setDrinkGuess(0)
        }  
    }



    return (
        <div>
            <h3>Guess this user's current feeling and drink of choice</h3>
            <br />
            <div>
                {renderSingleUser}
            </div>
            <br /><br />


            <div className="container">
                <div className="row">
                    <div className='col rounded'>
                        {renderEmojis}
                    </div>
                    <div className="col border border-dark" onDrop={(e)=>dropEmoji(e)} onDragEnter={(e)=>emojiDragEnter(e)} onDragOver={(e)=>emojiAllowDrop(e)} onDragLeave={(e) => emojiDragLeave(e)} > Drag Emoji Here
                    </div>
                    <div className="col border border-dark" onDrop={(e)=>dropDrink(e)} onDragEnter={(e)=>drinkDragEnter(e)} onDragOver={(e)=>drinkAllowDrop(e)} onDragLeave={(e) => drinkDragLeave(e)}> Drag Drink Here
                    </div>
                    <div className='col'>
                        {renderDrinks}
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default Fun;