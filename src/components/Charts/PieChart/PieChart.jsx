import React from 'react'
import './PieChart.scss'
import { options } from 'recharts'
const PieChart = () => {
  return (
   
        <>
          <div><h2 style={{fontSize:'3rem'}}>The Noisy Culprits</h2></div>
          <div class="chart-wrapper">
              <figure class="bike-pie-chart" data-percentage="Bike 107dB" >
              </figure>
              <figure class="car-pie-chart" data-percentage="Car 92dB"> 
              </figure>
              <figure class="bus-pie-chart" data-percentage="Bus 121dB" >
              </figure>
              <figure class="cng-pie-chart" data-percentage="CNG 101dB" >
              </figure>
          </div>
        </>
    
  )
}

export default PieChart