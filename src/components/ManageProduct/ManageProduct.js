import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import './ManageProduct.css';


const ManageProduct = () => {
    const [manageProduct, setManageProduct] = useState([]);
    useEffect(() => {
        fetch('https://afternoon-wildwood-57632.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProduct(data))
    }, [])
  
   

    const handleDelete = (id) => {
        fetch(`https://afternoon-wildwood-57632.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    const history = createHistory();
                    history.go(0)
                }
            })

    }
    return (
        <div>

            <div className="sidenav">
                <Link className="nav-link text-white" aria-current="page" to="/manageProduct">Manage Product</Link>
                <Link className="nav-link text-white" aria-current="page" to="/admin">Add Product</Link>
                <Link className="nav-link text-white" aria-current="page" to="/home">Home</Link>
            </div>

            <div className="main">
                <table className="table border shadow">
                    <thead style={{backgroundColor:'#2C5F2DFF'}}>
                        <tr>
                            <th className="text-white" scope="col">#</th>
                            <th className="text-white" scope="col">First</th>
                            <th className="text-white" scope="col">Last</th>
                            <th className="text-white" scope="col">Handle</th>
                            <th className="text-white" scope="col">Action</th>
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
                                    <button className="btn btn-outline-primary bg-warning mr-2">Edit</button>
                                    <button onClick={() => handleDelete(product._id)} className="btn btn-danger mr-2">Delete</button>

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