import React from 'react'
import shortm from "../images/shot1.jpg"
import short1 from "../images/shot2.jpg"
import short2 from "../images/shot3.jpg"
import short3 from "../images/shot4.jpg"
import "../styles/Shorts.css"


const Shorts = () => {
  return (

    <div className='hello0'>
        <h6 className='h6'>SHORTS</h6>
    <div className='hello'>
      
     
    <img src={shortm}  className='bigImg'></img>
    <div className='hello1'>
    <img  src={short1} alt='no img' className='smallImg  item1'></img> 
    <img  src={short2} alt='no img'  className='smallImg  item2'></img>
     <img src={short3} alt='no img'  className='smallImg  item3'></img></div>


  

</div>
<h6 className='H66'> ATHELETIC SHOTS FOR EVERYONE </h6>
</div>
  )
}

export default Shorts