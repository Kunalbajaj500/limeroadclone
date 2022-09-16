import React from 'react'
import shirtm from  "../images/shitr1.jpg"
import shirt1 from "../images/shirt2.jpg"
import shirt2 from "../images/shirt3.jpg"
import shirt3 from "../images/shirt4.jpg"
import "../styles/Shirts.css"

const Shirts = () => {
  return (
    <div className='hello0'>
        <h6 className='h6'>SHIRTS</h6>
    <div className='hello'>
       
          <img src={shirtm}  className='bigImg'></img>
        <div className='hello1'>
        <img  src={shirt1} alt='no img' className='smallImg  item1'></img> 
        <img  src={shirt2} alt='no img'  className='smallImg  item2'></img>
         <img src={shirt3} alt='no img'  className='smallImg  item3'></img></div>
    </div>
    <h6 className='H66'> PREMIUM SHIRTS FOR EVERYONE</h6>
    </div>
  )
}

export default Shirts