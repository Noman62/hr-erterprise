import React from 'react';

const Products = (props) => {
    const { name, imageURL } = props.product;
    return (
        <div class="card mt-3" style={{ width: '18rem', marginLeft: '20px', backgroundColor: '#FFFFFF' }}>
            <img style={{ height: '400px' }} src={imageURL} alt="" />
            <div class="card-body">
                
                <div class="container">
                    <div class="row">
                        <div class="col">
                        <h5>{name}</h5>
                         </div>
                        <div class="col">
                        <button type="button" class="btn btn-info">BUY NOW..</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>


    );
};

export default Products;