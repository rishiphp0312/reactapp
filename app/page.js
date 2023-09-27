"use client";

import React, {Component, useState,useEffect} from 'react'
//import Header from './Components/Header';
import BarChartN from './BarChartN';
//import TempChartN from './TempChartN';
//import {axios} from 'axios';
import { saveAs } from 'file-saver';
import { Chart, Colors, registerables } from 'chart.js';
Chart.register(...registerables);
import * as AWS from 'aws-sdk';

// Install Axios using npm or yarn
// npm install axios
// yarn add axios

import axios from 'axios';

AWS.config.update({
  apiVersion: '2012-08-10',
  region: 'us-west-2',
  endpoint: 'https://gyki8erwsa.execute-api.us-west-2.amazonaws.com/test/temperature',
 // accessKeyId: ['AKIAIEBY475BTYR3VOQQ'],
});


const saveCanvas=()=> {
    //save to png
    var dynamodb = new AWS.DynamoDB();

    //let that = this;
      var params = {
        "TableName": "temperature",
        "Key": {
          "tempId": {
            "N": "2"
          }
        }
      };

     dynamodb.getItem(params, function(err, data) {
    if (err) {
      console.log("params"+params);

        console.log(err);
    } else {
      console.log("params-fine"+params);

        that.setState({
          apidata: data

    })
    }
});    
}

export const page = () => {
    
   // const [first, setfirst] = useState(80)
const [apidata, setData] = useState(null);

saveCanvas(); 

  return (
    <>
<div  className="h-16 bg-green-500 flex justify-between">
  <div className='flex gap-8'>
  <a href="#" >Home</a>
  <a href="#" >Tempertaure</a>
  <a href="#" >Gas</a>
  <a href="#" >Others</a>
    </div>
</div>
          
    
    <div  className='backgroundColor: powderblue' 
    style={{margin:"5px", textAlign:"right",justifyItems:"right",paddingTop:"5px",paddingBottom:"5px"}}>
        <button style={{
              backgroundColor:"#008CBA",
              
              border: "2px solid #008CBA",
            color:"white",fontsize: "16px",
        borderRadius: "12px",padding:"5px",paddingTop:"5px",paddingBottom:"5px"}} 
        onClick={()=>{
            location. reload()
        }}
        >Reload</button>
      <BarChartN chartData ={apidata}/>
     

 </div>
          
          </>
);
}


export default page