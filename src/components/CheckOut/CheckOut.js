import React from 'react';

const CheckOut = (props) => {
    const {name,imageURL}=props.product;
    return (
        <div>
            <h1>this is check out</h1>
            <h3>{name}</h3>
            <img src={imageURL} alt=""/>
        </div>
    );
};

export default CheckOut;