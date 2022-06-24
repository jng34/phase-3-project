import React from 'react'
import UserCard from './UserCard'

function UserContainer({users, handleDelete, handleEmojiClick, handleDrinkClick}) {

    const userCards = users.map((user) => (
        <UserCard key={user.id} user_id={user.id} name={user.username} image={user.image} emoji_icon={user.emoji.icon} drink_image={user.drink.image} handleDelete={handleDelete} handleEmojiClick={handleEmojiClick} handleDrinkClick={handleDrinkClick}/>
    ))

  return (
    <div>{userCards}</div>
  )
}

export default UserContainer