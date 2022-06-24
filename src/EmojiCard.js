import React from 'react'


function EmojiCard({ id, feeling, icon }) {

    const dragStart = e => {
        e.dataTransfer.setData('emoji', e.target.id)
        console.log(e.target.id)

        setTimeout(() => {
            e.target.style.opacity = .5;
        }, 0)
    }

    

    return (
        // <div className="card border border-2 border-primary float-start" style={{width: '10rem'}} draggable="true" >
        //     <img src={icon} onDragStart={(e) => dragStart(e)} className="card-img-top" alt="emoji" />
        //     <div className="card-body">
        //         <p className="card-text">{feeling}</p>
        //     </div>
        // </div>
        
        <div> 
             <img id={id} src={icon} className="card-img-top" alt="emoji" draggable="true" onDragStart={(e) => dragStart(e)}/>
             <br /><br />
        </div>
    )
}

export default EmojiCard