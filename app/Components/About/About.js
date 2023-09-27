import React from 'react'
// BarChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';

const page = () => {
  // Sample data for the bar chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Number of Items',
        data: [12, 19, 3, 5, 2, 3], // Replace with your own data
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
<BarChart />

      <Bar data={data} options={options} />
    </div>
  );
};

export default page;
