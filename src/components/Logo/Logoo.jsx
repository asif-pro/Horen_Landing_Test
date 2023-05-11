import React from 'react'
import './Logoo.css'
import HeroImage from '../Assets/hero.png'
import XSeries from '../Assets/x-series.png'
import Rover from '../Assets/Rover.png'
import Range from '../Assets/Range.png'
import Selise from '../Assets/SELISE.png'
import SeliseR from '../Assets/SELISE-modified.png'
import Project from '../Assets/PCode.png'
import ProjectR from '../Assets/PCode-modified.png'
import Snapdrop from '../Assets/snapdrop_logo.png'
import SnapdropR from '../Assets/snapdrop_logo-modified.png'
import Flyaway from '../Assets/logo-flyaway.png'
import FlyawayR from '../Assets/logo-flyaway-modified.png'
import Hilti from '../Assets/logo_2016_sRGB.png'
import HiltiR from '../Assets/logo_2016_sRGB-modified.png'


const Logoo = () => {
  return (
    <>
        <div className='client-wrap'>
            <h2>
                Our Partners
            </h2>
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et neque id ligula mattis commodo.</p>
            <hr/>
             <div className='client-in'>
                <ul>
                <li>
                        <img src={Rover} />
                        <img src={Range} />
                    </li>
                    <li>
                        <img src={ProjectR} />
                        <img src={Project} />
                    </li>
                    <li>
                        <img src={SeliseR} />
                        <img src={Selise} />
                    </li>
                    <li>
                        <img src={XSeries} />
                        <img src={XSeries} />
                    </li>
                    
                    <li>
                        <img src={SnapdropR} />
                        <img src={Snapdrop} />
                    </li>
                    
                    
                    <li>
                        <img src={ProjectR} />
                        <img src={Project} />
                    </li>
                    {/* <li>
                        <img src={Rover} />
                        <img src={Range} />
                    </li>
                    <li>
                        <img src={ProjectR} />
                        <img src={Project} />
                    </li>
                    <li>
                        <img src={HiltiR} />
                        <img src={Hilti} />
                    </li>
                    <li>
                        <img src={SeliseR} />
                        <img src={Selise} />
                    </li> */}
                </ul>
             </div>
        </div>
    </>
  )
}

export default Logoo