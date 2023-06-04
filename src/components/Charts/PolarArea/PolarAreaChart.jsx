import React from 'react';
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { PolarArea } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const PolarAreaChart = ({data}) => {
  const options = {
    plugins: {
      legend: {
        display: false, // Set display to false to hide the legend
      },
    },
  };
  return (
     <PolarArea data={data}/>
  )
}

export default PolarAreaChart