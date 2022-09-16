import React from 'react'
import Jeanm from "../components/Jeanm.jsx"

const Jeansm = ({jeans}) => {
  return (
    <div>

{ jeans.map((item,index)=>(
    <Jeanm key={item.price} index={index} name={item.name} src={item.image} price={item.price} />
  ))}
    </div>
  )
}

export default Jeansm