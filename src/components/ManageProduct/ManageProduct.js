import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [])

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
                <table class="table border shadow">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manageProduct.map((product, index) => (
                            <tr>
                                <th scope="row">{index + 1}</th>
                                <td>{product.name}</td>
                                <td>{product.weight}</td>
                                <td>{product.price}</td>
                                <td>
                                    <button class="btn btn-outline-primary mr-2">Edit</button>
                                    <button onClick={() => handleDelete(product._id)} class="btn btn-danger mr-2">Delete</button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageProduct;