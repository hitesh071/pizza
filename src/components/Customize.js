import React from 'react';
import Base from '../assets/PizzaBase.png';
import Cheese from '../assets/BaseCheese.png';
import Olive from '../assets/Olive.png';
import Pineapple from '../assets/Pineapple.png';
import Mushroom from '../assets/Mushroom.png';
import Basil from '../assets/Basil.png';
import Tomato from '../assets/Tomato.png';
import {motion} from 'framer-motion';
import {useHistory} from 'react-router-dom';

export default function Customize({ingredients,setIngredients}){
let history=useHistory();
    const changeIngredients=(event,name)=>{
        console.log(localStorage);
        let newIngredients=JSON.parse(JSON.stringify(ingredients));
        newIngredients[name]= event;
        setIngredients(newIngredients);
        localStorage.setItem('ingredients',JSON.stringify(newIngredients));
    }
    return(
        <div style={{display: "flex"}}>
            
            <div style={{border:"2px solid black",flex:1}}>
                <div style={{maxHeight:500,maxWidth:500, position:"relative"}}>
                    
                    
                    <motion.div initial={{opacity:0}} animate={{
                        y:ingredients["cheese"] ? 100 :-100,
                        opacity:ingredients["cheese"] ? 1:0
                    }}
                    transition={{duration:0.5}}
                    className="ingredients">
                        <img src={Cheese} alt="Cheese" width="100%" height="100%" />
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{
                        y:ingredients["olive"] ? 100 :-100,
                        opacity:ingredients["olive"] ? 1:0
                    }}
                    transition={{duration:0.5}}
                    className="ingredients">
                        <img src={Olive} alt="Olive" width="100%" height="100%" />
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{
                        y:ingredients["pineapple"] ? 100 :-100,
                        opacity:ingredients["pineapple"] ? 1:0
                    }}
                    transition={{duration:0.5}}
                    className="ingredients">
                        <img src={Pineapple} alt="Pineapple" width="100%" height="100%"/>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{
                        y:ingredients["basil"] ? 100 :-100,
                        opacity:ingredients["basil"] ? 1:0
                    }}
                    transition={{duration:0.5}}
                    className="ingredients">
                        <img src={Basil} alt="Basil" width="100%" height="100%"/>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{
                        y:ingredients["tomato"] ? 100 :-100,
                        opacity:ingredients["tomato"] ? 1:0
                    }}
                    transition={{duration:0.5}}
                    className="ingredients">
                        <img src={Tomato} alt="Tomato" width="100%" height="100%"/>
                    </motion.div>
                    <motion.div initial={{opacity:0}} animate={{
                        y:ingredients["mushroom"] ? 100 :-100,
                        opacity:ingredients["mushroom"] ? 1:0
                    }}
                    transition={{duration:0.5}}
                    className="ingredients">
                        <img src={Mushroom} alt="Mushroom" width="100%" height="100%"/>
                    </motion.div>
                    
                    <img src={Base} alt="Pizza Base" width="100%" height="100%" />
                </div>
            </div>
            <div style={{border:"2px solid black",flex:1}}>
                
                <label className="container-checkbox">
                    Pineapple
                    <input type="checkbox" 
                    checked={ingredients["pineapple"]}
                    onChange={(event)=>
                        changeIngredients(event.currentTarget.checked,"pineapple")}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Olive
                    <input type="checkbox" 
                    checked={ingredients["olive"]}
                    onChange={(event)=>
                        changeIngredients(event.currentTarget.checked,"olive")}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Basil
                    <input type="checkbox" 
                    checked={ingredients["basil"]}
                    onChange={(event)=>
                        changeIngredients(event.currentTarget.checked,"basil")}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Tomato
                    <input type="checkbox" 
                    checked={ingredients["tomato"]}
                    onChange={(event)=>
                        changeIngredients(event.currentTarget.checked,"tomato")}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Mushroom
                    <input type="checkbox" 
                    checked={ingredients["mushroom"]}
                    onChange={(event)=>
                        changeIngredients(event.currentTarget.checked,"mushroom")}/>
                    <span className="checkmark"></span>
                </label>
                <label className="container-checkbox">
                    Cheese
                    <input type="checkbox" 
                    checked={ingredients["cheese"]}
                    onChange={(event)=>
                        changeIngredients(event.currentTarget.checked,"cheese")}/>
                    <span className="checkmark"></span>
                </label>
                <button onClick={()=>history.push("/checkout")}>
                    Procced to checkout
                </button>
            </div>
            
        </div>
    );
}