'use client';

import {Accordion,} from "@/components/ui/accordion";
import {poolsMap} from "@/app/constants";
import {MarketTokenItem} from "@/app/actions/token-actions";
import PoolItem from "@/app/(routes)/pools/_components/pool-item";

export default function PoolsListing(
  {
    tokensData
  }: {
    tokensData: MarketTokenItem[]
  }
) {

  return (
    <Accordion type="single" collapsible className="no-underline">
      <div className="flex flex-col gap-4">
        {
          Object.entries(poolsMap).map(([key, value]) => {
            const tokenSymbol = value.symbol.toUpperCase();
            const tokenData = tokensData.find(t => t.id === key)!;

            return value.pools.map(p => (
                <PoolItem
                  key={`${key}-${p.days}`}
                  tokenData={tokenData}
                  pool={p}
                  poolMeta={value}
                />

              )
            )
          })
        }
      </div>
    </Accordion>
  )
}
