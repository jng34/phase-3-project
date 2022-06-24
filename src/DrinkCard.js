import React from 'react'


function DrinkCard({ drinkId, name, image, drinkClick }) {

    // const dragStart = e => {
    //     console.log(e.target.id)
    //     e.dataTransfer.setData('drink', e.target.id)

    //     setTimeout(() => {
    //         e.target.style.opacity = .5;
    //     }, 0)
    // }


    return (
        <div className="col card float-end"  style={{width: '7rem'}}>
            <div onClick={() => drinkClick(drinkId)} className="card-body">
            <img src={image} id={drinkId} className="card-img-top" alt="drink"  />
                <p className="card-text text-wrap fs-6">{name}</p>
            </div>
        </div>

        // <div> 
        //      <img id={id} src={image} className="card-img-top" alt="drink" draggable="true" onDragStart={(e) => dragStart(e)}/>
        //      <br /><br />
        // </div>
    )
}

export default DrinkCard