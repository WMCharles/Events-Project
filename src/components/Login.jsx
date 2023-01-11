import React, { useState } from 'react';
import '../css/Signup.css';
// import { Link } from 'react-router-dom';

function Login({handleClick}) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // validate form fields
    if (fullName.trim() === '' || email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
      // display an error message
      return;
    }
    if (password !== confirmPassword) {
      // display an error message
      return;
    }
    // submit form
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>

        <h3>Log In</h3>
        <label className='label'>
          Email address
          <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <br />
        <label className='label'>
          Password
          <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <p>Already have an account? <a href='login' onClick={handleClick}>Sign Up</a></p>
      </form>
    </div>
  );
}

export default Login;