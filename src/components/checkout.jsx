import React from 'react'
import {Link} from "react-router-dom"
import "../styles/cheakout.css"

const checkout = () => {
  return (
    <div>
      <div className='h'>
<h1> Checkout!</h1>
<h2>Enter Your Details</h2>
</div>
<form className='form'>
<input type="text" placeholder="Enter Your Name "></input>
<input type="text" placeholder="Enter your City"></input>
<input type="text" placeholder="Enter Your Pincode"></input>
<input type="text" placeholder="Enter Your Address"></input>
<Link to ="/pay" className='b'><button> Place order</button></Link>
</form>

    </div>
  )
}

export default checkout