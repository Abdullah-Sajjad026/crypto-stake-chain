import {AllSupportedTokens} from "@/app/constants";
import {TokenInfo} from "@/app/actions/type-token-info";

export type TokenCharts = {
  prices: [number, number][],
  market_caps: [number, number][],
  total_volumes: [number, number][]
}


export async function getTokensMarketData({
                                            page = 1,
                                            vsCurrency = 'usd',
                                            order = 'market_cap_desc',
                                            ids = AllSupportedTokens.join(",")
                                          }) {
  const url = new URL('https://api.coingecko.com/api/v3/coins/markets');
  const params = {
    ids,
    vs_currency: vsCurrency,
    order,
    per_page: `${page * 10}`,
    page: '1',
    sparkline: 'false',
  }
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url.toString())

  if (!response.ok) {
    throw new Error(response.statusText)
  }

  return response.json()
}

export const getTokenCharts = async ({
                                       tokenId,
                                       days = '30',
                                       interval = 'daily',
                                       vsCurrency = 'usd'
                                     }: {
  tokenId: string,
  days?: string,
  interval?: string,
  vsCurrency?: string
}) => {
  const url = new URL(`https://api.coingecko.com/api/v3/coins/${tokenId}/market_chart`);
  const params = {
    vs_currency: vsCurrency,
    days,
    interval
  }
  url.search = new URLSearchParams(params).toString();
  const response = await fetch(url.toString())
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return (await response.json()) as TokenCharts
}

// updated token info method like aboves
export const getTokenInfo = async (tokenId: string) => {
  const url = new URL(`https://api.coingecko.com/api/v3/coins/${tokenId}`);
  const params = {
    localization: 'false',
    tickers: 'false',
    market_data: 'true',
    community_data: 'false',
    developer_data: 'false',
    sparkline: 'false'
  }
  url.search = new URLSearchParams(params).toString();
  const response = await fetch(url.toString())
  if (!response.ok) {
    throw new Error(response.statusText)
  }
  return (await response.json()) as TokenInfo
}
