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
        // <div key={drink.id} >
        //     <p>{drink.name}</p>
        //     <img id='card-size' className='img-thumbnail' src={drink.image} alt="drink" /> 
        // </div> 
    ))

    const renderEmojis= emojis.map((emoji) => (
        <EmojiCard key={emoji.id} id={emoji.id} feeling={emoji.feeling} icon={emoji.icon}/>
        // <div key={emoji.id} >
        //     <p>{emoji.feeling}</p>
        //     <img id='card-size' src={emoji.icon} alt="emoji" /> 
        // </div> 
    ))


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
                    <div className="col border border-dark">
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