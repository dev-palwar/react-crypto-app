import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({chartArray = [], currency}) => {
  const date = [];
  const prices = [];

  chartArray.map((value)=>{
    prices.push(value[1])
    date.push(new Date(value[0]).toLocaleTimeString())
  })


  const data = {
    labels: date,
    datasets: [
      {
        label: `Price in ${currency}`,
        data: prices,
        borderColor: 'rgb(255,99,132)',
        backgroundColor: 'rgba(255,99,132,0.5)',
      },
    ],
  };

  return (
    <>
      <Line
        options={{
          responsive: true,
        }}
        data={data}
      />
    </>
  );
};

export default Chart;
