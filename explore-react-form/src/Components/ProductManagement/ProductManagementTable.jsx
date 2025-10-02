import React from 'react';

const ProductManagementTable = ({ products }) => {
    return (
        <div>
            <h3>Products: {products.length}</h3>

            <table>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product,index) => 
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>Name: {
                                product.name}</td>
                                <td>Price: {product.price}</td>
                                <td>Quantity: {product.quantity}</td>
                                <td></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductManagementTable;