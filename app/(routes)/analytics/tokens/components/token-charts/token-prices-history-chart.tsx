'use client';

import Chart from "react-apexcharts";

const TokenPricesHistoryChart = ({data}: { data: [number, number][], }) => {
  const series = [
    {
      name: "Price",
      data: data.map((entry: any) => [entry[0], entry[1].toFixed(2)])
    }
  ]

  const options = {
    chart: {
      zoom: {
        enabled: true
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true
    }
  }

  return data.length ?
    // @ts-ignore
    <Chart options={options} series={series} type="area" height={350}/>
    : <p>Loading ...</p>
}

export default TokenPricesHistoryChart;
