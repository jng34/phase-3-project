import React from 'react'


function DrinkCard({ id, name, image }) {

    const dragStart = e => {
        e.dataTransfer.setData('emoji.id', e.target.id)

        setTimeout(() => {
            e.target.style.display = "none";
        }, 0)
    }


    return (
//     <div key={id} >
//         <p>{name}</p>
//         <img id='card-size' className='img-thumbnail' src={image} alt="drink" /> 
//     </div> 

    <div className="card border border-danger float-start"  style={{width: '10rem'}}>
        <img src={image} id={id} draggable="true" onDragStart={(e)=>dragStart(e)} className="rounded card-img-top" alt="drink" />
        <div className="card-body">
            <p className="card-text">{name}</p>
        </div>
    </div>
    )
}

export default DrinkCard