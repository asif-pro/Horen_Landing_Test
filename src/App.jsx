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
import BarChart from './components/Charts/BarChart/BarChart';
import PieChart from './components/Charts/PieChart/PieChart';
import { useRef } from 'react';
import PolarChart from './components/Charts/PolarChart/PolarChart';
import PolarAreaChart from './components/Charts/PolarArea/PolarAreaChart';
import { options } from 'recharts'
function App() {
 const ref = useRef();
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());
   const peek = {
    labels: ['Farmgate', 'Rangs Bhaban', 'Jahangir Gate', 'Indira Road', 'Tejgaon', 'Bijoy Sarani', 'Khamar Bari'],
    datasets: [
      {
        label: 'Sound Pressure Level dB:',
        data: [110.5, 98.4, 120.2, 102.2, 105.5, 119.9, 106.5],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(51, 0, 153, 0.5)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(44, 44, 44, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(86, 86, 86, 0.6)',
      ],
      borderWidth: 1,
      borderColor: 'transparent'
    },
  ],
  };
  const offPeek = {
    labels: ['Farmgate', 'Rangs Bhaban', 'Jahangir Gate', 'Indira Road', 'Tejgaon', 'Bijoy Sarani', 'Khamar Bari'],
    datasets: [
      {
        label: 'Sound Pressure Level dB:',
        data: [81.2, 82.4, 90.5, 80.2, 74.2, 80.6, 75.7],
        backgroundColor: [
          'rgba(54, 162, 235, 0.6)',
          'rgba(75, 192, 192, 0.6)',
          'rgba(51, 0, 153, 0.5)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(44, 44, 44, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(86, 86, 86, 0.6)',
      ],
      borderWidth: 1,
      borderColor: 'transparent',
    },
  ],
  };

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
    <Animator justifyContent="center" animation={batch(Fade(), Sticky(), MoveOut(0, -900))}>
      
  <div style={{width:'80vw', margin:'0 auto', }}>

  <BarChart></BarChart>

  </div>
  
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator justifyContent="center" animation={batch(Fade(), Sticky(), MoveOut(0, -1000))}>
  <div style={{width:'40vw', margin:'0 auto', display:'flex', flexDirection:'row', justifyContent: 'space-around', paddingTop:'80px', padding:'40px'}}>
 <PolarAreaChart data={peek}></PolarAreaChart>
 <PolarAreaChart data={offPeek}></PolarAreaChart>
  </div>
  <div style={{display: 'flex', flexDirection:'row', justifyContent:'space-between'}}>
 <h2>Peek Hour</h2>
 <h2>Off Peek Hour</h2>
 </div>
  
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator justifyContent="center" animation={batch(Fade(), Sticky(), MoveOut(0, -900))}>
      
  <div style={{width:'80vw', margin:'0 auto', }}>

  <PieChart></PieChart>

  </div>
  
    </Animator>
  </ScrollPage>
  {/* <ScrollPage>
    <Animator justifyContent="center" animation={batch(Fade(), Sticky(), MoveOut(0, -900))}>
      
  <div style={{width:'80vw', margin:'0 auto', }}>

 <PolarChart></PolarChart>
  </div>
  
    </Animator>
  </ScrollPage> */}
  
  <ScrollPage>
    <div ref={ref} style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span >
        <span style={{display:"flex",justifyContent:"center"}}>
          <Animator animation={MoveIn(-1000, 0)}>
            <p  className="talk-bubble tri-right border round btm-right-in"
            style={{position:"relative",marginRight:"10vw", maxWidth:"15vw",fontSize:"20px",wordWrap:"break-word"}}
             >
                Horen is a platform that allows you to track your noise footprint
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
