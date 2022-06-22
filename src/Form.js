import React, { useState } from 'react';


function Form({ drinks, onHandleSubmit }) {
    const [selected, setSelected] = useState('yes');

    const [formData, setFormData] = useState({
        username:"",
        image:"",
        emoji_id: "5",
        drink_id: "1"
    })

    function handleChange(e) {
        console.log(e.target.name)
        const { name, value } = e.target;
        setFormData((formData)=>({...formData, [name]:value}))
    }

    function handleSubmit(e){
        e.preventDefault();

        fetch("http://localhost:9292/users",{
            method: "POST",
            headers: {
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData),
            })
        .then(res=>res.json())
        .then(newUser=> {
            onHandleSubmit(newUser);
            setFormData({
                username:"",
                image:""
            });
        })
    }

  return (
    <div className="container">
      <form className="add-user" onSubmit={handleSubmit}>
        <h3>Add a user!</h3>
        <label>Name: </label>
        <input
          type="text"
          name="username"
          placeholder="Enter username..."
          className="input-text"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <label>Profile Pic: </label>
        <input
          type="text"
          name="image"
          placeholder="Enter image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br /><br />

        {/* change id from str to int for backend */}
        <form>
            <label>Feeling: </label><br />
            <input onClick={handleChange} defaultChecked type="radio" id="poopy" name="emoji_id" value="5" />  
            <label for="poopy">💩</label>
            <input onClick={handleChange} type="radio" id="smirky" name="emoji_id" value="1" />  
            <label for="smirky">😏</label>
            <input onClick={handleChange} type="radio" id="sleepy" name="emoji_id" value="2" />  
            <label for="sleepy">😴</label>
            <input onClick={handleChange} type="radio" id="hearty" name="emoji_id" value="3" />  
            <label for="hearty">😍</label>
            <input onClick={handleChange} type="radio" id="angry" name="emoji_id" value="4" />  
            <label for="angry">😡</label>
            <input onClick={handleChange} type="radio" id="happy" name="emoji_id" value="6" />  
            <label for="happy">🙂</label>
            <input onClick={handleChange} type="radio" id="party" name="emoji_id" value="7" />  
            <label for="party">🥳</label>
            <input onClick={handleChange} type="radio" id="sad" name="emoji_id" value="8" />  
            <label for="sad">🙁</label>
        </form>
        <br />
        <form>
            <label>Drink: </label><br />
            <input onClick={handleChange} defaultChecked type="radio" id="marg1" name={drinks[0].name} value="1" />  
            <label for="marg1">
                {drinks[0].name}<br />
                <img style={{height: '75px'}} src={drinks[0].image} alt='drink1'/>
            </label>
            <input onClick={handleChange} type="radio" id="marg2" name={drinks[1].name} value="2" />  
            <label for="marg2">
                {drinks[1].name}<br />
                <img style={{height: '75px'}} src={drinks[1].image} alt='drink2'/>
            </label>
            <input onClick={handleChange} type="radio" id="marg3" name={drinks[2].name} value="3" />  
            <label for="marg3">
                {drinks[2].name}<br />
                <img style={{height: '75px'}} src={drinks[2].image} alt='drink3'/>
            </label>
            <br />
            <input onClick={handleChange} type="radio" id="marg4" name={drinks[3].name} value="4" />  
            <label for="marg4">
                {drinks[3].name}<br />
                <img style={{height: '75px'}} src={drinks[3].image} alt='drink4'/>
            </label>
            <input onClick={handleChange} type="radio" id="marg5" name={drinks[4].name} value="5" />  
            <label for="marg5">
                {drinks[4].name}<br />
                <img style={{height: '75px'}} src={drinks[4].image} alt='drink5'/>
            </label>
            <input onClick={handleChange} type="radio" id="marg6" name={drinks[5].name} value="6" />  
            <label for="marg6">
                {drinks[5].name}<br />
                <img style={{height: '75px'}} src={drinks[5].image} alt='drink6'/> 
            </label>
        </form>
        <br />
        <input
          type="submit"
          name="submit"
          value="Add a user"
          className="submit"
        />
      </form>
    </div>
  )
}

export default Form;