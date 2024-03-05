'use client';


// import dynamic from "next/dynamic";
// const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});

import Chart from "react-apexcharts";

const TokenMarketCapChart = ({data}: { data: [number, number][] }) => {

  const series = [
    {
      name: "Market Cap",
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

  return data ?
    // @ts-ignore
    <Chart options={options} series={series} type="bar" height={350}/>
    : <p>Loading ...</p>
}

export default TokenMarketCapChart;
