import React from 'react'
import { useDrag } from 'react-dnd'

function DrinkCard({ id, name, image }) {
    // const [{ isDragging }, dragRef] = useDrag({
    //     type: 'drink',
    //     item: { id, image },
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging()
    //     })
    // })

    return (
//     <div key={id} >
//         <p>{name}</p>
//         <img id='card-size' className='img-thumbnail' src={image} alt="drink" /> 
//     </div> 

    <div className="card border border-danger float-start" style={{width: '10rem'}}>
        {/* {isDragging && '😱'} */}
        <img src={image} className="rounded card-img-top" alt="drink" />
        <div className="card-body">
            <p className="card-text">{name}</p>
        </div>
    </div>
    )
}

export default DrinkCard