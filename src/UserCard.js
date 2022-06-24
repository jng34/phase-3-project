import React from 'react';

function UserCard({ user_id, name, image, emoji_icon, drink_image, handleDelete, handleEmojiClick, handleDrinkClick}) {

    return (
        <div key={user_id} id="flip-card" className="col">
            <div id="flip-card-inner" className='card h-100'>
                <div id="flip-card-front">
                    <img src={image} alt="profile" className='card-img-top' />
                    <p><strong>{name}</strong></p>
                </div>
                <div id="flip-card-back">
                    <h5>{name}</h5>
                    <img id='emoji' src={emoji_icon} alt='img' onClick={() => handleEmojiClick(user_id)}/><br /><br />
                    &nbsp;&nbsp;
                    <img id='drink' src={drink_image} alt='img' onClick={() => handleDrinkClick(user_id)}/>
                    <br/>
                    <label>Click icons to change</label>&nbsp;
                    <div className="card-footer" >
                        {/* <button className="fw-semibold">Change Emoji</button>
                        <button className="fw-semibold">Change Drink</button> */}
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="font-monospace fw-semibold bg-danger" onClick={() => handleDelete(user_id)}>$ git out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;