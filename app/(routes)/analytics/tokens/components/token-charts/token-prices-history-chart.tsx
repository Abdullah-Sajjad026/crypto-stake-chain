import Chart from "react-apexcharts";

type TokenCharts = {
  prices: [number, number][]
  market_caps: [number, number][]
  total_volumes: [number, number][]

}

async function getTokenCharts(tokenId: string, days: number = 30) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${tokenId}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
  return (await response.json()) as TokenCharts
}


const TokenPricesHistoryChart = async ({data = [], tokenId}: { data: [number, number][], tokenId?: string }) => {

  if (tokenId && !data.length)
    data = (await getTokenCharts(tokenId as string)).prices

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
