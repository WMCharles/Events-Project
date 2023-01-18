import React, { useState } from 'react'
import '../css/LoginV1.css';

export default function LoginV1({ handleClick, onLogin }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState([]);
    // eslint-disable-next-line no-unused-vars
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("https://event-plug.onrender.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }).then((r) => {
            setIsLoading(false);
            if (r.ok) {
                alert("Logged in successfully");
                r.json().then((user) => onLogin(user));
            } else {
                r.json().then((err) => setErrors(err.errors));
                alert("Log in failed");
            }
        });
    }

    return (
        <div className="reg-container">
            <form onSubmit={handleSubmit} id="form">
                <h1>Login</h1>
                <div className="input-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div></div>
                <div className="input-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                {errors.length > 0 && (
                    <div className='input-control' style={{ color: "red" }}>
                        {errors.map((error) => (
                            <p key={error}>{error}</p>
                        ))}
                    </div>
                )}
                <button type="submit" disabled={isLoading ? 'true' : ""}>{isLoading ? "Logging in..." : "Login"}</button>
                <div className="input-control">
                    <p>Don't Have an Account? <a href="login" onClick={handleClick} >Register</a></p>
                </div>
            </form>
        </div>
    )
}
