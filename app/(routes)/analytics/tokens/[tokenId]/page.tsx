import {Button} from "@/components/ui/button";
import {CoinData} from "./coin-data.type"
import {Card} from "@/components/ui/card";
import Image from "next/image";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import TokenPricesHistoryChart from "../components/token-charts/token-prices-history-chart";
import TokenVolumeChart from "../components/token-charts/token-volume-chart";
import TokenMarketCapChart from "../components/token-charts/token-marketcap-chart";

type TokenCharts = {
  prices: [number, number][]
  market_caps: [number, number][]
  total_volumes: [number, number][]

}

async function getTokenCharts(tokenId: string, days: number = 30) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${tokenId}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
  return (await response.json()) as TokenCharts
}

async function getTokenInfo(tokenId: string) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/${tokenId}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false`);
  return (await response.json()) as CoinData;
}

export default async function Page({
                                     params
                                   }: Readonly<{
  params: {
    tokenId: string
  }
}>) {

  const chartsData = await getTokenCharts(params.tokenId)
  const tokenInfo = await getTokenInfo(params.tokenId)

  return (
    <section className="py-12">
      <Card>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full">
          <div className="flex-grow">
            <div className="flex gap-2 mb-2 items-center">
              <Image src={tokenInfo.image.small} alt={tokenInfo.name} width={25} height={25}/>
              <h2 className="text-block">{tokenInfo.name}</h2>
              <span className="text-sm text-muted-foreground">({tokenInfo.symbol.toUpperCase()})</span>
            </div>
            <div className="flex gap-4 items-center">
          <span className="fond-bold">
            ${tokenInfo.market_data.current_price.usd}
          </span>
              <span className={`font-bold ${
                tokenInfo.market_data.price_change_24h > 0 ? "text-green-500" : "text-red-500"
              }`}>
            ${tokenInfo.market_data.price_change_24h_in_currency.usd.toFixed(2)}
          </span>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <Button>
              Add Liquidity
            </Button>
            <Button>Trade</Button>
          </div>
        </div>
      </Card>
      <div className="grid md:grid-cols-7 gap-4 my-8">
        <Card className="md:col-span-2">
          {/*  tvl, market cap rank, market cap, fully diluted valuation, trading volume, 24h high, 24 j low, available supply*/}
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="text-muted-foreground">Market Cap Rank</h3>
              <span className="font-bold mb-1">${tokenInfo.market_cap_rank}</span>
            </div>
            <div>
              <h3 className="text-muted-foreground">Market Cap</h3>
              <span className="font-bold mb-1">${tokenInfo.market_data.market_cap.usd}</span>
            </div>
            <div>
              <h3 className="text-muted-foreground">Fully Diluted Valuation</h3>
              <span className="font-bold mb-1">${tokenInfo.market_data.fully_diluted_valuation.usd}</span>
            </div>
            <div>
              <h3 className="text-muted-foreground">Trading Volume</h3>
              <span className="font-bold mb-1">${tokenInfo.market_data.total_volume.usd}</span>
            </div>
            <div>
              <h3 className="text-muted-foreground">24h High</h3>
              <span className="font-bold mb-1">${tokenInfo.market_data.high_24h.usd}</span>
            </div>
            <div>
              <h3 className="text-muted-foreground">24h Low</h3>
              <span className="font-bold mb-1">${tokenInfo.market_data.low_24h.usd}</span>
            </div>
            <div>
              <h3 className="text-muted-foreground">Available Supply</h3>
              <span className="font-bold mb-1">{tokenInfo.market_data.circulating_supply}</span>
            </div>
          </div>
        </Card>
        <Card className="md:col-span-5">
          <Tabs defaultValue="prices">
            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
              <div>
                <h2 className="text-block">
                  ${tokenInfo.market_data.circulating_supply}
                </h2>
                <p className="text-sm text-muted-foreground">
                  Last updated: {new Date(tokenInfo.market_data.last_updated).toLocaleString()}
                </p>
              </div>
              <TabsList>
                <TabsTrigger value="prices">Prices</TabsTrigger>
                <TabsTrigger value="market_cap">Market Cap</TabsTrigger>
                <TabsTrigger value="volume">Volume</TabsTrigger>
              </TabsList>
            </div>
            <div>
              <TabsContent value="prices">
                <TokenPricesHistoryChart data={chartsData.prices}/>
              </TabsContent>
              <TabsContent value="market_cap">
                <TokenMarketCapChart data={chartsData.market_caps}/>
              </TabsContent>
              <TabsContent value="volume">
                <TokenVolumeChart data={chartsData.total_volumes}/>
              </TabsContent>
            </div>
          </Tabs>
        </Card>

      </div>
    </section>
  )
}
