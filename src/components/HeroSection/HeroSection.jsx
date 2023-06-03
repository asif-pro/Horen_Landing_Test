import React, { useEffect, useState } from 'react';
import './HeroSection.css';
import soundWave from '../Assets/sound-wave.json'
import Lottie from 'react-lottie';
import ReactCardFlip from 'react-card-flip';

const HeroSection = () => {
  const [isFlipped,setIsFlipped] = useState(true);
  useEffect(()=>{
   const interval = setInterval(()=>{
      console.log("inside interval")
      setIsFlipped(prevState=>!prevState)
    },4000);
    return () => clearInterval(interval);
  },[]);
  return (
  <>
    <div class="hero">
  <div class="content">
    {/* <span>Are You</span> */}
    <h1 className='hero_title'>Our 911 situation for <br/>Dhaka's sound pollution</h1>
    <button className='hero-cta' type="button">Take a Tour</button>
  </div>
  {/* <div >
    <span style={{backgroundImage: `url("https://res.cloudinary.com/dru7kzv3i/image/upload/v1682749697/math_vto9zy.png")`}}></span>
  </div> */}
  {/* <img src="https://res.cloudinary.com/dru7kzv3i/image/upload/v1682749697/math_vto9zy.png"/> */}
  <div class="heroImage">
  <img src="https://res.cloudinary.com/dsuiwxwkg/image/upload/c_scale,w_250/v1684324215/ear_3_zjjqy7.png"/>
  <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
  
  <Lottie 
        options={{
          loop: true,
          autoplay: true,
          animationData: soundWave,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
          }
      }}
        height={300}
        width={300}
      />
        

      <div style={{height:"300px",width:"300px",fontSize:"100px",display:"flex",alignItems:"center",justifyContent:"center"}}>119dB</div>
      </ReactCardFlip>

            
  </div>
  

</div>

  </>
  )
}

export default HeroSection