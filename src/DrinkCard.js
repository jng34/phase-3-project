import React from 'react'


function DrinkCard({ id, name, image }) {

    const dragStart = e => {
        console.log(e.target.id)
        e.dataTransfer.setData('drink', e.target.id)

        setTimeout(() => {
            e.target.style.opacity = .5;
        }, 0)
    }


    return (
        // <div id={id} draggable='true' onDragStart={(e) => dragStart(e)} className="col card border border-2 border-danger float-end"  style={{width: '10rem'}}>
        //     <img src={image} className="card-img-top" alt="drink" />
        //     <div className="card-body">
        //         <p className="card-text">{name}</p>
        //     </div>
        // </div>

        <div> 
             <img id={id} src={image} className="card-img-top" alt="drink" draggable="true" onDragStart={(e) => dragStart(e)}/>
             <br /><br />
        </div>
    )
}

export default DrinkCard