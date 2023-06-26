import React, { useState } from 'react';
import axios from 'axios';
import URLAPI from './API';
import { Link } from 'react-router-dom';
import "./login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${URLAPI}/login`, {
                email,
                password,
            });

            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
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

                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/register">Register here</Link>
            </p>
        </div>
    );
};

export default Login;
