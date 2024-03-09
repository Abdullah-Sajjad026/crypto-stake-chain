'use client';
import dynamic from "next/dynamic";
import {useEffect, useState} from "react";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});

const TokenPricesHistoryChart = ({data}: { data: [number, number][], }) => {

  const [Chart, setChart] = useState<any>();

  useEffect(() => {
    import("react-apexcharts").then((mod) => {
      setChart(() => mod.default);
    });
  }, []);


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

  return (data.length && Chart) ?
    // @ts-ignore
    <Chart options={options} series={series} type="area" height={350}/>
    : <p>Loading ...</p>
}

export default TokenPricesHistoryChart;
