import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ManageProduct from '../ManageProduct/ManageProduct';

const CheckOut = () => {
  const {productId}=useParams();
  const [product,setProduct]=useState([]);
  useEffect(()=>{
    fetch(`http://localhost:8080/product/${productId}`)
    .then(res=>res.json())
    .then(data=>setProduct(data));
  },[])
    return (
        <div>
            <h5>{product.name}</h5>
            <p>{product.price}</p>
            
         
        </div>
    );
};

export default CheckOut;