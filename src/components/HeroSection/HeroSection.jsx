import React from 'react'
import './HeroSection.css'
import HeroImage from '../Assets/hero.png'

const HeroSection = () => {
  return (
  <>
    <div class="hero">
  <div class="content">
    <span>Are You</span>
    <h1>Are You<br/> Noise Conscious ?</h1>
    <button className='hero-cta' type="button">Take a Tour</button>
  </div>
  {/* <div >
    <span style={{backgroundImage: `url("https://res.cloudinary.com/dru7kzv3i/image/upload/v1682749697/math_vto9zy.png")`}}></span>
  </div> */}
  {/* <img src="https://res.cloudinary.com/dru7kzv3i/image/upload/v1682749697/math_vto9zy.png"/> */}
  <div class="heroImage">
  <img src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1683547627/hero-mobile_snfhz4.png"/>
  
  </div>
  

</div>

  </>
  )
}

export default HeroSection