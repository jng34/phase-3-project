import React, { useState, useEffect } from 'react'

function Home(){
    const [ display, setDisplay ] = useState({})
    useEffect(()=>{
        fetch("http://localhost:9292/")
            .then(res=>res.json())
            .then(data=> setDisplay(data))
    },[])


    console.log(display)
    return(
        <h1>{display.message}</h1>    
    )
}

export default Home