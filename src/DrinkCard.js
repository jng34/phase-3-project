import React, {useState} from 'react'
function DrinkCard({ drinkId, name, image, ans }) {
    const [ color, setColor ] = useState("")
    function click(){
        if (ans===drinkId) {
            setColor("green")
        } else {
            setColor("red")
        }
    }
    return (
        <div className="col card float-end"  style={{width: '7rem', cursor: "pointer"}}>
            <div onClick={() => click(drinkId)} className="card-body" style={{backgroundColor: color}}>
            <img src={image} id={drinkId} className="card-img-top" alt="drink"  />
                <p style={{fontSize: '14px'}}>{name}</p>
            </div>
        </div>
    )
}
export default DrinkCard