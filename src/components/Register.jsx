import React, { useState } from 'react'
import '../css/LoginV1.css';

export default function Register({ handleClick, onLogin }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [role, setRole] = useState('User')
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("https://event-plug.onrender.com/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                email,
                password,
                password_confirmation: passwordConfirmation,
                role
            }),
        }).then((r) => {
            if (r.ok) {
                setIsLoading(false)
                r.json().then((user) => onLogin(user));
            } else {
                setIsLoading(false)
                r.json().then((err) => setErrors(err.errors));
            }
        });
    }

    return (
        <div class="reg-container">
            <form onSubmit={handleSubmit} id="form">
                <h1>Sign Up</h1>
                <div class="input-control">
                    <label htmlFor="username">Full Name</label>
                    <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="input-control">
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div class="input-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div class="input-control">
                    <label htmlFor="password">Confirm Password</label>
                    <input type="password" id="password2" name="passwordConfirmation" value={passwordConfirmation} onChange={(event) => setPasswordConfirmation(event.target.value)} />
                </div>
                <div className="input-control">
                    <label htmlFor="password">Register as</label>
                    <select onChange={(e) => setRole(e.target.value)} value={role} className="create-event-select" id="country" name="country">
                        <option value="User">Regular User</option>
                        <option value="Organizer">Event Organizer</option>
                    </select>
                </div>
                {errors.length > 0 && (
                    <div className='input-control' style={{ color: "red" }}>
                        {errors.map((error) => (
                            <p key={error}>{error}</p>
                        ))}
                    </div>
                )}
                <button type="submit" disabled={isLoading ? 'true' : ""}>{isLoading ? "Signing up..." : "Sign Up"}</button>
                <div className="input-control">
                    <p>Don't Have an Account? <a href="register" onClick={handleClick}>Login</a></p>
                </div>
            </form>
        </div>
    )
}
