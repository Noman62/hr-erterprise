import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import { Container, Grid, makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        background: '#f8f8f8',
        minHeight: 'calc(100vh - 65px)'
    },
    containerRoot: {
        paddingBottom: theme.spacing(3),
        paddingTop: theme.spacing(11)
    }
}));

const Home = () => {
    const [products,setProducts]=useState([]);
    const classes =useStyle();
    useEffect(()=>{
 fetch('http://localhost:8080/products')
 .then(res=>res.json())
 .then(data=>setProducts(data))
    },[])
    return (
        <div>
        <Header/>
        
          <main className={classes.root} style={{backgroundColor:'#FFFFFF' }} >
          <Container className={classes.containerRoot} maxWidth="md" >
              <Grid container spacing={3} justify="center">
                  {
                      products.map(product=><Products product={product}></Products>)
                  }
              </Grid>
          </Container>
      </main>
      </div>
    );
};

export default Home;