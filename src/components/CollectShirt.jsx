


import React, {  useState } from 'react';
import Cart from './Cart.js';
//import {useNavigate} from "react-router-dom "


import NA from './NA.jsx';
import Shirtsm from './Shirtsm.jsx';
const Home = () => {
    // const navigate = useNavigate();
    // const Pages = () => {
    // navigate('/about');}
    
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
};

return (

  <React.Fragment>
      
    <NA setShow={setShow} size={cart.length} />
    {show ? (
      <Shirtsm handleClick={handleClick} />
    ) : (
      <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    )}
       
  </React.Fragment>
);
};
 

export default Home