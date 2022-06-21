import React, { useState, useEffect } from 'react';
import UserCard from './UserCard';

function Users() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setUsers(data);
        })
    }, [])
    
    const renderUsers = users.map((user) => (
        <UserCard key={user.id} id={user.id} name={user.username} image={user.image}/>
    ))


    return (
        <div>
            <h3>User cards here</h3>
            {renderUsers}
        </div>
    )
}

export default Users;