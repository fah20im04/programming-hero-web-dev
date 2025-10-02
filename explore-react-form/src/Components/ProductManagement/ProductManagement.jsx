import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductManagementTable from './ProductManagementTable';

const ProductManagement = () => {

    const [products, setProducts] = useState([]);

    const handleAddProduct = newProduct => {
        const newProducts = [...products,newProduct];
        setProducts(newProducts)
    }

    return (
        <div>
            <ProductForm handleAddProduct={handleAddProduct}></ProductForm>
            <ProductManagementTable products={products}></ProductManagementTable>
        </div>
    );
};

export default ProductManagement;