import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/Signin.css';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => { }
    //     e.preventDefault();
    //     dispatch(signin(email, password));
    // }
    return (
        <>
            <div className="container">
                <div className="card">
                    <div className="text">
                        <h3>Welcome Back</h3>
                        <p>Enter your credentials to access your account.</p>
                    </div>
                    <form onSubmit={submitHandler}>
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

                        <div className="buttons">
                            <button type="submit">Sign in</button>
                        </div>
                        <div className="forgot">
                            <p>Dont't have an account? <Link to="/signup">     Register</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Signin