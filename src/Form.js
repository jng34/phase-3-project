import React, { useState } from 'react';


function Form({ drinks, onHandleSubmit }) {

    const [formData, setFormData] = useState({
        username:"",
        image:"",
        emoji_id: "5",
        drink_id: "1"
    })

    function handleChange(e) {
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
        .then(newUser=>{
            onHandleSubmit(newUser)
        });
        setFormData({username:"",image:""});
    }

  return (
    <div className="container">
      <form className="add-user" onSubmit={handleSubmit}>
        <h3>Add a user!</h3>
        <input
          type="text"
          name="username"
          placeholder="Enter username..."
          className="input-text"
          value={formData.username}
          onChange={handleChange}
        />
        <br />
        <input
          type="text"
          name="image"
          placeholder="Enter image URL..."
          className="input-text"
          value={formData.image}
          onChange={handleChange}
        />
        <br /><br />


        <div>
            <label style={{fontSize: '30px',padding: '20px'}}>Feeling: </label>
            <input onClick={handleChange} type="radio" id="smirky" name="emoji_id" value="1" />  
            <label htmlFor="smirky" className="form-emoji">😏</label>
            <input onClick={handleChange} type="radio" id="sleepy" name="emoji_id" value="2" />  
            <label htmlFor="sleepy" className="form-emoji">😴</label>
            <input onClick={handleChange} type="radio" id="hearty" name="emoji_id" value="3" />  
            <label htmlFor="hearty" className="form-emoji">😍</label>
            <input onClick={handleChange} type="radio" id="angry" name="emoji_id" value="4" />  
            <label htmlFor="angry" className="form-emoji">😡</label>
            <input onClick={handleChange} defaultChecked type="radio" id="poopy" name="emoji_id" value="5" />  
            <label htmlFor="poopy" className="form-emoji">💩</label>
            <input onClick={handleChange} type="radio" id="happy" name="emoji_id" value="6" />  
            <label htmlFor="happy" className="form-emoji">🙂</label>
            <input onClick={handleChange} type="radio" id="party" name="emoji_id" value="7" />  
            <label htmlFor="party" className="form-emoji">🥳</label>
            <input onClick={handleChange} type="radio" id="sad" name="emoji_id" value="8" />  
            <label htmlFor="sad" className="form-emoji">🙁</label>
        </div>
        <br />
        <div>
            <label style={{fontSize: '30px',padding: '20px'}}>Drink: </label>
            <input onClick={handleChange} defaultChecked type="radio" id="marg1" name="drink_id" value="1" />  
            <label htmlFor="marg1" className="drink-name">
                {drinks[0].name}<br />
                <img className="form-drink" src={drinks[0].image} alt='drink1'/>
            </label>
            <input onClick={handleChange} type="radio" id="marg2" name="drink_id" value="2" />  
            <label htmlFor="marg2" className="drink-name">
                {drinks[1].name}<br />
                <img className="form-drink" src={drinks[1].image} alt='drink2'/>
            </label>
            <input onClick={handleChange} type="radio" id="marg3" name="drink_id" value="3" />  
            <label htmlFor="marg3" className="drink-name">
                {drinks[2].name}<br />
                <img className="form-drink" src={drinks[2].image} alt='drink3'/>
            </label>
            <input onClick={handleChange} type="radio" id="marg4" name="drink_id" value="4" />  
            <label htmlFor="marg4" className="drink-name">
                {drinks[3].name}<br />
                <img className="form-drink" src={drinks[3].image} alt='drink4'/>
            </label>
            <input onClick={handleChange} type="radio" id="marg5" name="drink_id" value="5" />  
            <label htmlFor="marg5" className="drink-name">
                {drinks[4].name}<br />
                <img className="form-drink" src={drinks[4].image} alt='drink5'/>
            </label>
            <input onClick={handleChange} type="radio" id="marg6" name="drink_id" value="6" />  
            <label htmlFor="marg6" className="drink-name">
                {drinks[5].name}<br />
                <img className="form-drink" src={drinks[5].image} alt='drink6'/> 
            </label>
        </div>
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