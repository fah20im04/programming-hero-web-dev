import React from 'react';
import './bottle.css'

const Bottle = ({bottle,handleAddToCart}) => {
    const {img,name,price,stock} = bottle;
    //console.log(bottle)
    return (
        <div className='card bottle'>
            <img src={img} alt='bottle'></img>
            <h3>Bottle Name:{name}</h3>
            <p>Price:$ {price}</p>
            <p>Available Quantity in stock: {stock}</p>
            <button onClick={handleAddToCart}>Buy Now</button>
        </div>
    );
};

export default Bottle;