import React from 'react'


function EmojiCard({ id, feeling, icon }) {


    

    return (
        // <div key={id} >
        //     <p>{feeling}</p>
        //     <img id='card-size' src={icon} alt="emoji" /> 
        // </div> 


        <div className="card border border-danger float-end" draggable="true" style={{width: '10rem'}} >
            
            <img src={icon} className="card-img-top" alt="emoji" />
            <div className="card-body">
                <p className="card-text">{feeling}</p>
            </div>
        </div>
    )
}

export default EmojiCard