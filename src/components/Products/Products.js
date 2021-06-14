import React from 'react';
import { useHistory } from 'react-router';
import './Products.css';

const Products = (props) => {
    const { name, imageURL,_id } = props.product;
    let history=useHistory();
    const handleProduct=(productId)=>{
        history.push(`/checkOut/${productId}`);
    }
    return (
        <div class="card mt-5 mr-3 shadow  p-3 mb-5 bg-body rounded" style={{ width: '18rem',backgroundColor:'#B9E4C9' }}>
            <img  style={{ height: '300px' }} src={imageURL} alt="" />
            <div class="card-body">
                
                <div class="container">
                    <div class="row">
                        <div class="col">
                        <p className="font-weight-bold ">{name}</p>
                         </div>
                        <div class="col">
                        <button type="button" onClick={()=>handleProduct(_id)} class="btn btn-info">BUY NOW..</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default Products;