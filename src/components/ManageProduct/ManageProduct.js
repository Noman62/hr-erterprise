import React, { useEffect, useState } from 'react';
import EditProduct from '../EditProduct/EditProduct';

const ManageProduct = () => {
    const [manageProduct,setManageProduct]=useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [])
    return (
        <div>
            <h1>this ManageProduct</h1>
            {
                manageProduct.map(product=><EditProduct product={product} id={product._id}></EditProduct>)
            }
        </div>
    );
};

export default ManageProduct;