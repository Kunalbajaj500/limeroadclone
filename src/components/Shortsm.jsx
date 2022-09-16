import React from 'react'
import Shortm from "../components/Shotsm.jsx"
import logo from '../images/mainlogo2.png'
import she from "../images/shot1.jpg"
const Shortsm = ({short}) => {
  return (
    <div className='Shirtsm'>
          <div className='imgg'>
<img src ={logo}/>
<h2>Mens Shorts</h2>
</div> 
<div className='firstimg'>
<img src={she} />
<p>Zara Stripped Blue Shirt</p>
<h6>Rs 4000</h6>
</div>
<div className='restimg'>

  { short.map((item,index)=>(
    <Shortm key={item.image} index={index} name={item.name} src={item.image} price={item.price} />
  ))}
  </div>
    </div>
  )
}

export default Shortsm