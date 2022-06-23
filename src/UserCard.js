import React from 'react';
import { useDrag } from 'react-dnd';


function UserCard({ user_id, name, image, emoji, drink, handleDelete }) {
    //making card draggable
    // const [{ isDragging }, dragRef] = useDrag({
    //     type: 'user',
    //     item: { user_id, name },
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging()
    //     })
    // })   


    //problem
    // let emoji ={}
    // let drink ={}
    // if(emojis.length != 0 && drinks.length != 0){
    //     emoji = emojis.find(({id}) => id === emoji_id )
    //     drink = drinks.find(({id}) => id === drink_id);
    // } 

    return (
        // <div key={id} ref={dragRef}>
        //     {isDragging && '😱'}
        //     <p>{name}</p>
        //     <img id='user' src={image} alt="profile" />  
        //     <button onClick={() => handleDelete(id)}>Gotta' Study</button> 
        // </div>
        <div>
{/* 
            <div className="bg col">
                <div id='flip-card' className="card h-100 rounded-4">
                    <div id='flip-card-inner' className="card-body">
                        <div id='flip-card-front' >
                            <img src={image} className="card-img-top  rounded-4" alt="profile" />
                            <h5 className="fw-bolder card-title">{"testing"}</h5>
                        </div>
                        <div id="flip-card-back">
                            <h1>{name}</h1>
                            <img id='emoji' src={emoji.icon} alt='img' /><br /><br />
                            <img id='drink' src={drink.image} alt='img' />
                        </div>
                    </div>
                    <div className="card-footer">
                        <button className="fw-semibold" onClick={() => alert('Smelly~~')}>Edit</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="font-monospace fw-semibold bg-danger" onClick={() => handleDelete(user_id)}>$ git out</button>
                    </div>
                </div>
            </div> */}
        
        
        <div key={user_id} id="flip-card" className="col">
            <div id="flip-card-inner" className='card h-100'>
                <div id="flip-card-front">
                    <img src={image} alt="profile" className='card-img-top' />
                </div>
                <div id="flip-card-back">
                    <h5>{name}</h5>
                    <label>Emoji</label>&nbsp;
                    <img id='emoji' src={emoji.icon} alt='img' /><br /><br />
                    <label>Drink</label>&nbsp;&nbsp;
                    <img id='drink' src={drink.image} alt='img' />
                    <div className="card-footer" >
                        <button className="fw-semibold" onClick={() => alert('Smelly~~')}>Edit</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <button className="font-monospace fw-semibold bg-danger" onClick={() => handleDelete(user_id)}>$ git out</button>
                    </div>
                </div>
            </div>
        </div>


{/* <div class="row row-cols-1 row-cols-md-3 g-4">
<div class="col">
  <div class="card h-100">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
<div class="col">
  <div class="card h-100">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
<div class="col">
  <div class="card h-100">
    <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>
</div> */}


    </div>

    )
}

export default UserCard;