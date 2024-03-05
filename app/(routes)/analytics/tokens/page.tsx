import TopTokensTable from "./components/top-tokens/top-tokens-table";
import {topTokensColumns} from "@/app/(routes)/analytics/tokens/components/top-tokens/top-tokens-table/columns";
import TopMoversTokens from "./components/top-movers-tokens";
import TopTokens from "@/app/(routes)/analytics/tokens/components/top-tokens/top-tokens";

async function getTopMovers() {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage&per_page=10&page=1&sparkline=false`)
  return response.json()
}

export default async function Page({
                                     searchParams,
                                   }: Readonly<{
  searchParams: {
    page: number
  }
}>) {
  const pageNo = searchParams.page || 1

  const topMovers = await getTopMovers();

  return (
    <section className="py-12">
      <div className="py-8">
        <TopMoversTokens data={topMovers}/>
      </div>
      <TopTokens pageNo={pageNo}/>
    </section>
  )
}
