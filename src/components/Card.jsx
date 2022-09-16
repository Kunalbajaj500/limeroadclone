import React from 'react'
import jacketm from "../images/jacket1.jpg"
import jacket1 from "../images/jacket2.jpg"
import jacket2 from "../images/jacket3.jpg"
import jacket3 from "../images/jacket4.jpg"





 
import "../styles/Card.css"

const Card = () => {
  return (
    <div className='hello0'>
       <h6 className='h6'>JACKETS</h6>
     <div className='hello'>
     
        <img src={jacketm}  className='bigImg'></img>
       
        <div className='hello1'>
        <img  src={jacket1} alt='no img' className='smallImg  item1'></img> 
        <img  src={jacket2} alt='no img'  className='smallImg  item2'></img>
         <img src={jacket3} alt='no img'  className='smallImg  item3'></img></div>
        
         </div>
       
    
<h6  className='H66'>PREMIUM JACKETS FOR EVERYONE  </h6>
       

    </div>
  )
}

export default Card