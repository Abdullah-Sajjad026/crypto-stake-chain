import TopTokensTable from "./components/top-tokens-table";
import {topTokensColumns} from "./components/top-tokens-table/columns";
import TopMoversTokens from "./components/top-movers-tokens";


async function getTopTokens(page: number = 1) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${page * 10}&page=1&sparkline=false`)
  return response.json()
}

async function getTopMovers() {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage&per_page=10&page=1&sparkline=false`)
  return response.json()
}

export default async function Page({
                                     searchParams,
                                   }: {
  searchParams: {
    page: number
  }
}) {
  const pageNo = searchParams.page || 1

  const topTokens = await getTopTokens(pageNo)
  const topMovers = await getTopMovers();

  return (
    <section className="py-12">
      <TopMoversTokens data={topMovers}/>
      <TopTokensTable columns={topTokensColumns} data={topTokens} pageNo={pageNo}/>
    </section>
  )
}
