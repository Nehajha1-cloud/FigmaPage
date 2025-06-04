import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './App.css';

import facebook from './assets/logo/facebook.png';
import twitter from './assets/logo/twitter.png';
import insta from './assets/logo/instagram.png';
import linkedin from './assets/logo/linkedin.png';

export default function SignInPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // ✅ Hardcoded user credentials
  const users = [
    { email: 'neha@gmail.com', password: '1234' }
  ];

  const handleLogin = () => {
    const matchedUser = users.find(user => user.email === email && user.password === password);
    if (matchedUser) {
      navigate('/main'); // ✅ Redirect to MainPage
    } else {
      setErrorMsg('Invalid email or password');
    }
  };

  return (
    <div className='container'>
      <div className='left'>
        <div className='form'>
          <h2 className='firstlogo'>LOGO<span className='dott'>.</span></h2>
          <h2 className='logo'>Sign In to your Account</h2>

          <button className='google'>
            Sign In with Google
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt='Google'
              className='icon'
            />
          </button>

          <div className='divider'><span>Or</span></div>

          <label>Email Address</label>
          <input
            type='email'
            placeholder='Enter your email address'
            className='input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label>Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="password-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className={`password-toggle-icon ${showPassword ? 'show' : 'hide'}`}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              👁️‍🗨️
            </span>
          </div>

          {errorMsg && <p className="error-message">{errorMsg}</p>}

          <button className='btn' onClick={handleLogin}>Login</button>

          <p>
            Don't have an account?
            <Link to="/signup" className="underline"> Sign Up</Link>
          </p>

          <div className='icons'>
            <img src={facebook} alt='facebook' />
            <img src={twitter} alt='twitter' />
            <img src={insta} alt='insta' />
            <img src={linkedin} alt='linkedIn' />
          </div>
        </div>
      </div>

      <div className='right'>
        <div className='right-box'>
          <div className='box'>
            <h3>Bring Your Vision to<br /> Real Life</h3>
            <p>Join Sandstory and unlock the potential to create,
              share, and connect. Showcase your talent, collaborate with like-minded individuals,
              and inspire the world through your stories.</p>
          </div>
          <p className='lastline'>Let your creativity shine--no limits, just possibilities.</p>
        </div>
      </div>
    </div>
  );
}