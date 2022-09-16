import React from 'react'
import logo from '../images/mainlogo2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/Navbar.css"
import {Nav,Container,Navbar} from "react-bootstrap"
import CartIcon from "../images/bag.png"
import SearchIcon from "../images/search.png"




const NA = ({setShow,size}) => {
  return (
    <div>


<Navbar bg="light" variant="light">
        <Container>
          <span   onClick={() => setShow(true)}>
          <Navbar.Brand className='logoji' > <img src={logo} alt="no img"/> </Navbar.Brand>
          </span>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/drop">Shipping</Nav.Link>
            <Nav.Link href="sell">Sell</Nav.Link>
            <div className="icon">
              <input typr ="text" placeholder='search here'></input>
            <img src={SearchIcon} alt=""  />
            
        <img src={CartIcon} alt="" onClick={() => setShow(false)} /> 
       <span>{size}</span>
      
       
           
           </div>
            
          </Nav>
        </Container>
      </Navbar>
   
  
    </div>
  )
}

export default NA