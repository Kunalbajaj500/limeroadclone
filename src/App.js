import './App.css';
import { useState } from 'react';
import Shirtsm from "./components/Shirtsm.jsx"
import Jeansm from './components/Jeansm.jsx';
import data from "./data/data.json"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Shorts from './components/Shortsm.jsx';
import About from "./components/About"
import Sell from "./components/Sell.jsx"
 import Shipping from "./components/Shipping.jsx"
 import Item1 from "./components/Item1.jsx";
 import Shoesm from './components/Shoesm.jsx';
 import Footer from "./components/Footer.jsx"
 import Products from "./components/Products"
 import Checkout from "./components/checkout"
 import Sucess from "./components/sucess"
import Login from './components/Login';
import Signup from './components/Signup';
import Pay from './components/Pay';
import Cart from './components/Cart';
import Home from "./components/Home.jsx"
import  Navbar  from './components/NA';
import CollectShirt from "./components/CollectShirt"
//import Shirtsm from './components/Shirtsm.jsx';







function App() {
 
  return(
    <div>
     
    
       <BrowserRouter>
       
        <Routes>
        

            <Route path="/" element={<Home/>} />
            <Route path="/shirt" element={<CollectShirt />} />
            <Route path="/about" element={<About/>} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/Sell" element={<Sell/>} />
            <Route path="/Item1" element={<Item1/>} />
            <Route path="/Drop" element={<Shipping/>} />
            <Route path="/sucess" element={<Sucess/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/checkout" element={<Checkout/>} />
            <Route path="/pay" element={<Pay/>} />
            <Route path="/shoes" element={<Shoesm shoe={data.shoe} />}/>
            <Route path="/shorts" element={<Shorts short={data.Shorts} />} />
            <Route path="/jeans" element={<Jeansm jeans={data.shirt} />} />
            <Route path= "/product" element={<Products/>} />
            
            
        </Routes>
    </BrowserRouter>
      <Footer footer={data.footer} />
    </div>
  )
}

export default App;
