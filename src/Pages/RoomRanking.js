import React from 'react'
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart } from 'react-chartjs-2'
import { rankingList } from '../resource/ranking'
import axios from 'axios';
const RoomRanking = () => {
ChartJS.register(...registerables);
    // const config = {
    //     type: 'bar',
    //     data,
    //     options: {
    //       indexAxis: 'y',
    //     }
    //   };

    axios.defaults.withCredentials=true;
    console.log(axios.defaults.headers.common['Authorization']);
    let labels = []
    let result = []
    let backgroundColor = []
    let borderColor = []
    rankingList.forEach((ranking) =>{
      let num1 = Math.floor(Math.random() * 256);
      let num2 = Math.floor(Math.random() * 256);
      let num3 = Math.floor(Math.random() * 256);

        labels = [...labels,ranking.roomName]
        result = [...result, ranking.avg]
        backgroundColor = [...backgroundColor,
        `rgba(${num1}, ${num2}, ${num3}, 0.8)`
        ]

        borderColor = [...borderColor,
          `rgba(${num1}, ${num2}, ${num3})`
          ]
    })
//----------------------------------------------
    



const data = {
  labels,
  datasets: [{
    type: 'bar',
    axis: 'y',
    label: 'Room Possible percentage',
    data: result,
    fill: false,
    backgroundColor,
    borderColor,
    borderWidth: 1
  }]
};
// console.log(labels)
// console.log(result)
// console.log(backgroundColor)
// console.log(borderColor)
// console.log(rankingList);
  return (
    <div className="mt-5">
      <h1>RoomRanking</h1>
      <div className='chart bg-light container'>
        <Chart data={data}/>
      </div>
    </div>
  );
}

export default RoomRanking;