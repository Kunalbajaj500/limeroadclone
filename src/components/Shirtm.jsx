import React, { useState } from 'react';
import '../styles/Shirtm.css';
import { Link} from 'react-router-dom';

const Shirtm = ({ item, handleClick }) => {

  const { id, name, description, price, image } = item;
  return (
    <div className="green ">
      <Link to="/product" className="orange">
        {' '}
        <img src={image} />
      </Link>
      <div className="whitediv">
        <span>{name}</span>
        <br />
        <p>{description}</p>

        <b>{price}</b>

        <button onClick={() => handleClick(item)}> Add to cart </button>
      </div>
    </div>
  );
};

export default Shirtm;
