import React, { useState, useEffect } from 'react';
import { DragDropContainer, DropTarget } from 'react-drag-drop-container';


function DragAndDrop() {
    const [singleUser, setSingleUser] = useState({})
    const [emojis, setEmojis] = useState([])
    const [drinks, setDrinks] = useState([])
    const [dragBg, setDragBg] = useState('')
    const [borderColor, setBorder] = useState('rounded')
    const [dropBg, setDropBg] = useState('')
    const [dropEmojis, setDropEmojis] = useState([])
    const [dropDrinks, setDropDrinks] = useState([])
    //set guesses by player
    const [emojiGuess, setEmojiGuess] = useState(0)
    const [drinkGuess, setDrinkGuess] = useState(0)
    
    //generates random number from 1-23
    

    useEffect(() => {
        const id =  Math.floor(Math.random()*(23)+1);
        fetch(`http://localhost:9292/users/${id}`)
        .then(res => res.json())
        .then(data => setSingleUser(data));
    }, [])

    useEffect(() => {
        fetch('http://localhost:9292/emojis')
        .then(res => res.json())
        .then(data => setEmojis(data));
    }, [])

    useEffect(() => {
        fetch('http://localhost:9292/drinks')
        .then(res => res.json())
        .then(data => setDrinks(data));
    }, [])

    
    const renderSingleUser = 
        <div className="mx-auto border border-dark border-2 card rounded" style={{width: "18rem"}}>
                <img src={singleUser.image} className="card-img-top" alt='student'/>
                <div className="card-body">
                    <h5 className="card-title">{singleUser.username}</h5>
                </div>
        </div>

    
    const renderDrinks = drinks.map((drink) => (
        <DragDropContainer
            targetKey="drink"
            dragData={drink}
            disappearDraggedElement = "true" //makes image space 
            // dragClone="true"
            dragElemOpacity="0.75"
            // draggable="false"
            // xOnly="true"
            // yOnly="true"
            onDragStart={() => setBorder('rounded border border-primary border-3')}
            onDrag={() => setBorder('rounded border border-danger border-3')}
            onDrop={(e) => onDropped(e)}
        >
            <img key={drink.name} className={borderColor} src={drink.image} alt="drink" style={{width: '200px'}} />
        </DragDropContainer>
    ))

    const renderEmojis = emojis.map((emoji) => (
        <DragDropContainer
            targetKey="emoji"
            dragData={emoji}
            disappearDraggedElement = "true" //makes image space 
            // dragClone="true"
            dragElemOpacity="0.75"
            // draggable="false"
            // xOnly="true"
            // yOnly="true"
            // zIndex = 'true'
            onDragStart={() => setDragBg('rounded border border-danger border-3')}
            onDrag={() => setDragBg('rounded border border-success border-3')}
            onDrop={(e) => onDropped(e)}  //check match
        >
            <img key={emoji.feeling} className={dragBg} src={emoji.icon} alt="emoji" style={{width: '200px'}} />
        </DragDropContainer>
    ))



    function dropped(e) {
        if (e.dragData.hasOwnProperty("feeling")) {
            const emoji_id = e.dragData.id
            fetch(`http://localhost:9292/emojis/${emoji_id}`)
            .then(res => res.json())
            .then(emojiData => setDropEmojis([
                ...dropEmojis, emojiData
            ]));
        } else {
            const drink_id = e.dragData.id
            fetch(`http://localhost:9292/drinks/${drink_id}`)
            .then(res => res.json())
            .then(drinkData => setDropDrinks([
                ...dropDrinks, drinkData
            ]));
        }
        
        e.containerElem.style.visibility = 'hidden'
    }

    function onDropped(e) {
        if (e.dragData.hasOwnProperty("feeling")) {
            setEmojiGuess(e.dragData.id)
        } else {
            setDrinkGuess(e.dragData.id)
        }
    }
    

    const renderDropEmojis = dropEmojis.map((emoji) => (
        <img key={emoji.feeling} src={emoji.icon} alt="emoji" style={{width: '200px'}} />
    ))

    const renderDropDrinks = dropDrinks.map((drink) => (
        <img key={drink.name} src={drink.image} alt="drink" style={{width: '200px'}} />
    ))

    
    return (
        <div>
            <h3>Guess this user's current feeling and drink of choice</h3>
            <br />
            <div>
                {renderSingleUser}
            </div>
            <br /><br />

            <div className="container">
                <div className="row">
                    <div className='col rounded'>
                        {renderEmojis}
                    </div>
                <div className="col border border-dark" style={emojiGuess === singleUser.emoji_id ? {backgroundColor: "green"} : {backgroundColor: "white"}}>
                        <p>Drag Emoji Here</p>
                        <DropTarget
                            targetKey="emoji"
                            onHit={(e) => dropped(e)}
                            onDragEnter={()=>setDropBg('lightblue')}
                            onDragLeave={()=>setDropBg('red')} 
                        >
                            <div style={{width: '260x', height: '1600px'}}>
                                {renderDropEmojis}
                            </div>
                        </DropTarget>
                    </div>
                    <div className="col border border-dark" style={drinkGuess === singleUser.drink_id ? {backgroundColor: "green"}: {backgroundColor: "white"}}> Drag Drink Here
                        <DropTarget
                            targetKey="drink"
                            onHit={(e) => dropped(e)}
                            onDragEnter={()=>setDropBg('lightblue')}
                            onDragLeave={()=>setDropBg('red')} 
                        >
                            <div style={{width: '260x', height: '1600px'}}>
                                {renderDropDrinks}
                            </div>
                        </DropTarget>
                    </div>
                    <div className='col'>
                        {renderDrinks}
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default DragAndDrop;
