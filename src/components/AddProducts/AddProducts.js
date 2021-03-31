import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const eventData={
            name:data.name,
            price:data.price,
            weight:data.weight,
            imageURL:imageURL
        };
        const url=`http://localhost:8080/addProduct`;
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res=>console.log('server side response'))
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
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="name" defaultValue="name" ref={register} />
            <br/>
            <input name="price" defaultValue="Enter price" ref={register} />
            <br/>
            <input name="weight" defaultValue="Enter Weight" ref={register} />
            <br/>
            <input name="exampleRequired" type="file" onChange={handleImageUpload} />
            <br/>
            {errors.exampleRequired && <span>This field is required</span>}
            <input type="submit" />
        </form>
    );
};

export default AddProducts;