import React from 'react'
import './DashboardSection.css'
import DashUI from '../Assets/DashUI.png'
import Seli from '../Assets/SELISE.png'
import Pcode from '../Assets/PCode.png'
import Card from './Cards/Card.jsx'
import Phone from '../Assets/phone.gif'

const DashboardSection = () => {
  return (
    <div className='dashboardSection'>
        <div className='dashBoardLeft'>
        <div className='dashBoardRightTop'>
        <Card></Card>
        </div>
        <div className='dashBoardRightBottom'>
        <Card></Card>
        </div>
        </div>
        <img className='dashBoardCenter' src={DashUI}/>
        
        {/* <img className='dashBoardRight' src={Pcode}/> */}

        <div className='dashBoardRight'>
        <div className='dashBoardRightTop'>
        <Card><img src={Phone} /></Card>
        </div>
        <div className='dashBoardRightBottom'>
        <Card></Card>
        </div>
        </div>
        
    </div>
  )
}

export default DashboardSection