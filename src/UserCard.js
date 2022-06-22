import React from 'react';
import { useDrag } from 'react-dnd';


function UserCard({ user_id, name, image, emoji, drink, handleDelete }) {
    //making card draggable
    const [{ isDragging }, dragRef] = useDrag({
        type: 'user',
        item: { user_id, name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })   


    //problem
    // let emoji ={}
    // let drink ={}
    // if(emojis.length != 0 && drinks.length != 0){
    //     emoji = emojis.find(({id}) => id === emoji_id )
    //     drink = drinks.find(({id}) => id === drink_id);
    // }

    // let emoji = emojis.find(({id}) => id === emoji_id )
    // let drink = drinks.find(({id}) => id === drink_id);
    
     

    return (
        // <div key={id} ref={dragRef}>
        //     {isDragging && '😱'}
        //     <p>{name}</p>
        //     <img id='user' src={image} alt="profile" />  
        //     <button onClick={() => handleDelete(id)}>Gotta' Study</button> 
        // </div>
        
        <div key={user_id} className="flip-card" ref={dragRef}>
            {isDragging && '😱'}
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={image} alt="profile" style={{width: '300px', height:'300px'}} />
                </div>
                <div className="flip-card-back">
                    <h1>{name}</h1>
                    <img id='emoji' src={emoji.icon} alt='img' /><br /><br />
                    <img id='drink' src={drink.image} alt='img' />
                </div>
            </div>
            <button onClick={() => handleDelete(user_id)}>Gotta' Study</button>
        </div>

    )
}

export default UserCard;