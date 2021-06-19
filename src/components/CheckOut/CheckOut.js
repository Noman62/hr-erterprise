import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import CircularProgress from '@material-ui/core/CircularProgress';
import './CheckOut.css';

const CheckOut = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);


  useEffect(() => {
    fetch(`https://safe-gorge-00308.herokuapp.com/product/${productId}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [])

  let history = useHistory();
  const handleCheckOut = (orderId) => {
    window.alert("Order Successful");
  }

  return (
    <div style={{ marginLeft: '10%' }} className="w-75 border shadow-sm mt-5 bg-light ">
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

      <div>
        <button style={{ marginLeft: '75%' }} href="#myModal" class="trigger-btn" data-toggle="modal" type="button" class="btn btn-success">check Out</button>
      </div>

      <div id="myModal" class="modal fade">
        <div class="modal-dialog modal-confirm">
          <div class="modal-content">
            <div class="modal-header">
              <div class="icon-box">
                <i class="material-icons">&#xE876;</i>
              </div>
              <h4 class="modal-title w-100">Awesome!</h4>
            </div>
            <div class="modal-body">
              <p class="text-center">Your Order has been confirmed. Check your email for detials.</p>
            </div>
            <div class="modal-footer">
              <button class="btn btn-success btn-block" data-dismiss="modal">OK</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;