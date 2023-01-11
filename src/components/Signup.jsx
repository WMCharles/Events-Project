import React, { useState } from 'react';
import '../css/Signup.css';
// import { Link } from 'react-router-dom';

function SignupForm() {
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

        <h3>Sign Up</h3>
        <label className='label'>
          Full Name
          <input type="text" value={fullName} onChange={(event) => setFullName(event.target.value)} />
        </label>
        <br />
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
        <label className='label'>
          Confirm Password
          <input type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </label>
        <br />
        <button type="submit">Submit</button>
        <p>Already have an account? <a href='login'>Login</a></p>
      </form>
    </div>
  );
}

export default SignupForm;