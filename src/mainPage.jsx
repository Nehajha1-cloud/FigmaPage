import React from 'react';
import './App.css';

import Image from './assets/Image/blank Image.jpg';

import Image1 from './assets/Image/Image1.jpg';
import Image2 from './assets/Image/Image2.jpg';
import Image3 from './assets/Image/Image3.jpg';
import Image4 from './assets/Image/Image4.jpg';
import Image5 from './assets/Image/Image1.jpg';

import create from './assets/logo/create.png';
import publish from './assets/logo/publish.png';
import Share from './assets/logo/share (2).png';

import Group from './assets/Image/group.jpg';

const images = [
  { src: Image1, alt: 'Image 1', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { src: Image2, alt: 'Image 2', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { src: Image3, alt: 'Image 3', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { src: Image4, alt: 'Image 4', description: 'Lorem ipsum dolor sit amet consectetur.' },
  { src: Image5, alt: 'Image 5', description: 'Lorem ipsum dolor sit amet consectetur.' },
];

export default function MainPage ()  {
  return (
    <div className='main-Page'>
        <header className="header">
  <nav className="main-nav">
    <span className="heading">
      SANDSTORY<span className="dot">.</span>
    </span>

    <ul className="main-nav-list">
      <li><a href="" className="home">Home</a></li>
      <li><a href="" className="list">About Us</a></li>
      <li><a href="" className="list">Stories</a></li>
    </ul>

    <div className="auth-links">
      <a href="" className="nav-cta">Login</a>
      <a href="" className="signup">Sign Up</a>
    </div>
  </nav>
</header>

{/* main section */}
<div className='main-section'>
    <div className='hero-section'>
        <div className='description'>
            <p className='first'>All IN ONE PLACE</p>
            <h1>Unleash your creativity <br/>with sandstory</h1>
            <p>Lorem ipsum dolor sit amet consectetur.Sed nisl commodo mollis tristique sed adipiscing lacus <br/>commodo tincidunt.</p>

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
                <p>{img.description}</p>
                <p1>Ashley Chui | 2 days ago</p1>
                <br/>
                <p2><span className='star'>★</span> 4.8</p2>
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
                    <p>Upload your images, videos, and text to build your story.</p>
                </div>
                <div className='sublist2'>
                    <img src={publish} alt=" publish" />
                    <h1>Publish</h1>
                    <p>Upload your images, videos, and text to build your story.</p>
                </div>
                <div className='sublist3'>
                    <img src={Share} alt=" share" />
                    <h1>Share</h1>
                    <p>Upload your images, videos, and text to build your story.</p>
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
    <h1>With Our Community Say About Us</h1>
  </div>

  <div className='card-info'>
    <div className='card'>
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
    <div className='card'>
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
    <div className='card'>
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
    <div className='card'>
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
  </div>
</div>


<div className="community-section">
  <h2>Join the Sandstory Community</h2>

  <div className="avatars">
    <img src={Group} alt="User 1" />
    <img src={Group} alt="User 2" />
    <img src={Group} alt="User 3" />
    <img src={Group} alt="User 4" />
    <div className="circle-count">+100K</div>
  </div>

  <p className="description">
    Be part of a vibrant community of storytellers. Exchange ideas, gain inspiration, and grow together.
  </p>

  <button className="launch-btn">
    Launch Sandstory <span>↗</span>
  </button>
</div>


      
    </div>
  )
}

