import React from 'react';
import { Link } from 'react-router-dom';
import './EditProduct.css';
const EditProduct = (props) => {
    const { name, weight, price, _id } = props.product;
    const handleDelete = (id) => {
        fetch(`http://localhost:8080/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {

                }
            })

    }
    return (
        <div>
            <div class="sidenav">
                <Link class="nav-link text-white" aria-current="page" to="/manageProduct">Manage Product</Link>
                <Link class="nav-link text-white" aria-current="page" to="/admin">Add Product</Link>
                <Link class="nav-link text-white" aria-current="page" to="/edit">Edit Product</Link>
            </div>

            <div class="main">
                <div style={{ border: '1px solid red' }}>
                    <h5>{name}</h5>
                    <h5>{weight}</h5>
                    <h5>{price}</h5>
                    <button onClick={() => handleDelete(_id)}>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default EditProduct;