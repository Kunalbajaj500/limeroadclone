import React from 'react'
import "../styles/Products.css"
import {Link} from "react-router-dom"
import l1 from "../images/l1.jpg"
import l2 from "../images/drop.png"


const Products = () => {
  return (
    <div className='prod'>
  
      <div className="imgxg">  
      <img src="https://static.zara.net/photos///2022/I/0/1/p/4432/405/300/2/w/312/4432405300_6_1_1.jpg?ts=1654183611115"
      /></div>
     <div className='fp'>
      <h2>Stripped T-Shirt</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque tempore iste quasi,
         quos voluptas porro ducimus error deserunt nulla minima necessitatibus sunt saepe even
         iet! Cupiditate magnam voluptatum velit repellendus aperiam iure sequi voluptas invento
         re, dolores molestiae explicabo nulla sed commodi quod? Consequatur tempore enim quod, 
         asperiores illum earum deleniti!</p>
         <b>$4000</b>
         </div>
         <div className='bttn'>
       <Link to ="/cart" className='bttn'>  <button> Add to Cart </button></Link>
      <Link to ="/checkout" className='bt'>  <button> Buy Now </button></Link> </div>
<div className='ds'>
      <img  className='pm' src={l1} />
      <p className='p1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque tempore iste quasi,
         quos voluptas porro ducimus error deserunt nulla minima necessitatibus sunt saepe even
         iet! Cupiditate magnam voluptatum velit repellendus aperiam iure sequi voluptas invento
         re, dolores molestiae explicabo nulla sed commodi quod? Consequatur tempore enim quod, 
         asperiores illum earum deleniti! 
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque tempore iste quasi,
         quos voluptas porro ducimus error deserunt nulla minima necessitatibus sunt saepe even
         iet! Cupiditate magnam voluptatum velit repellendus aperiam iure sequi voluptas invento
         re, dolores molestiae explicabo nulla sed commodi quod? Consequatur tempore enim quod, 
         asperiores illum earum deleniti!</p>
         </div>
         <div className='ds2'>
       
         <p className='p2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque tempore iste quasi,
         quos voluptas porro ducimus error deserunt nulla minima necessitatibus sunt saepe even
         iet! Cupiditate magnam voluptatum velit repellendus aperiam iure sequi voluptas invento
         re, dolores molestiae explicabo nulla sed commodi quod? Consequatur tempore enim quod, 
         asperiores illum earum deleniti!
         asperiores illum earum deleniti!Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque tempore iste quasi,
         quos voluptas porro ducimus error deserunt nulla minima necessitatibus sunt saepe even
         iet! Cupiditate magnam voluptatum velit repellendus aperiam iure sequi voluptas invento
         re, dolores molestiae explicabo nulla sed commodi quod? Consequatur tempore enim quod, 
         asperiores illum earum deleniti!
         asperiores illum earum deleniti!</p>
         <img className="pm2"src={l2} />
         
         
         </div>
        

    </div>
  )
}

export default Products

