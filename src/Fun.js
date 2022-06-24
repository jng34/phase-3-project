import React, { useState, useEffect } from 'react';
import { useDrop } from 'react-dnd';
import DrinkCard from './DrinkCard';
import EmojiCard from './EmojiCard';
import DropBox from './DropBox';


function Fun({ emojis, drinks }) {
    const [singleUser, setSingleUser] = useState({})
    //generates random number from 1-23
    const id =  Math.floor(Math.random()*(23)+1);

    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then(res => res.json())
        .then(data => setSingleUser(data));
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

    const allowDrop = (e) => {
        e.preventDefault();
    }

    const dragEnter = (e) => {
        console.log(e)
    }

    const drop = (e) => {
        // e.stopPropagation();
        e.preventDefault();
        const emoji_id = e.dataTransfer.getData("emoji.id");

        const emoji = document.getElementById(emoji_id);
        emoji.style.display = 'block';

        e.target.appendChild(emoji);
    }


    return (
        <div>
            <h3>Guess this user's current feeling and drink of choice</h3>
            <br />
            <div>
                {renderSingleUser}
            </div>
            <br /><br />


            {/* <div className='rounded float-start' style={{padding: '0 0 0 100px'}}>
                {renderDrinks}
            </div>
            <div className="mx-auto">
                Div container for drop box
            </div>
            <div className='rounded float-end' style={{padding: '0 100px 0 0'}}>
                {renderEmojis}
            </div> */}


            <div className="container">
                <div className="row">
                    <div className='col rounded'>
                        {renderDrinks}
                    </div>
                    <div className="col border border-dark" onDrop={(e)=>drop(e)} onDragEnter={(e)=>dragEnter(e)} onDragOver={(e)=>allowDrop(e)} >
                        {/* <DropBox emojis={emojis} drinks={drinks}/> */}
                    </div>
                    <div className='col rounded'>
                        {renderEmojis}
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default Fun;