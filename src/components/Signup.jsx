import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='ld'>
        <h2>Signup</h2>
        <form className='form'>
<input type="text" placeholder="Enter Your Name "></input>
<input type="text" placeholder="Enter your Email"></input>
<input type="text" placeholder="Enter Password"></input>
<input type="text" placeholder="conform your password"></input>
<Link to ="/checkout" className='b'><button> Submit</button></Link>
</form>
    </div>
  )
}

export default Signup