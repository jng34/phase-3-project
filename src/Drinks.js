import React, { useState, useEffect } from 'react'

function Drinks() {
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9292/drinks')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setDrinks(data);
        })
    }, [])

    const renderDrinks = drinks.map((drink) => (
        <div key={drink.id}>
            <p>{drink.name}</p>
            <img id='profile-pic' src={drink.image} alt="drink" /> 
        </div> 
    ))


    return (
        <div>
            {renderDrinks}
        </div>
    )
}

export default Drinks;