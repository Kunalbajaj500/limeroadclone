import React from 'react'
import { useState } from 'react';
import Circle from "./circle.jsx"
import Bg from "./BG.jsx"
import Part1 from "./Part1.jsx"
import Heading from "./Heading"
import Card from "./Card.jsx"
import Suits from "./Suits"
import Jeans from "./Jeans"
import Shirts from "./Shirts"
import Shorts from "./Shorts"
import Item from "./Item.jsx"
import Icons from "./Icons.jsx"
import Navbar from "./NA"
import Shirtsm from './Shirtsm.jsx';
import Cart from './Cart.js';

//eslint-disable-next-line



const Home = () => {
  
  
  
  return (
    <div>


     
<Navbar/>
<Bg/>
        <Item />
        <Heading text="Catagories" />
        <Circle />

        <Heading text="Genders" />
        <Part1 className="part" />
        <Icons />

        <Heading text="Products" />
   
          <Card className="hey" />

          <Suits className="hey" />
          <Jeans />
          <Shirts />
          <Shorts />
    
        <Item />
      
      </div>
  


    

   
  );
}
  


export default Home