import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    return (
        <div >
        <nav class="navbar navbar-light bg-info">
            <div class="container-fluid">
                <a class="navbar-brand">HR ENTERPRISE</a>
                <div class="d-flex">
                    <nav class="nav">
                      
                        <Link class="nav-link text-dark" aria-current="page" to="/home">Home</Link>
                        <Link class="nav-link text-dark" aria-current="page" to="/order">Orders</Link>
                        <Link class="nav-link text-dark" aria-current="page" to="/admin">Admin</Link>
                        <Link class="nav-link text-dark" aria-current="page" to="/deal">Deals</Link>
                        <button type="button" class="btn btn-warning">
                        <Link class="nav-link text-dark" aria-current="page" to="/login">Login</Link></button>
                        <p>{loggedInUser.displayName}</p>
                        
                    
                    </nav>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Header;