import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';

const CheckOut = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/product/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [])

  let history = useHistory();
  const handleCheckOut = (orderId) => {
    history.push(`/order/${orderId}`);
  }

  return (
    <div>
      {
        product.length === 0 && <CircularProgress />
      }
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
            <td>{product.name}</td>
            <td>1</td>
            <td>{product.price}</td>
          </tr>
          <tr>
            <td><span class="font-weight-bold">Total</span></td>
            <td></td>
            <td>{product.price}</td>
          </tr>
        </tbody>
      </table>
      <button style={{ marginLeft: '75%' }} onClick={() => handleCheckOut(product._id)} type="button" class="btn btn-success">check Out</button>
    </div>
  );
};

export default CheckOut;