import React, { useState } from "react";

export default function AuthForm({
    isRegistering,
    setIsRegistering,
    onLogin,
    onRegister
}) {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleLogin(e) {
        e.preventDefault();
        if (username === "" || password === "") {
            alert("Please fill in all fields");
            return;
        }
        // Login credentials
        if (username === "user" && password === "pass") {
            alert("Login successful!");
            onLogin(username);
        } else {
            alert("Wrong username or password");
        }
    }

    function handleRegister(e) {
        e.preventDefault();
        if (
            username === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {
            alert("Please fill in all fields");
            return;
        }
        if (username.length < 3) {
            alert("Username must be at least 3 characters long");
            return;
        }
        if (password.length < 6) {
            alert("Password must be at least 6 characters long");
            return;
        }
        if (password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        if (!email.endsWith("@gmail.com")) {
            alert("Email must be a valid Gmail address");
            return;
        }
        alert("Registration successful!");
        onRegister(username);
        setIsRegistering(false);
        
    } if (isRegistering) {
        return (
            <div className="auth-form">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input
                        type="email"
                        placeholder="Gmail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Create Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(e.target.value)
                        }
                    />
                    <button type="submit"> Register </button>
                       
                </form>
                <p> Already have an account?</p>
                <button  type="button" onClick={() => setIsRegistering(false)} > Login </button>
            </div>
        );
    }
    return (
        <div className="auth-form">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
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

            <p>Don't have an account?</p>

            <button type="button" onClick={() => setIsRegistering(true)} > Register </button>
        </div>
    );
}