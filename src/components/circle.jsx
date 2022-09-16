import React from 'react'
import c1 from '../images/shircir.jpg'
import c2 from '../images/womend3.jpg'
import c3 from '../images/shoecir.jpg'
import c4 from '../images/jeanscir2.jpg'
import c5 from '../images/jackcir.jpg'
import c6 from '../images/shotscir.jpg'
import c7 from '../images/coatcir.jpg'
import "../styles/circle.css"
import{Link} from "react-router-dom"

const circle = () => {
  return (
    <div className='circle'>
<Link to="/shirt"><div className='itemc'>
<img src={c1} alt="No Image" />
<h5 >Shirts</h5></div></Link>

<Link to="/shorts">
<div className='itemc'>
<img src={c2} alt="No Image" />
<h5 >T-shirt</h5></div></Link>
<Link to="/shoes">
<div className='itemc'>
<img src={c3} alt="No Image" />
<h5 className='dis'>Shoes</h5></div>
</Link>
<Link to="/Shirt">
<div className='itemc'>
<img src={c4} alt="No Image" />
<h5 >Jeans</h5></div>
</Link>
<Link to="/shirt">
<div className='itemc'> 
<img src={c5} alt="No Image" />
<h5> Jackets</h5></div>
</Link>
<Link to="/shirt">
<div className='itemc'>
<img src={c6} alt="No Image" />
<h5 >Shots</h5></div>
</Link>
<Link to="/shirt">
<div className='itemc'>
<img src={c7} alt="No Image" />
<h5 >Coats</h5></div>
</Link>


    </div>
  )
}

export default circle