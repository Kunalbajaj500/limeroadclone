import React from 'react'

const Shoem = ({name,price,src,index}) => {
  return (
    <div className="green ">
    < img  className="orange" src={src}  alt={index} />
    <div className="whitediv">
              <span>{name}</span><br />
              <b>{price}</b>
              </div>
             
          </div>
  )
}

export default Shoem