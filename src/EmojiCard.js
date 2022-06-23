import React from 'react'
import { useDrag } from 'react-dnd'
import DragNDrop from './DragNDrop'

function EmojiCard({ id, feeling, icon }) {

    // const dragStart = e => {
    //     const target = e.target;

    //     e.dataTransfer.setData('card.id', target.id);

    //     setTimeout(() => {
    //         target.style.display = "none";
    //     }, 0)
    // }

    // const dragOver = e => {
    //     e.stopPropagationx();
    // }

    // const [{ isDragging }, dragRef] = useDrag({
    //     type: 'emoji',
    //     item: { id, icon },
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging()
    //     })
    // })
    

    return (
        // <div key={id} >
        //     <p>{feeling}</p>
        //     <img id='card-size' src={icon} alt="emoji" /> 
        // </div> 

        // ref={dragRef}

        <div className="card border border-danger float-end" style={{width: '10rem'}} >
            {/* {isDragging && '😱'} */}
            <img src={icon} className="card-img-top" alt="emoji" />
            <div className="card-body">
                <p className="card-text">{feeling}</p>
            </div>
        </div>
    )
}

export default EmojiCard