// import React , { useContext } from 'react'
// import { Scrollbars } from 'react-custom-scrollbars-2';
// import Items from './Items';
// import  data from '../data/data.json';
// import arrow from '../images/arrow.png';
// import {CartContext} from "./Cart"
// import { Link } from 'react-router-dom';

// const ContextCart = () => {
//      //const  [item,setItem] = useState(data.shirt);

//     const {item,clearCart} = useContext(CartContext)
//     if (item.length ===0) {
// return(
// <>
//      <div className="ch">
//         <img src={arrow} alt="arrow"/>
//         <h3>Continue shopping</h3>
//       </div>
//       <hr />

//       <section>
//         <div className="sec">
//           <h1>Shopping cart</h1>
//           <p>
//             you have <span>5</span> items in your cart
//           </p>
//           <Link to ="/checkout"className='b1'>  <button >Checkout</button></Link>
//         </div>
//         <div className="cart-items">
//           <div className="cart-container">
//             <Scrollbars>
//               {item.map((curItem) => {
//                 return <Items key={curItem.price}  {...curItem}/>
//               })}
//             </Scrollbars>
//           </div>
//         </div>
//       </section>
//       <div className="che">
//         <h2>
//           Total Amount <span>20000</span>
//         </h2>
//         <div className='cc'>
     
//         <button className='b2' onClick={clearCart}>Clear Cart</button>
//         </div>
//       </div>
//      </>

// )

//     }
//   return (
//     <>
//      <div className="ch">
//         <img src={arrow} alt="arrow"/>
//         <h3>Continue shopping</h3>
//       </div>
//       <hr />

//       <section>
//         <div className="sec">
//           <h1>Shopping cart</h1>
//           <p>
//             you have <span>{}</span> items in your cart
//           </p>
//         </div>
//         <div className="cart-items">
//           <div className="cart-container">
//             <Scrollbars>
//               {item.map((curItem) => {
//                 return <Items key={curItem.price}  {...curItem}/>
//               })}
//             </Scrollbars>
//           </div>
//         </div>
//       </section>
//       <div className="che">
//         <h2>
//           Total Amount <span>20000</span>
//         </h2>
//         <div className='cc'>
//         <button className='b1'>Checkout</button>
//         <button className='b2' onClick={clearCart}>Clear Cart</button>
//         </div>
//       </div>
//      </>
//   )
// }

// export default ContextCart