import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Checkout from './components/Checkout';
import Customize from './components/Customize';
import {Switch,Link,Route,BrowserRouter as Router }from 'react-router-dom';


function App() {
  const [ingredients,setIngredients]=useState({
    basil:false,
    cheese:false,
    mushroom:false,
    olive:false,
    pineapple:false,
    tomato:false
  });
  useEffect(()=>{
    const data = localStorage.getItem('ingredients');
    if(data){
      setIngredients(JSON.parse(data));
    }
    
    
  },[]);
  return (
   <div>
     <Header/>
     <Router>
     <Switch>
        <Route exact path="/">
          <Customize ingredients={ingredients} setIngredients={setIngredients}/>
        </Route> 
        <Route path="/checkout">
          <Checkout ingredients={ingredients}/>
        </Route>
        
      </Switch> 
     </Router>
   </div>
  );
}

export default App;
