import React, { useState } from 'react';
import '../css/Signup.css';
// import { Link } from 'react-router-dom';

function Login({ handleClick, onLogin }) {

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
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }


  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>

        <h3>Log In</h3>
        <label className='label'>
          Email address
          <input type="email" name="username" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <br />
        <label className='label'>
          Password
          <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        {errors.length > 0 && (
          <div style={{ color: "red" }}>
            {errors.map((error) => (
              <p key={error}>{error}</p>
            ))}
          </div>
        )}
        <p>Already have an account? <a href='login' onClick={handleClick}>Sign Up</a></p>
      </form>
    </div>
  );
}

export default Login;