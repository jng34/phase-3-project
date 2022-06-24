import React, {useState} from 'react'


function EmojiCard({ emojiId, feeling, icon, ans }) {

    const [ color, setColor ] = useState("")
    
    function click(){
        if (ans===emojiId){
            setColor("green")
        }else{
            setColor("red")
        }

    }

    return (
        <div className="card float-start" style={{width: '6rem', cursor: "pointer"}} >
            <div className="card-body" onClick={() => click(emojiId)} style={{backgroundColor: color}}>
            <img src={icon} id={emojiId} className="card-img-top" alt="emoji"/>
                <p className="card-text text-wrap">{feeling}</p>
            </div>
        </div>
    )
}

export default EmojiCard