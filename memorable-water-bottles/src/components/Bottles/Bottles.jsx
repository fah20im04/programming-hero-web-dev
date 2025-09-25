import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoreCart, getStoreCart, removeFromCart } from '../../utilities/localStoarage';
import Cart from '../Cart/Cart';
const Bottles = ({ bottlesPromise }) => {

    const [cart, setCart] = useState([]);

    // useEffect
    useEffect(() => {
        const storedCartIds = getStoreCart();
        //  console.log(storedCartIds,bottles);

        const storedCart = [];

        for (const id of storedCartIds) {
           // console.log(id)
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }

        }
       // console.log('stored cart', storedCart);
        setCart(storedCart);


    }, [])

    const handleAddToCart = (bottle) => {
        //console.log('will be addeed',bottle)
         if (cart.find(item => item.id === bottle.id)) return;
        const newCart = [...cart, bottle];
        setCart(newCart);

        //save the bottle is in the stoarage
        addToStoreCart(bottle.id)

    }
    const handleRemoveFromCart = id => {
        //console.log('remove item from cart')

        const reamainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(reamainingCart);
        removeFromCart(id);
    }

    const bottles = use(bottlesPromise)
    //console.log(bottles)
    return (
        <div >
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to cart:{cart.length}</p>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className='bottles-container'>
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleAddToCart={() => handleAddToCart(bottle)} bottle={bottle}>

                    </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;