import TopTokensTable from "./top-tokens-table";
import {topTokensColumns} from "./top-tokens-table/columns";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {Card} from "@/components/ui/card";


async function getTopTokens(page: number = 1) {
  const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=${page * 10}&page=1&sparkline=false`)
  return response.json()
}

const TopTokens = async ({pageNo = 1}: {
  pageNo?: number
}) => {
  const topTokens = await getTopTokens(pageNo)

  return (
    <section className="z-[2] relative">
      <Card className="lg:w-4/5 mx-auto">
        <h2 className="text-block text-center mb-4">Top Tokens</h2>
        <TopTokensTable columns={topTokensColumns} data={topTokens} pageNo={pageNo}/>
        <div className="mt-4 text-center">
          <Link
            scroll={false}
            className={buttonVariants({variant: "default"})} href={`/analytics/tokens?page=${Number(pageNo) + 1}`}>
            View All
          </Link>
        </div>
      </Card>
    </section>
  )
}

export default TopTokens;
