import React from 'react'
import logo from '../images/mainlogo2.png'
import she2 from "../images/shoecir.jpg"
import Shoem from "../components/Shoem.jsx"


const Shoesm = ({shoe}) => {
  return (
    <div className='Shirtsm'> 

        <div className='imgg'>
<img src ={logo}/>
<h2>Mens Shoes</h2>
</div> 
<div className='firstimg'>
<img src={she2} />
<p>Zara Stripped Blue Shirt</p>
<h6>Rs 4000</h6>
</div>
<div className='restimg'>

  { shoe.map((item,index)=>(
    <Shoem key={item.image} index={index} name={item.name} src={item.image} price={item.price} />
  ))}
 

</div>

    </div>
  )
}

export default Shoesm