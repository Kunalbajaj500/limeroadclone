import React from 'react'
import suitm from "../images/suit1.jpg"
import suit1 from "../images/suit2.jpg"
import suit2 from "../images/suit3.jpg"
import suit3 from "../images/suit4.jpg"
import "../styles/suits.css"


const Suits = () => {
  return (
    <div className='hello0'>
           <h6 className='h6'>SUITS</h6>
     <div className='hello' >
    <img src={suitm}  className='bigImg'></img>
    <div className='hello1'>
    <img  src={suit1} alt='no img' className='smallImg  item1'></img> 
    <img  src={suit2} alt='no img'  className='smallImg  item2'></img>
     <img src={suit3} alt='no img'  className='smallImg  item3'></img></div>
    


     </div>
     <h6 className='H66'>LUXURY SUITS </h6>
</div>
  )
}

export default Suits