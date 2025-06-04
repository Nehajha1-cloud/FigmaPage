import React, { useState } from 'react';
import './App.css';

import { Link } from 'react-router-dom';
import facebook from './assets/logo/facebook.png';
import twitter from './assets/logo/twitter.png';
import insta from './assets/logo/instagram.png';
import linkedin from './assets/logo/linkedin.png';

export default function SignUp  () {
    const [showPassword, setShowPassword] = useState(false);
  return (
<div className='container'>
    <div className='right'>
                <div className='right-box'>
                    <div className='box'>
                    <h3>Bring Your Vision to Real Life</h3>
                    <p>Join Sandstory and unlock the potentional to create,
                     share, and connect. Showcase you talent, collaborate with like-minded individuals,
                     and inspires the world through your stories.</p>
                </div>
                <p1>Let your creativity shine--no limits, just possibilities.</p1>
                </div>
                
            </div>
            <div className='left'>
                <div className='form'>
                     <h2 className='firstlogo'>LOGO.</h2>
                    <h2 className='logo'>Create an Account</h2>
                    <button className='google'>
                       Create account with Google
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt='Google'
                        className='icon'
                        />
                    </button>
                    <div className='divider'>
                        <span>Or</span>
                    </div>
                     <label>Email Address</label>
                    <input type='email' placeholder='Enter your email address' className='input' />
                    <label>Full Name</label>
                    <input type='email' placeholder='Enter your full name' className='input' />
                     <label>Password</label>
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
                    {/* <span id='togglePassword' className='toggle-icon'>👁️</span> */}
                    <button className='btn'>Create an account</button>

                    <p>Already have an account?
                    <Link to="/" className="underline"> Login</Link>
                    </p>
                    <div className='icons'>
                        <img src={facebook} alt='facebook'></img>
                        <img src={twitter} alt='twitter'></img>
                        <img src={insta} alt='insta'></img>
                        <img src={linkedin} alt='linkedIn'></img>
                    </div>

                
                </div>
            </div>

        </div>
  )
}


