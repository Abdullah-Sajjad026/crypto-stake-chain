import TopPools from "./_components/top-pools";
import {poolsMap} from "@/app/constants";
import {getTokensMarketData} from "@/app/actions/token-actions";

export default async function Page() {
  const tokensData = await getTokensMarketData({})

  const data = Object.entries(poolsMap).map(([key, value]) => {
    const tokenSymbol = value.symbol.toUpperCase();
    const tokenData = tokensData?.find(t => t?.id === key);

    return value.pools.map(p => ({
      id: `${key}-${p.days}`,
      tokenId: key,
      image: tokenData?.image || "",
      symbol: tokenSymbol,
      name: `${tokenSymbol} ${p.days} Day`,
      tvl: 10000
    }))
  }).flat()


  return (
    <section className="py-12">
      {
        tokensData && (
          <TopPools data={data}/>
        )
      }
    </section>
  )
}
