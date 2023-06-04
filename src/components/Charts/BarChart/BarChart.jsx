import React from 'react'
import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend,
  Label
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
)


const BarChart = () => {
  const data ={
    labels: ['New York','Delhi','Los Angeles','Dhaka', 'Madrid', 'Jakarta', 'London', 'Bangkok'],
    datasets: [
        {
            label: 'Decibel',
            data: [95, 83, 71, 119, 69, 73, 86, 99],
            backgroundColor: ['transparent','transparent','transparent','black','transparent','transparent','transparent','transparent'],
            borderColor: 'black',
            borderWidth: 3,
        },
    ]
  }
  const options = {
    scales: {
      x: {
        ticks: {
          font: {
            size: 28,
          },
        },
      },
      y: {
        ticks: {
          font: {
            size: 25,
          },
        },
      },
    },
    plugins: {
        legend: {
          display: false,
        },
      },
  };
  return (
    <div
    style={
        {padding:'20px',
        width:'100%',
        display:"flex",
        justifyContent:"center",
        }
    }>
        <Bar
         data={data}
         options={options}
        ><BarElement content="https://res.cloudinary.com/dftfcxnxd/image/upload/v1685797179/taj-mahal_1_os2gdd.png"/></Bar>
    </div>
  )
}

export default BarChart