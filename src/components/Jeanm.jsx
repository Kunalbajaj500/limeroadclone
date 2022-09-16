import React from 'react'
import "../styles/Jeanm.css"

const Jeanm = ({name,src,index,price}) => {
  return (
    <div className="green ">
    < img  className="orange" src={src}  alt={index} />
    <div className="whitediv">
              <span>{name}</span>
              <b>{price}</b>
              </div>
          </div>
    )
  }

export default Jeanm