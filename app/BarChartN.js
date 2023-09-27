// BarChart.js

import React from 'react';
import { Line } from 'react-chartjs-2';



const BarChartN = (props) => {
  // Sample data for the bar chart
  const cars =[] ;
  const time =[] ;

  for(let i =0;i<=23;i++){
    cars[i]=i+1; 
    if(i>=12 && i<23 ){
      //if(i==12)
     // time[i]=i+"pm"; 
       if(i+1>12 ){
        //i%2
        time[i]=(i+1-12) +"pm"; 

      }
      

    }else{
      if(i+1<12)
      time[i]= i+1+"am"; 
      //else
     // time[i]=i+1+ "am"; 
      

    }
    

  }
console.log(cars);
console.log("dekha");

  const data = {
    labels: time,

    datasets: [
      {
        label: 'Temperature',
        data: cars, // Replace with your own data
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
    <div className="chart-container" style={{width:"800px",height:"500px",  backgroundColor:"#F9EBEA"}}>
      <Line id="stackD" data={data} options={options} />
      <a  onClick={()=>{
            const canvasSave = document.getElementById('stackD');
            canvasSave.toBlob(function (blob) {
                saveAs(blob, "testing.png")
            })
            //location. reload()
        }}>Download as PNG</a>
    </div>
  );
};

export default BarChartN;
