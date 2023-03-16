import React from 'react'
import './Aboutstyle.css'
import profPic from './Images/newImage.jpg'


const About = () => {
  return (
      <div className='aboutstyle' id="section2">
        <div className="container" data-aos="fade-right">
          <div className="profpic" style={{float: 'right'}}>
            <img src={profPic} height="400px" />
          </div>
          <div className="about-heading">
            <h1 id='section2' style={{marginTop: '20px'}}>About</h1>
          </div>
          <p className="about-center" style={{marginTop: '10px'}}>
            Hello! I'm Saumya Herath, I am a talented and ambitious girl currently studying BSc (Hons) in Information Technology at the University of Sri Jayewardenepura, Colombo. I have a deep passion for coding, and an interest in new designs, and I like to spend my time experiencing lifestyles in new cultures. Moreover, I'm looking for creative and innovative ideas to expand to improve music, travel and skills. and hopes to make a significant impact in the tech world and beyond.
          </p>
          <br />
          <p>
            Here are a few technologies I've been working with recently:
            <li>Python</li>
            <li>Java</li>
            <li>ReactJs</li>
            <li>JavaScript</li>
            <li>Wordpress</li>
          </p>
        </div>
        <div className="landing-text">
          <h6></h6>
        </div>
      </div>
  )
}

export default About;
