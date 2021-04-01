import React from 'react';
import { useHistory } from 'react-router';

const Products = (props) => {
    const { name, imageURL,_id } = props.product;
    let history=useHistory();
    const handleProduct=(productId)=>{
        history.push(`/checkOut/${productId}`);
    }
    return (
        <div class="card mt-3" style={{ width: '18rem', marginLeft: '20px', backgroundColor: '#FFFFFF' }}>
            <img style={{ height: '300px' }} src={imageURL} alt="" />
            <div class="card-body">
                
                <div class="container">
                    <div class="row">
                        <div class="col">
                        <p>{name}</p>
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