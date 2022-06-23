import React, { useState, useEffect } from 'react';


function Fun() {
    const [singleUser, setSingleUser] = useState({})
    //generates random number from 1-23
    const id =  Math.floor(Math.random()*(23)+1);

    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then(res => res.json())
        .then(data => setSingleUser(data));
    }, [])

    
    const renderSingleUser =
    <div className="text-center bg-secondary card" style={{width: "18rem"}}>
            <img src={singleUser.image} className="card-img-top" alt='student'/>
            <div className="card-body">
                <h5 className="card-title">{singleUser.username}</h5>
                <p className="card-text">~~Smelly code~~</p>
            </div>
    </div>

    
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


    // const renderSingleUser =
    // <div className="flip-card">
    //     <div className="flip-card-inner">
    //         <div className="flip-card-front">
    //             <img src={singleUser.image} alt="user" style={{width: '300px', height:'300px'}} />
    //         </div>
    //         <div className="flip-card-back">
    //             <h1>{singleUser.username}</h1>
    //             <p>Emoji</p>
    //             <p>Drink</p>
    //         </div>
    //     </div>
    // </div>

    return (
        <div>
            <div>
                {renderSingleUser}
            </div>
            
        </div>
    )
}

export default Fun;