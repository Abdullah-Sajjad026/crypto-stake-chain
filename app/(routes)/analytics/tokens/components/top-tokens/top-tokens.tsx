import TopTokensTable from "./top-tokens-table";
import {topTokensColumns} from "./top-tokens-table/columns";
import Link from "next/link";
import {buttonVariants} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import {getTokensMarketData,} from "@/app/actions/token-actions";

const TopTokens = async ({pageNo = 1}: {
  pageNo?: number
}) => {
  const topTokens = await getTokensMarketData({page: pageNo})

  return (
    <section className="z-[2] relative">
      <Card className="lg:w-4/5 mx-auto">
        <h2 className="text-block text-center mb-4">Top Tokens</h2>
        <TopTokensTable columns={topTokensColumns} data={topTokens} pageNo={pageNo}/>
        {
          pageNo < 2 && (
            <div className="mt-4 text-center">
              <Link
                scroll={false}
                className={buttonVariants({variant: "default"})} href={`/analytics/tokens?page=${Number(pageNo) + 1}`}>
                View All
              </Link>
            </div>
          )
        }

      </Card>
    </section>
  )
}

export default TopTokens;
