import React from 'react'


function EmojiCard({ emojiId, feeling, icon, emojiClick }) {

    // const dragStart = e => {
    //     e.dataTransfer.setData('emoji', e.target.id)
    //     console.log(e.target.id)

    //     setTimeout(() => {
    //         e.target.style.opacity = .5;
    //     }, 0)
    // }

    

    return (
        <div className="card float-start" style={{width: '6rem'}} >
            <div className="card-body" onClick={() => emojiClick(emojiId)}>
            <img src={icon} id={emojiId} className="card-img-top" alt="emoji"  />
                <p className="card-text text-wrap">{feeling}</p>
            </div>
        </div>
        
        //for Drag n Drop
        // <div> 
        //      <img id={id} src={icon} className="card-img-top" alt="emoji" draggable="true" onDragStart={(e) => dragStart(e)}/>
        //      <br /><br />
        // </div>

    )
}

export default EmojiCard