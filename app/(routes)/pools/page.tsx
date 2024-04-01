import {Card} from "@/components/ui/card";
import PoolsListing from "@/app/(routes)/pools/_components/pools-listing";
import {getTokensMarketData} from "@/app/actions/token-actions";

export default async function Page() {

  const topTokens = await getTokensMarketData({})

  return (
    <section className="pt-32 pb-12 main-bg min-h-screen">
      <div className="container">
        <h2 className="text-section">
          Pools
        </h2>

        <Card className="mt-8">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Flexible Lock-Up Choices</h3>
              <p className="text-muted-foreground text-sm">Explore various staking plans tailored to your preferences,
                offering
                different lock-up periods for optimal returns on your selected currency.</p>
            </div>
          </div>

          <section className="mt-8">
            {
              topTokens && (
                <PoolsListing tokensData={topTokens}/>
              )
            }
          </section>

        </Card>
      </div>

    </section>
  )
}
