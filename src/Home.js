import React, { useState } from 'react';
import UserCard from './UserCard';
import Form from './Form';


function Home({ users, emojis, drinks, onHandleSubmit, handleDelete }) {
    const [showForm, setShowForm] = useState(false);

    function handleClick() {
        setShowForm((showForm) => !showForm);
    }
    

    const renderUsers = users.map((user) => (
        <UserCard key={user.id} user_id={user.id} name={user.username} image={user.image} emoji={user.emoji} drink={user.drink} handleDelete={handleDelete}/>
    ))

    return (

        <div className="App">
            <h4><em>"Where DRY code becomes wet..."</em></h4>
            <br />       
            <div className='container'>
                <div className='buttonContainer'>
                    <button onClick={handleClick}>{showForm?'Hide Add User':'Add User'}</button>
                </div>
                <br />
                {showForm ? <Form drinks={drinks} onHandleSubmit={onHandleSubmit}/> :null}
                <br />
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {renderUsers}
                </div>
                <br /><br />
            </div>
        </div>
    )
}

export default Home;