import logo from './logo.svg';
import './App.css';
import { Animation } from "react-scroll-motion";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Navbar from './Navbar/Nabar';
import Particle from './Particle/Particle'
import './Fonts/Figtree/Figtree-VariableFont_wght.ttf'
import './Fonts/Figtree/Figtree-Italic-VariableFont_wght.ttf'
import HeroSection from './components/HeroSection/HeroSection';
import CircularCarousel from './components/CircularCarousel/CircularCarousel';
import Logoo from './components/Logo/Logoo';
// import Carosul from './components/Carosoul/Carosul';
import Logo from './components/Logo/Logo';
import DashboardSection from './components/DashboardSection/DashboardSection';
import yellowDashboard from './components/Assets/dashboard-yellow.json'
import mobileNotification from './components/Assets/mobile-notification.json'
import Lottie from 'react-lottie';
import CallToAction from './components/CallToAction/CallToAction';
import LeaderBoard from './components/LeaderBoard/LeaderBoard';
import Map from './components/Map/Map';
import Footer from '../src/components/Footer/Footer'
import { useRef } from 'react';

function App() {
 const ref = useRef();
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  const handleClick = () => {
    console.log('inside handle click')
    ref.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
    
    <div className="App">
    <Navbar></Navbar>
    
<ScrollContainer>

  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -900))}>
  <div style={{width:'100vw', height:'100vh'}}>
  <div>
  <HeroSection handleTakeATour = {handleClick}></HeroSection>

      </div>

  </div>
    </Animator>
  </ScrollPage>
  
  <ScrollPage>
    <div ref={ref} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span >
        <span style={{display:"flex",justifyContent:"center"}}>
          <Animator animation={MoveIn(-1000, 0)}>
            <p  className="talk-bubble tri-right border round btm-right-in"
            style={{position:"relative",marginRight:"10vw", maxWidth:"15vw",fontSize:"20px",wordWrap:"break-word"}}
             >
                Our 360 degree solution for noise pollution in Dhaka
            </p>
          </Animator>
          <Animator animation={MoveIn(1000, 0)}>
            
          <Lottie 
              options={{
                loop: true,
                autoplay: true,
                animationData: yellowDashboard,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
                }
            }}
              height={200}
              width={300}
            />
          </Animator>
        </span>
        <span > 
          <img src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1683540865/ezgif.com-crop_vfaiak.gif" alt="" />
        </span>
        <span style={{display:"flex",justifyContent:"center"}}>
       
          <Animator animation={MoveOut(1000, 0)}>
          <p  className="talk-bubble tri-right border round top-left-in" 
          style={{position:"relative",marginLeft:"10vw", minWidth:"15vw",fontSize:"20px",wordWrap:"break-word"}}>
                 Make better noise decisions using an analytics dashboard and mobile app 
            </p>
          </Animator>

          <Animator animation={MoveOut(-1000, 0)}>
          <Lottie 
              options={{
                loop: true,
                autoplay: true,
                animationData: mobileNotification,
                rendererSettings: {
                  preserveAspectRatio: "xMidYMid slice"
                }
            }}
              height={200}
              width={300}
              
            />
          </Animator>
          </span>
       
      
      </span>
    </div>
  </ScrollPage>
    
    <ScrollPage>
    <Animator animation={batch(FadeIn())}>
      <DashboardSection/>
      </Animator>
    {/* <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>
          Fleet Noise Tracking
          <img style={{marginLeft:"20px"}} height="35px" width="35px" src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1683728840/fleet_rnnahf.png" alt="" />
        </Animator>
        <Animator animation={MoveIn(1000, 0)}>Country wide comparison</Animator>

        <img  src='https://res.cloudinary.com/dsuiwxwkg/image/upload/v1683727768/DashUI.124a39e8bad92ff61fd5_ewla01.jpg'/>
        <Animator animation={MoveOut(1000, 0)}>Incentive based games</Animator>
        <Animator animation={MoveOut(-1000, 0)}>Push Notification💛</Animator>
      </span>
    </div> */}
  </ScrollPage>
  

  <ScrollPage>
  
        {/* <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span> */}
        {/* <Animator animation={batch(FadeOut())}> */}
    <Map></Map>
    {/* </Animator> */}
    {/* <DashboardSection></DashboardSection> */}
  
</ScrollPage>
  
  <ScrollPage>
  <Animator animation={ZoomInScrollOut}>
        {/* <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span> */}
    <LeaderBoard/>
    
    {/* <DashboardSection></DashboardSection> */}
  </Animator>
</ScrollPage>
 
  <ScrollPage>
    <Animator animation={batch(FadeIn(), Sticky())}>
    <CallToAction></CallToAction>
      <Logoo></Logoo>
     
    </Animator>
  </ScrollPage>

</ScrollContainer>
<Footer></Footer>
{/* <CircularCarousel></CircularCarousel> */}
{/* <Logo></Logo> */}


    </div>


    </>
  );
}

export default App;
