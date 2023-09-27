// BarChart.js

import React from 'react';
import { Bar } from 'react-chartjs-2';

const TempChartN = () => {
  // Sample data for the bar chart
  const data = {
    labels: 
    ['2009',
    '2010',
    '2013',
    '2015',
    '2018',
    '2020'],

    datasets: [
      {
        label: 'Number of Items',
        data: [20, 19, 3, 5, 2, 3], // Replace with your own data
        backgroundColor: [
          'red',
          'blue',
          'yellow',
          'green',
          'purple',
          'orange',
        ],
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart-container">
      <Bar data={data} options={options} />
    </div>
  );
};

export default TempChartN;
