import React from 'react';

function UserCard({ user_id, name, image, emoji, drink, handleDelete }) {

    return (
        <div key={user_id} id="flip-card" className="col">
            <div id="flip-card-inner" className='card h-100 border border-dark border-1'>
                <div id="flip-card-front">
                    <img src={image} alt="profile" className='card-img-top' />
                    <p><strong>{name}</strong></p>
                </div>
                <div id="flip-card-back">
                    <h5>{name}</h5>
                    <label>Emoji</label>&nbsp;
                    <img id='emoji' src={emoji.icon} alt='img' /><br /><br />
                    <label>Drink</label>&nbsp;&nbsp;
                    <img id='drink' src={drink.image} alt='img' />
                    <div className="card-footer" >
                        <button className="fw-semibold" onClick={() => alert('Smelly~~')}>Edit</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="font-monospace fw-semibold bg-danger" onClick={() => handleDelete(user_id)}>$ git out</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserCard;