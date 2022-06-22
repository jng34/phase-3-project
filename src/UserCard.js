import React from 'react';
import { useDrag } from 'react-dnd';

function UserCard({ id, name, image }) {
    //making card draggable
    const [{ isDragging }, dragRef] = useDrag({
        type: 'user',
        item: { id, name },
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    })   

    return (
        <div key={id} ref={dragRef}>
            {isDragging && '😱'}
            <p>{name}</p>
            <img id='user' src={image} alt="profile" /> 
        </div> 
    )
}

export default UserCard;