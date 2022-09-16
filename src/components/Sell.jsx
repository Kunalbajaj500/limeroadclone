import React from 'react'
import "../styles/Sell.css"
import {Link} from "react-router-dom"

const Sell = () => {
  return (
    <div className='about02'>

    <div className='about2'>
       
    
      <h1>Sell with us!</h1>

    </div>
    <h2>Sell With Us</h2>
    <div className='sellbox'>
       
    <input type="text"   placeholder='Name' />
    <input type="Number"  placeholder='Number' />
    <input type="E-mail"  placeholder='E-Mail' />
    <input type="Password"  placeholder='Password'/>
    
    </div>
    </div>
  )
}

export default Sell