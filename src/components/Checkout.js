import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import PizzaMan from '../assets/PizzaMan.png';
export default function Checkout({ingredients}){
    const [success,setSuccess] = useState(false);
    const history=useHistory();
    return(
        <div style={{display:"flex"}}>

            <div>
                <div>
                    <h1>My Ingredients</h1>
                    {Object.keys(ingredients).map((ingredient)=>{
                        return(
                            ingredients[ingredient] &&
                        (<p>{ingredient[0].toUpperCase()}{ingredient.substring(1)}</p>));
                    })}
                    <button onClick={()=>setSuccess(true)}>Confirm</button >
                    <button onClick={()=>history.push("/")}>Go Back</button>
                </div>
            </div>
                <div>
                    {success && (
                    <div style={{textAlign:"center"}}>
                        <img src={PizzaMan} alt="pizzaman" height="300px"/>
                        <div style={{fontFamily:"Open Sans Condensed",fontSize:30}}>
                          We have received you order, Thank You!!  
                        </div>
                        <div style={{fontFamily:"Comfortaa"}}>
                            Order #{Math.round(Math.random()*100000)}
                        </div>
                        <div style={{fontFamily:"Inside Flower",fontSize:20}}>
                            Will be ready in 20-30 min.
                        </div>
                    </div>
                    )}
                </div>
        </div>
    );
}