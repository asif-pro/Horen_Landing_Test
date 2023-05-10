import React from 'react'
import './Logoo.css'
import HeroImage from '../Assets/hero.png'
import Burger from '../Assets/Burger.png'
import Mercedes from '../Assets/Mercedes.png'
import Moviestar from '../Assets/Movistar.png'
import Nike from '../Assets/NKE.png'
import Pizza from '../Assets/pizza.png'
import XSeries from '../Assets/x-series.png'
import Rover from '../Assets/Rover.png'
import Range from '../Assets/Range.png'
import Selise from '../Assets/SELISE.png'
import Project from '../Assets/PCode.png'


const Logoo = () => {
  return (
    <>
        <div className='client-wrap'>
            <h2>
                Our Clients
            </h2>
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque et neque id ligula mattis commodo.</p>
            <hr/>
             <div className='client-in'>
                <ul>
                    {/* <li>
                        <img src={Burger} />
                        <img src={Burger} />
                    </li>
                    <li>
                        <img src={Mercedes} />
                        <img src={Mercedes} />
                    </li>
                    <li>
                        <img src={Moviestar} />
                        <img src={Moviestar} />
                    </li>
                    <li>
                        <img src={Nike} />
                        <img src={Nike} />
                    </li> */}
                    <li>
                        <img src={Project} />
                        <img src={Project} />
                    </li>
                    <li>
                        <img src={Selise} />
                        <img src={Selise} />
                    </li>
                    <li>
                        <img src={XSeries} />
                        <img src={XSeries} />
                    </li>
                    <li>
                        <img src={Rover} />
                        <img src={Range} />
                    </li>
                    <li>
                        <img src={Pizza} />
                        <img src={Pizza} />
                    </li>
                    <li>
                        <img src={HeroImage} />
                        <img src={HeroImage} />
                    </li>
                    <li>
                        <img src={HeroImage} />
                        <img src={HeroImage} />
                    </li>
                    <li>
                        <img src={HeroImage} />
                        <img src={HeroImage} />
                    </li>
                    <li>
                        <img src={HeroImage} />
                        <img src={HeroImage} />
                    </li>
                    <li>
                        <img src={HeroImage} />
                        <img src={HeroImage} />
                    </li>
                </ul>
             </div>
        </div>
    </>
  )
}

export default Logoo