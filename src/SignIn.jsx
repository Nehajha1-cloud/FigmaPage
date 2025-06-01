import React from 'react';
import './App.css';

// import frame from './assets/Image/Frame.png'

import { Link } from 'react-router-dom';
import facebook from './assets/logo/facebook (1).png';
import twitter from './assets/logo/twitter.png';
import insta from './assets/logo/instagram (1).png';
import linkedin from './assets/logo/linkedin (1).png';


export default function SignInPage () {
    return(
        <div className='container'>
            <div className='left'>
                <div className='form'>
                     <h2 className='firstlogo'>LOGO<span className='dott'>.</span></h2>
                    <h2  className='logo'>Sign In to your Account</h2>
                     <button className='google'>
                       Sign In with Google
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt='Google'
                        className='icon'
                        />
                    </button>
                    <div className='divider'>
                        <span>or</span>
                    </div>
                     <label>Email Address</label>
                    <input type='email' placeholder='enter your email address' className='input' />
                     <label>Password</label>
                     <input type='password' placeholder='create your password' className='input' />
                    {/* <span id='togglePassword' className='toggle-icon'>👁️</span> */}
                    <button className='btn'>Create an account</button>


                    <p>
                        Don't have an account?
                        <Link to="/signup" className="underline"> Sign Up</Link>
                    </p>
                    <div className='icons'>
                        <img src={facebook} alt='facebook'></img>
                        <img src={twitter} alt='twitter'></img>
                        <img src={insta} alt='insta'></img>
                        <img src={linkedin} alt='linkedIn'></img>
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
                     {/* <img src={frame} alt='frame'/> */}
                </div>
                <p1>Let your creativity shine--no limits, just possibilities.</p1>
                </div>
                
            </div>
        </div>
    );
}