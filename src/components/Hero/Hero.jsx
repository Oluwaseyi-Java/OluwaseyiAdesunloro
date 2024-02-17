import React from 'react'
import "./hero.css"

const Hero = () => {
  return (
      <div className='Hero'>

            <video width="200px" height="200px" autoplay >
                <source src='https://www.olufemioye.com/assets/videos/hello.mp4' type='video/mp4'/>

            </video>
        
          <div className='HeroContent'>
          <h1>Software Developer (Frontend)</h1>
              <p>Creating beautiful websites you will love.</p>
              <p>I'm a Freelance Web and Android Developer Based in Nigeria, and I'm very passionate and dedicated to my work. With 2 years plus experience as a professional Full Stack Developer. I have acquired the skills necessary to build great and premium websites.</p>

              <p>I imagine, design, code and form your idea turning it real, everything is possible if you're passionate about it, and we lose track of time while doing our jobs, expolre this website to find out what I can do for you</p>
          </div>
      </div>
  )
}

export default Hero