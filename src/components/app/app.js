
import { useState } from "react";
import BodyItems from "../body-items/body-items";
import Cart from "../cart.js/cart";
import Header from "../header/header";


import './app.css';

const App = () => {
    
    const [show, setShow] = useState(true);
    const [cart, setCart] = useState([]);
  
    const handleClick = (item) => {
      if (cart.indexOf(item) !== -1) return;
      setCart([...cart, item]);
    };
  
    const handleChange = (item, d) => {
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += d;
  
      if (arr[ind].amount === 0) arr[ind].amount = 1;
      setCart([...arr]);
    }
    
        
    return (
        <>
            <Header setShow={setShow} size={cart.length}/>
            {
                 show ? (<BodyItems handleClick={handleClick}/>):( <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>)
            }
                
        </>
            
    )


    
    
}

export default App;