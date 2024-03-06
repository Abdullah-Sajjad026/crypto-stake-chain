import TopMoversTokens from "./components/top-movers-tokens";
import TopTokens from "@/app/(routes)/analytics/tokens/components/top-tokens/top-tokens";
import {getTokensMarketData} from "@/app/actions/token-actions";

export default async function Page({
                                     searchParams,
                                   }: Readonly<{
  searchParams: {
    page: number
  }
}>) {
  const pageNo = searchParams.page || 1

  const topMovers = await getTokensMarketData({order: 'price_change_percentage'});

  return (
    <section className="py-12">
      <div className="py-8">
        <TopMoversTokens data={topMovers}/>
      </div>
      <TopTokens pageNo={pageNo}/>
    </section>
  )
}
