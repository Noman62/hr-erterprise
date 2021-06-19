import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';
import logo from './logo.png';

const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div style={{backgroundColor:'#37966F'}}>
        <nav class="navbar navbar-light">
            <div class="container-fluid">
            <img style={{width:'12%'}} src={logo} alt=""/>
                <div class="d-flex">
                    <nav class="nav">
                      
                        <Link class="nav-link text-dark nav-hover font-weight-bold" aria-current="page" to="/home">Home</Link>
                        {/* <Link class="nav-link text-dark nav-hover font-weight-bold" aria-current="page" to="/order">Orders</Link> */}
                        <Link class="nav-link text-dark nav-hover font-weight-bold" aria-current="page" to="/admin">Admin</Link>
                        <Link class="nav-link text-dark nav-hover font-weight-bold" aria-current="page" to="/contactUs">Contact Us</Link>
                        <Link class="nav-link text-dark nav-hover font-weight-bold" aria-current="page" to="/login">Login</Link>
                        <p>{loggedInUser.displayName}</p>
                        
                    
                    </nav>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Header;