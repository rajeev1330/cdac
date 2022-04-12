import React, { useState } from 'react'
import '../css/Signup.css';
import { Link } from 'react-router-dom'

const Signup = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');










    return (
        <div className='container'>
            <div className="card">
                <form>
                    <div className="text">
                        <h3>Welcome to ShopCart</h3>
                        <p>Please register yourself to enjoy shopping..</p>
                    </div>

                    <div className="input-text">
                        <i class="fa fa-user"></i>
                        <input type="email" placeholder="Enter first name" name="firstName" id="firstName"
                            value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </div>

                    <div className="input-text">
                        <i class="fa fa-user"></i>
                        <input type="email" placeholder="Enter first name" name="lastName" id="lastName"
                            value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </div>
                    <div className="input-text">
                        <i className="fa fa-envelope"></i>
                        <input type="email" placeholder="Enter your email" name="email" id="email"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="input-text">
                        <i className="fa fa-lock"></i>
                        <input type="password" placeholder="Enter your password" name="password" id="password"
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="input-text">
                        <i className="fa fa-lock"></i>
                        <input type="password" placeholder="Re-enter your password" name="confirmpassword" id="confirmpassword"
                            value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>

                    <div className="input-text">
                        <i class="fa fa-address-card"></i>
                        <input type="password" placeholder="Enter your address" name="address" id="address"
                            value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>

                    <div className="buttons">
                        <button type="submit">Sign up</button>
                    </div>
                    <br></br>
                    <p className="forgot-password text-right">
                        Already registered? <Link to="/signin">sign in</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Signup