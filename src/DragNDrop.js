// import React from 'react';
// import { useDrag, useDrop } from 'react-dnd';

// function DragNDrop() {

//     // const groupAndBarPics = {
//     //     groupPic: 'https://i.ibb.co/yPDjjr7/cohort-group-pic.jpg',
//     //     barPic: 'https://i.ibb.co/WcYHcKn/bar-bg.jpg'
//     // }

//         // //making card draggable
//         // const [{ isDragging }, dragRef] = useDrag({
//         //     type: 'user',
//         //     item: { user_id, name },
//         //     collect: (monitor) => ({
//         //         isDragging: monitor.isDragging()
//         //     })
//         // })   


//     // <div key={id} ref={dragRef}>
//     //     {isDragging && '😱'}
//     //     <p>{name}</p>
//     //     <img id='user' src={image} alt="profile" />  
//     //     <button onClick={() => handleDelete(id)}>Gotta' Study</button> 
//     // </div>

//     //create drop target
//     // const [{ isOver }, dropRef] = useDrop({
//     //     accept: 'user',
//     //     drop: (item) => setBasket((basket) => 
//     //                         !basket.includes(item) ? [...basket, item] : basket),
//     //     collect: (monitor) => ({
//     //         isOver: monitor.isOver()
//     //     })
//     // })


//   return (
//     <div style={{display: 'inline-flex'}}>hi
//         {/* <div>
//             <img className='rounded-5' style={{height: '300px', margin: '0 200px 0 0'}} src='https://i.ibb.co/yPDjjr7/cohort-group-pic.jpg' alt='img' 
//             draggable='true' onDragStart={this.handleDragStart} onDragEnd={this.handleDragEnd}/>
//         </div>
//         <div>
//             <img className='rounded-5' style={{height: '300px', margin: '0 0 0 200px'}} src='https://i.ibb.co/WcYHcKn/bar-bg.jpg' alt='bg' />
//         </div> */}
//     </div>
//   )
// }

// export default DragNDrop;