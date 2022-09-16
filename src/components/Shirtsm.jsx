import React from 'react'
//import logo from '../images/mainlogo2.png'
import "../styles/Shirtsm.css"
import sim1 from "../images/shirt12.jpg"
import Shirtm from "../components/Shirtm.jsx"
import data from "../data/data.json"


const Shirtsm = ({handleClick}) => {
  return (
    <div className='Shirtsm'> 

        <div className='imgg'>

{/* <h2>Mens Shirts</h2>
</div> 
<div className='firstimg'>
<img src={sim1} />
<p>Zara Stripped Blue Shirt</p>
<h6>Rs 4000</h6>
{/* <div className='filter' >
  <h3>Budget</h3>
  <h3>Moderate</h3>
  <h3>Premium</h3>

</div> */} 
</div>

<div className='restimg'>
  

  { data.shirt.map((item)=>(
    <Shirtm key={item.id}  item={item}  handleClick={handleClick}/>
  ))}
 
 

</div>

    </div>
  )
}

export default Shirtsm