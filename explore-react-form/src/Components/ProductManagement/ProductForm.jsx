import React, { useState } from 'react';

const ProductForm = ({ handleAddProduct }) => {


    const [error, setError] = useState('')

    const handleProductSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.Price.value;
        const quantity = e.target.Quantity.value;

        //    console.log(name,price,quantity)
        // validation
        if (name.length == 0) {
            setError('name is required')
            return;
        } else if (price.length == 0) {
            setError('price is required') 
            return;
        }
        else if (price < 0) {
            setError('price cant be negative')
            return;
        }
        else if (quantity.length == 0) {
            setError('quantity is required')
            return;
        }
        else if (quantity < 0) {
            setError('quantity cant be negative')
            return;
        }
        else {
            setError('');
        }


        const newProduct = {
            name,
            price,
            quantity
        }
        // console.log(newProduct)
        // if (!error) {
        //     handleAddProduct(newProduct);

        // }
        handleAddProduct(newProduct);
    }

    return (
        <div>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name='name' placeholder='product name' />
                <br />
                <input type="text" name='Price' placeholder='product Price' />
                <br />
                <input type="text" name='Quantity' placeholder='product Quantity' />
                <br />
                <input type="submit" value="Submit" />
            </form>
            <p style={{ color: 'red' }}><small>{error}</small></p>
        </div>
    );
};

export default ProductForm;