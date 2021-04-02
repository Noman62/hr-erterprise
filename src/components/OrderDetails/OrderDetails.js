import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const OrderDetails = () => {
    const { orderId } = useParams();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://safe-gorge-00308.herokuapp.com/product/${orderId}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [])

    const { register, handleSubmit,errors } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const onSubmit = data => {
    
        const orderDetails = { ...loggedInUser, shipment: data,order:orders, orderTime: new Date() }
        fetch('https://safe-gorge-00308.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
          })
            .then(res => res.json())
            .then(data => {
              if (data) {
                alert('your order successfully');
              }
            })
      }
    return (
        <div>
            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>

                <input name="name" defaultValue={loggedInUser.displayName} ref={register({ required: true })} placeholder="Your Name" />
                {errors.name && <span className='error'>Name is required</span>}
                <br/>
                <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your email" />
                {errors.email && <span className='error'>Email is required</span>}
                <br/>
                <input name="address" ref={register({ required: true })} placeholder="Your address" />
                {errors.address && <span className='error'>Address is required</span>}
                <br/>
                <input name="phone" ref={register({ required: true })} placeholder="Your phone" />
                {errors.phone && <span className='error'>Phone Number is required</span>}
                <br/>
                <input type="submit" />
            </form>
        </div>
    );
};

export default OrderDetails;