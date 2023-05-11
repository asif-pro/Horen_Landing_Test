import React from 'react'
import './DashboardSection.css'
import DashUI from '../Assets/DashUI.png'
import Seli from '../Assets/SELISE.png'
import Pcode from '../Assets/PCode.png'
import Card from './Cards/Card.jsx'
// import Phone from '../Assets/phone.gif'

const DashboardSection = () => {
  return (
 
    <div className='dashboardSection'>
        <div className='dashBoardLeft'>
        <div className='dashBoardRightTop'>
        <Card text="Fleet Noise Tracking" img="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1683728840/fleet_rnnahf.png"></Card>
        </div>
        <div className='dashBoardRightBottom'>
        <Card text="Countrywide comparison" img="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1683798502/bangladesh_akmawx.png"></Card>
        </div>
        </div>
        {/* <img className='dashBoardCenter' src={DashUI}/> */}
        
        <img className='dashBoardRight' src="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1683727768/DashUI.124a39e8bad92ff61fd5_ewla01.jpg"/>

        <div className='dashBoardRight'>
        <div className='dashBoardRightTop'>
        <Card text="Incentive based games" img="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1683798665/podium_gbfa7g.png"></Card>
        </div>
        <div className='dashBoardRightBottom'>
        <Card text="Push Notifications" img="https://res.cloudinary.com/dsuiwxwkg/image/upload/v1683798745/notification_lqedmt.png"></Card>
        </div>
        </div>
        
    </div>
  )
}

export default DashboardSection