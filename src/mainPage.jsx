import React, {useState } from 'react';
import './App.css';

import Image from './assets/Image/Image.png';

import Image1 from './assets/Image/Image1.png';
import Image2 from './assets/Image/Image2.png';
import Image3 from './assets/Image/Image3.png';
import Image4 from './assets/Image/Image4.png';
import Image5 from './assets/Image/Image1.png';

import create from './assets/logo/create.png';
import publish from './assets/logo/publish.png';
import Share1 from './assets/logo/share1.png';

import Group from './assets/Image/Group.png';

import profile1 from './assets/Image/profile1.png';
import profile2 from './assets/Image/profile2.png';
import profile3 from './assets/Image/profile3.png';
import profile4 from './assets/Image/profile4.png'

import facebook from './assets/logo/facebook.png';
import twitter from './assets/logo/twitter.png';
import insta from './assets/logo/instagram.png';
import linkedin from './assets/logo/linkedin.png';

import Share from './assets/logo/share.png';


const images = [
  { src: Image1, alt: 'Image 1' },
  { src: Image2, alt: 'Image 2' },
  { src: Image3, alt: 'Image 3' },
  { src: Image4, alt: 'Image 4' },
  { src: Image5, alt: 'Image 5' },
];


export default function MainPage ()  {

const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = 4;

  return (
    <div className='main-Page'>
        <header className="header">
  <nav className="main-nav">
    <span className="heading">
      SANDSTORY<span className="dot">.</span>
    </span>

    <ul className="main-nav-list">
      <li><a href="#" className="home">Home</a></li>
      <li><a href="#" className="list">About Us</a></li>
      <li><a href="#" className="list">Stories</a></li>
    </ul>

    <div className="auth-links">
      <a href="#" className="nav-cta">Sign Up</a>
      <a href="#" className="signup">Login</a>
    </div>
  </nav>
</header>

{/* main section */}
<div className='main-section'>
    <div className='hero-section'>
        <div className='description'>
            <p className='first'>All IN ONE PLACE</p>
            <h1>Unleash y<span className='break'>our creativit</span>y <br/>with sandstory</h1>
            <p className='sentence1'>Lorem ipsum dolor sit amet consectetur.Sed nisl commodo mollis tristique sed adipiscing lacus <br/>commodo tincidunt.</p>

            <div className='button'>
                <button className='launch'>Launch Sandstory</button>
            <button className='explore'>Explore more</button>
            </div>
        </div>
        <div className='wrapper'>
            <div className='image'>
            <img src={Image} alt='Image'></img>
            <div className="stars">★ ★ ★ ★ ★</div>
            <div className='emoji'>😍</div>
        </div>
        </div>
    </div>
</div>

{/* Hero section */}
<div className='HeroSection'>
    <div className='Hero'>
        <div className='description'>
            <p className='first'>TOP STORIES</p>
            <h1>Stories that inspire</h1>
        </div>
        <div className="image-gallery">
            {images.map((img, index) => (
              <div className="image-card" key={index}>
                <img src={img.src} alt={img.alt} />
                <p className='caption'>Lorem ipsum dolor sit amet<br/> consectetur</p>
                <p className='author'>Ashley Chui | 2 days ago</p>
                <br/>
                <p className='firstrating'><span className='star'>★</span> 4.8</p>
              </div>
            ))}
          </div>
    </div>
</div>

{/* steps */}
<div className='steps'>
    <div className='easySteps'>
        <div className='desp'>
            <p className='start'>Start your story in 3 easy steps.</p>
            <h1>How it works</h1>
            <p className='sentence'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/>eiusmod tempor incididunt ut.</p>
        </div>
        <div className='list'>
            <div className='sublist'>
                <div className='sublist1'>
                    <img src={create} alt=" create" />
                    <h1>Create</h1>
                    <p className='paragraph'>Upload your images, videos, and text to build your story.</p>
                </div>
                <div className='sublist2'>
                    <img src={publish} alt=" publish" />
                    <h1>Publish</h1>
                    <p className='paragraph'>Customize and finalize your creation.</p>
                </div>
                <div className='sublist3'>
                    <img src={Share1} alt=" share" />
                    <h1>Share</h1>
                    <p className='paragraph'>Reach your audience with a click of a button.</p>
                </div>
            </div>
        </div>
    </div>
</div>


{/* Experience */}
<div className='experience'>
    <div className='community'>
    <p className='firsts'>Start your story in 3 easy steps.</p>
    <h1>Join the Sandstory<br /> Community</h1>
    <p className='sentences'>
        Be part of a vibrant community of storytellers. Exchange ideas,<br />
        gain inspirations and grow together.
    </p>

    <div className='count-wrapper'>
        <div className='count-box'>
            <span className='count'>200k</span>
            <span className='count1'>Stories Shared</span>
        </div>
        <div className='count-box'>
            <span className='count'>100k</span>
            <span className='count1'>Active Creators</span>
        </div>
        <div className='count-box'>
            <span className='count'>300k</span>
            <span className='count1'>Daily Readers</span>
        </div>
    </div>

    <div className='Image2'>
        <div className='exp'>
        <span>How your Experience? </span>
        <span>  😀 😣 🙃 😃</span>
    </div>
    <div className='img'> <img src={Group} alt="Image" /></div>
       
    </div>
</div>
</div>

<div className='about'>
  <div className='info'>
    <p className='firsts'>What they say</p>
    <h1>What Our Community Says About Us</h1>
  </div>

  <div className='carousel-row-container'>
 <div className='card-slider'>
  {[...Array(4)].map((_, index) => (
    <div className={`card ${activeIndex === index ? 'active' : ''}`} key={index}>
      <h1>Best Memories</h1>
      <p>Lorem ipsum dolor sit amet, consectetur elit. Auctor neque sed imperdiet nibh lectus feugiat nunc.</p>
      <div className='rating'>
        ★ ★ ★ ★ <span className='white-star'>★</span> <span className='rating-number'>4.8</span>
      </div>
      <div className='profile'>
        <img src={Group} alt='profile' />
        <div className='profile-text'>
          <p className='name'>Sara Lio</p>
          <p className='company'>ABC Corporation</p>
        </div>
      </div>
    </div>
  ))}
</div>
  </div>

  <div className='pagination'>
    {[...Array(totalCards)].map((_, index) => (
      <span
        key={index}
        className={`dot ${activeIndex === index ? 'active' : ''}`}
        onClick={() => setActiveIndex(index)}
      ></span>
    ))}
  </div>
</div>


<div className="community-section">
  <h2>Join the Sandstory Community</h2>

  <div className="avatars">
    <img src={profile1} alt="User 1" />
    <img src={profile2} alt="User 2" />
    <img src={profile3} alt="User 3" />
    <img src={profile4} alt="User 4" />
    <div className="circle-count">+100K</div>
  </div>

  <p className="description1">
    Be part of a vibrant community of storytellers. Exchange ideas, gain<br/> inspiration, and grow together.
  </p>

  <button className="launch-btn">
    Launch Sandstory <span>↗</span>
  </button>
</div>

<footer className="footer">
      <div className="footer-top">
        <div className="footer-col brand">
          <h2>SANDSTORY<span className="dot">.</span></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum rhoncus vulputate.</p>
          <div className="social-icons">
            <p>Follow us:</p>
            <img src={facebook} alt="Facebook" className='facebook'/>
            <img src={insta} alt="Instagram" className='insta' />
            <img src={twitter} alt="Twitter" className='twitter' />
            <img src={linkedin} alt="LinkedIn" className='linkedin' />
            </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>About Us</li>
            <li>Features</li>
            <li>Activities</li>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Categories</h4>
          <ul>
            <li>Community</li>
            <li>Outdoors</li>
            <li>Indoors</li>
            <li>Toddlers Friendly</li>
            <li>Parents Connect</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Get in Touch</h4>
          <p>Question or feedback?<br />We’d love to hear from you</p>
          <div className="email-box">
            <input type="email" placeholder="Your Email" />
            <button><img src={Share} alt='share' className='share-icon'></img></button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Sandstory © 2024 All Rights Reserved</p>
        <div className="footer-links">
          <a href="#">Privacy Policy  |</a>  <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>


      
    </div>
  )
}

