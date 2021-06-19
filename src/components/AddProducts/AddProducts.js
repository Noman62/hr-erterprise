import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddProduct.css';

const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            weight: data.weight,
            imageURL: imageURL
        };

        const url = `https://safe-gorge-00308.herokuapp.com/addProduct`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log('server side response'))
        console.log(eventData);
    };

    const handleImageUpload = (event) => {
        console.log(event.target.files);
        const imageData = new FormData();
        imageData.set('key', '899529fb7f528380ab042a1e2ee48121');
        imageData.append('image', event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(res => {
                console.log(res.data.data.display_url);
                setImageURL(res.data.data.display_url);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (

        <div>
            <div className="sidenav">
                <Link className="nav-link text-white" aria-current="page" to="/manageProduct">Manage Product</Link>
                <Link className="nav-link text-white" aria-current="page" to="/admin">Add Product</Link>
                <Link className="nav-link text-white" aria-current="page" to="/home">Home</Link>
            </div>

            <div className="shadow p-3 mb-5 bg-body rounded" style={{marginLeft:'40%',marginTop:'5%',width:'400px',backgroundColor:'#2C5F2DFF'}}>
                <form style={{marginLeft:'5%'}}  onSubmit={handleSubmit(onSubmit)}>
                    <input className="mb-2 btn-lg btn-block rounded-pill"  name="name" defaultValue="" placeholder="Enter Product Name" ref={register} />
                    <br />
                    <input className="mb-2 btn-lg btn-block rounded-pill" name="price" defaultValue="" placeholder="Enter Product price" ref={register} />
                    <br />
                    <input className="mb-2 btn-lg btn-block rounded-pill" name="weight" defaultValue="" placeholder="Enter Product weight" ref={register} />
                    <br />
                    <input className="mb-2 btn-lg btn-block " name="exampleRequired" type="file" onChange={handleImageUpload} />
                    <br />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <input className="rounded-pill btn-lg btn-block btn btn-success" type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddProducts;