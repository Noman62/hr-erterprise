import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import { Container, Grid, makeStyles } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';

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
    const [products, setProducts] = useState([]);
    const classes = useStyle();
    useEffect(() => {
        fetch('https://safe-gorge-00308.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <Header/>
            <main className={classes.root} style={{ backgroundColor: '#5cdb95' }} >
                <Container className={classes.containerRoot} maxWidth="md" >
                    <Grid container spacing={3} justify="center">
                        {
                            products.length === 0 && <CircularProgress />
                        }
                        {
                            products.map(product => <Products id={product._id} product={product}></Products>)
                        }
                    </Grid>
                </Container>
            </main>
        </div>
    );
};

export default Home;