import React from 'react'
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <img src='./images/logo.png' width="150px" />
                    </div>
                    <div className="col-lg-9">
                        <li><Link to="/" active>Home</Link></li>
                        <li><Link to="/products">Products</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                        <li><Link to="/signup">Sign Up</Link></li>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar