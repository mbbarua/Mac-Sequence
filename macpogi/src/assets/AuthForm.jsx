import React, { useState } from 'react';
import './AuthForm.css';

export default function AuthForm({ onLogin }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        if (username === '' || password === '') {
            setMessage('Please fill in all fields');
            return;
        }

        // Simple username and password
        if (username === 'user' && password === 'pass') {
            setMessage('Login successful!');

            // Send username to App.jsx
            onLogin(username);
        } else {
            setMessage('Wrong username or password');
        }
    }

    return (
        <div className="auth-form">

            <h2>Login</h2>

            <form onSubmit={handleSubmit}>

                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">
                    Login
                </button>

            </form>

            <p>{message}</p>

        </div>
    );
}