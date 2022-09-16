import React from 'react'
import jeansm from "../images/jeans1.jpg"
import jeanst1 from "../images/jeans2.jpg"
import jeans2 from "../images/jeans3.jpg"
import jeans3 from "../images/jeans4.jpg"
import "../styles/Jeans.css"


const Jeans = () => {
  return (

    <div className='hello0'>
        <h6 className='h6'>JEANS</h6>
    <div className='hello'>
      
     
    <img src={jeansm}  className='bigImg'></img>
    <div className='hello1'>
    <img  src={jeanst1} alt='no img' className='smallImg  item1'></img> 
    <img  src={jeans2} alt='no img'  className='smallImg  item2'></img>
     <img src={jeans3} alt='no img'  className='smallImg  item3'></img></div>


  

</div>
<h6 className='H66'>PREMIUM JEANS FOR EVERYONE</h6>

</div>
  )
}

export default Jeans