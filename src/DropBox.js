// import React, { useState } from 'react'
// import { useDrop } from 'react-dnd'
// import EmojiCard from './EmojiCard'
// import DrinkCard from './DrinkCard'

// function DropBox({emojis}) {
//     const drop = e => {
//         e.preventDefault();
//         const emoji_id = e.dataTransfer.getData('emoji_id');
//         const emoji = document.getElementById(emoji_id)
//         emoji.style.display = 'block';

//         e.target.appendChild(emoji);
//     }

//     const dragOver = e => {
//         e.preventDefault();
//     }

    
    
//         // const EMOJIS = [
//         //     { id: 1, icon: 'dog' },
//         //     { id: 2, icon: 'cat' },
//         //     { id: 3, icon: 'fish' },
//         //     { id: 4, icon: 'hamster' },
//         //     { id: 5, icon: 'pig' },
//         //     { id: 6, icon: 'turtle' },
//         //     { id: 7, icon: 'snake' },
//         //     { id: 8, icon: 'rabbit' }
//         // ]
    
//     // const [guess, setGuess] = useState([])
//     // const [{ isOver }, dropRef] = useDrop({
//     //     accept: 'emoji',
//     //     drop: (item) => setGuess((guess) => 
//     //         !guess.includes(item) ? [...guess, item] : guess),
//     //     collect: (monitor) => ({
//     //         isOver: monitor.isOver()
//     //     })
//     // })


//     return (
//         // <React.Fragment>
//         //     <div>
//         //         {EMOJIS.map(emoji => <EmojiCard draggable id={emoji.id} icon={emoji.icon} />)}
//         //     </div>
//         //     <div className='col' ref={dropRef}>
//         //         id=
//         //         {guess.map(emoji =>  <EmojiCard id={emoji.id} icon={emoji.icon} />)}
//         //         {isOver && <div>Drop Here!</div>}
//         //     </div>
//         // </React.Fragment>

//         <div classNm>
//             {emojis}
//         </div>
//     )
// }

// export default DropBox