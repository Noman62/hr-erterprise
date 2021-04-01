import React from 'react';

const EditProduct = (props) => {
    const {name,weight,price,_id}=props.product;
    const handleDelete=(id)=>{
        fetch(`http://localhost:8080/delete/${id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(result=>{
            if(result)
            {
               
            }
        })
    
    }
    return (
        <div style={{border:'1px solid red'}}>
            <h5>{name}</h5>
            <h5>{weight}</h5>
            <h5>{price}</h5>
            <button onClick={()=>handleDelete(_id)}>Delete</button>
        </div>
    );
};

export default EditProduct;