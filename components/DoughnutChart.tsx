'use client'

import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import React from 'react'
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {

  const data = {
    datasets: [
        {
            label: "Airdrops",
            data: [25,25,100],
            backgroundColor: ['#0747b6', '#2265d8', '#2f91fa']
        }
    ],
    labels: ['Airdrop 1 ', 'Airdrop 2', 'Airdop 3']
  }


  return <Doughnut 
  data={data}
  options={{
    cutout: '60%',
    plugins: {
        legend: {
            display: false
        }
    }
  }}
   />
}

export default DoughnutChart
