import React, {useEffect} from "react";
import ReactApexChart from 'react-apexcharts'
import moment from "moment";

type Props = {
   data: {price: number, time: string}[],
   project: string
}

export const Chart = (props: Props) => {
   const { data, project } = props

   const prices = data.map(x => x.price)

   const dates = data.map(x => moment(x.time).format("lll"))

   const options = {

      series: [{
         name: props.project,
         data: prices
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
               enabled: true
            },
         },
         dataLabels: {
            enabled: false
         },
         stroke: {
            curve: 'straight'
         },

         title: {
            text: project,
            align: 'left'
         },
         // subtitle: {
         //    text: 'Price Movements',
         //    align: 'left'
         // },
         labels: dates,
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