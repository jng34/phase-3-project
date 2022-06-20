import React from 'react';

function StudentCard({ students }) {
    const { id, name, profile_img, feeling } = students

    return (
       <div>
            <p>id: {id}</p>
            <p>{name}</p>
            <p>feeling: {feeling}</p>
            <img src={profile_img} />
       </div>
    )
}

export default StudentCard;