import React from 'react';

function UserCard({ id, name, image }) {
    return (
       <div>
            <p>id:{id}</p>
            <p>{name}</p>
            <img id='profile-pic' src={image} alt='student'/>
       </div>
    )
}

export default UserCard;