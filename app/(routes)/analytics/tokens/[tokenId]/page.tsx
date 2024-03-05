async function getTokenCharts(tokenId: string) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${tokenId}/market_chart/range?vs_currency=usd&from=${
    new Date().getTime() - 30 * 24 * 60 * 60 * 1000
  }&to=${
    new Date().getTime()
  }`)
  return response.json()
}

export default async function Page({
                                     params
                                   }: {
  params: {
    tokenId: string
  }
}) {

  console.log(params.tokenId)

  const chartsData = await getTokenCharts(params.tokenId)
  console.log(chartsData)

  return (
    <section className="py-12">
    </section>
  )
}
