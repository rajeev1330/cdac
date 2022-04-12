import React from 'react'
import '../css/Footer.css';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <>
            <div className="footercontainer">
                <div className="footerrow">
                    <div className="footer-col-1">
                        <img src="/images/footerlogo.png" width="250px" height="80px" />
                        <p>Our Purpose is to improve and consolidate our position in the market for goods and services.</p>
                    </div>
                    <div className="footer-col-2">
                        <h3>Useful Links</h3>
                        <ul>
                            <li>Coupons</li>
                            <li><Link to="/contact">Contact Us</Link></li>
                            <li>Return Policy</li>
                            <li>Join Affiliate</li>
                        </ul>
                    </div>
                    <div className="footer-col-3">
                        <h3>Follow Us</h3>
                        <ul>
                            <li>Facebook</li>
                            <li>Twitter</li>
                            <li>Instagram</li>
                            <li>Youtube</li>
                        </ul>
                    </div>
                </div>
                <br></br>
                <br></br>
                <hr />
                <div className="copyright">
                    <p><i className="fas fa-copyright"></i>
                        Copyright 2020 - Vaibhav Katkar</p>
                </div>
            </div>

        </>
    )
}

export default Footer