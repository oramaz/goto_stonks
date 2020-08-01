import React from "react";
import ReactApexChart from 'react-apexcharts'

export const Chart = () => {
   const labels2 = [] as string[]
   const data = [100, 700, 500, 300, 300,100, 700, 500, 300,100, 700, 500, 300,100, 700, 500, 300,100, 700, 500, 300]

   for (let i = 0; i < data.length; ++i) {
      labels2.push(`lol${i}` as string)
   }
   console.log(labels2)
   const options = {

      series: [{
         name: "STOCK ABC",
         data: data
      }],
      options: {
         theme: {
            mode: 'light',
            palette: 'palette1',
            monochrome: {
               enabled: false,
               color: '#00FF00',
               shadeTo: 'light',
               shadeIntensity: 0.65
            },
         },
         chart: {
            type: 'area',
            height: 350,
            zoom: {
               enabled: false
            }
         },
         dataLabels: {
            enabled: false
         },
         stroke: {
            curve: 'straight'
         },

         title: {
            text: 'Fundamental Analysis of Stocks',
            align: 'left'
         },
         subtitle: {
            text: 'Price Movements',
            align: 'left'
         },
         labels: labels2,
         xaxis: {
            type: 'string',
         },
         yaxis: {
            opposite: true
         },
         legend: {
            horizontalAlign: 'left'
         }
      }
   };

   return (
      <div id="chart">
         <ReactApexChart options={options.options} type="area" series={options.series}  height={350} />
      </div>
   )
}