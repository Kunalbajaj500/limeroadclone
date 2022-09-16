import React, {  useContext } from 'react'
import "../styles/cart.css"
import { CartContext } from './Cart'




const Item = ({name,price,image,quantity,description,id}) => {

  const {removeItem,Increment,Decrement} = useContext(CartContext)
  return (
    <>
      <div className='cart-info'>
                <div className='product-Img'>
                    <img  src={image} alt=""image/>
                </div>
                <div className='title'>
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
                <div className='quantity'>
                <button name="true" onClick={()=>Decrement(id)} >-</button>          
                 <input placeholder={quantity} ></input>
               <button onClick={()=>Increment(id)} >+</button>          
                </div>
                <div className='price'>
<h3>{price}</h3>
                </div>
                <div className='remove'>
<button name="true" onClick={()=>removeItem(id)}>-</button>
                </div>
            </div>
            <hr/>
    
    </>
  )
}

export default Item