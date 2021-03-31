import React, { useEffect, useState } from 'react';
import CheckOut from '../CheckOut/CheckOut';
import Header from '../Header/Header';

const Home = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
 fetch('http://localhost:8080/products')
 .then(res=>res.json())
 .then(data=>setProducts(data))
    },[])
    return (
        <div>
        <Header/>
        {
            products.map(product=><CheckOut product={product}></CheckOut>)
        }
        </div>
    );
};

export default Home;