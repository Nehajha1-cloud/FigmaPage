import React, { useState } from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import facebook from './assets/logo/facebook .png';
import twitter from './assets/logo/twitter.png';
import insta from './assets/logo/instagram .png';
import linkedin from './assets/logo/linkedin .png';

export default function SignInPage () {
  const [showPassword, setShowPassword] = useState(false);

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
          <div className='divider'>
            <span>Or</span>
          </div>
          <label>Email Address</label>
           <input type='email' placeholder='Enter your email address' className='input' />
            <label>password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="password-input"
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className={`password-toggle-icon ${showPassword ? 'show' : 'hide'}`}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              👁️‍🗨️
            </span>
          </div>

          <button className='btn'>Create an account</button>

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
            <h3>Bring Your Vision to<br/> Real Life</h3>
            <p>Join Sandstory and unlock the potentional to create,
              share, and connect. Showcase you talent, collaborate with like-minded individuals,
              and inspires the world through your stories.</p>
          </div>
          <p className='lastline'>Let your creativity shine--no limits, just possibilities.</p>
        </div>
      </div>
    </div>
  );
}
