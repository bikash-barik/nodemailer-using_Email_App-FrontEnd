import React, { useState } from 'react';
import axios from 'axios';
import URLAPI from '../API/URLAPI';
import { Link } from 'react-router-dom';

import '../App.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${URLAPI}/registeruser`, {
                name,
                email,
                password,
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleForgotPassword = async () => {
        try {
            const response = await axios.post(`${URLAPI}/forgotPassword`, {
                email,
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="register-container">
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label>Email</label>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <label>Password</label>
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className="register-btn">
                    Register
                </button>
                <p className="login-link">
                    Already have an account? Login here
                    <Link to="/login">
                        <button>Login</button>
                    </Link>
                </p>
                <button onClick={handleForgotPassword}>Forgot Password</button>
            </form>
        </div>
    );
};

export default Register;
