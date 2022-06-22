import React, { useState, useEffect } from 'react';


function Fun() {
    const [singleUser, setSingleUser] = useState({})
    //generates random number from 1-23
    const id =  Math.floor(Math.random()*(23)+1);

    useEffect(() => {
        fetch(`http://localhost:9292/users/${id}`)
        .then(res => res.json())
        .then(data => setSingleUser(data));
    }, [])

    
    // const renderSingleUser =
    // <div className="card" style={{width: "18rem"}}>
    //         <img src={singleUser.image} className="card-img-top" alt='student'/>
    //         <div className="card-body">
    //             <h5 className="card-title">{singleUser.username}</h5>
    //             <p className="card-text">~~Smelly code~~</p>
    //         </div>
    //         <ul className="list-group list-group-flush">
    //             <li className="list-group-item">Feeling here</li>
    //             <li className="list-group-item">Drink here</li>
    //         </ul>
    //         <div className="card-body">
    //             <button>Delete</button>
    //         </div>
    // </div>

    const renderSingleUser =
    <div className="flip-card">
        <div className="flip-card-inner">
            <div className="flip-card-front">
                <img src={singleUser.image} alt="user" style={{width: '300px', height:'300px'}} />
            </div>
            <div className="flip-card-back">
                <h1>{singleUser.username}</h1>
                <p>Emoji</p>
                <p>Drink</p>
            </div>
        </div>
    </div>

    return (
        <div>
            <h3>User cards here</h3>
            {renderSingleUser}
        </div>
    )
}

export default Fun;