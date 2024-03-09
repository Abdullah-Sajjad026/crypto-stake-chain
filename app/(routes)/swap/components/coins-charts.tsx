'use client';

import {useEffect, useState} from "react";
import {Card} from "@/components/ui/card";
import {Tabs, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {getTokenCharts, MarketTokenItem} from "@/app/actions/token-actions";
import Image from "next/image";
import {useQuery} from "@tanstack/react-query";
import {Alert} from "@/components/ui/alert";
import TokenPricesHistoryChart
  from "@/app/(routes)/analytics/tokens/components/token-charts/token-prices-history-chart";


const CoinsCharts = ({
                       token1, token2
                     }: {
  token1: MarketTokenItem,
  token2: MarketTokenItem
}) => {
  const [openedCoin, setOpenedCoin] = useState<string>(token1.id);

  const {isLoading, isSuccess, isError, error, data: tokenCharts} = useQuery({
    queryKey: ['tokenCharts', openedCoin],
    queryFn: () => getTokenCharts({tokenId: openedCoin})
  })

  useEffect(() => {
    setOpenedCoin(token1.id);
  }, [token1]);

  return (
    <Card>
      <Tabs value={openedCoin} onValueChange={setOpenedCoin}>
        <TabsList>
          <TabsTrigger value={token1.id}>
            <Image src={token1.image} width={20} height={20} className={"mr-2"} alt={token1.name}/>
            <span>{token1.name}</span>
          </TabsTrigger>
          <TabsTrigger value={token2.id}>
            <Image src={token2.image} width={20} height={20} className={"mr-2"} alt={token2.name}/>
            <span>{token2.name}</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {
        isLoading && (
          <p>Loading ... </p>
        )
      }

      {
        isError && (
          <Alert variant={"destructive"}>
            {error?.message}
          </Alert>
        )
      }
      {
        isSuccess && (
          <TokenPricesHistoryChart data={tokenCharts.prices}/>
        )
      }


    </Card>
  )
}

export default CoinsCharts;
