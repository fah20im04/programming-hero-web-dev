/**
 * 1.to get something from local stoarage, you will get it as a string
 * 2.convert this to js object o array
 * 
 */

const getCartFromLocalStoarage = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        const storedCart = JSON.parse(storedCartString);
        return storedCart;
    }
    return [];
}

const saveCartToLocalStoarage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified);
}

const addItemToLOcalStoarage = (id) => {
    const cart = getCartFromLocalStoarage();
    cart.push(id);
    // another way
    const newCart = [...cart, id]

    //save new cart to the local stoarage
    saveCartToLocalStoarage(newCart);
}

const removeFromLocalStorage = id =>{
    const storedCart = getCartFromLocalStoarage();
    const remainingCart = storedCart.filter(storeId => storeId !== id);
    saveCartToLocalStoarage(remainingCart);
}

export {
    getCartFromLocalStoarage as getStoreCart, addItemToLOcalStoarage as addToStoreCart,removeFromLocalStorage as removeFromCart
}