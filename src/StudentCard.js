import React from 'react';

function StudentCard({ id, name, profile_img, feeling }) {
    return (
       <div>
            <p>id:{id}</p>
            <p>{name}</p>
            <p>feeling:{feeling}</p>
            <img src={profile_img} alt='student'/>
       </div>
    )
}

export default StudentCard;