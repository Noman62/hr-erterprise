import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Orders = () => {
    const { orderId } = useParams();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://safe-gorge-00308.herokuapp.com/product/${orderId}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])
    
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Description</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{orders.name}</td>
                        <td>1</td>
                        <td>{orders.price}</td>
                    </tr>
                    <tr>
                        <td><span class="font-weight-bold">Total</span></td>
                        <td></td>
                        <td>{orders.price}</td>
                    </tr>
                </tbody>
            </table>
       
        </div>
    );
};

export default Orders;