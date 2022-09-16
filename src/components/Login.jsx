import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Login.css"

const Login = () => {
  return (
    <div className='ld'>
        <h2 >Login</h2>
        <form className="login">
<input type="text" placeholder="Enter Your Name/Email "></input>
<input type="text" placeholder="Enter Your Password"></input>
<Link to ="/pay" className='b'><button>Login </button></Link>
<Link to ="/signup" className='sp'>create an account?</Link>
</form>
    </div>
  )
}

export default Login