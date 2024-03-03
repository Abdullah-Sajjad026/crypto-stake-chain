'use client';

import {useEffect, useState} from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false});
import {Card} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {SelectOption} from "@/components/ui/select";

const CoinsCharts = ({
                       coins
                     }: {
  coins?: (SelectOption)[]
}) => {

  const [openedCoin, setOpenedCoin] = useState(coins && coins.length > 0 ? coins[0].value : undefined)

  const [coinData, setCoinData] = useState<any>();

  useEffect(() => {
    setCoinData(undefined);
    // Fetch data for the selected coin

    // setting a dummy coin pricing area chart data like in trading view or any other crypto exchange
    setCoinData(
      Array.from({length: 10}, (_, i) => ({
        date: new Date().getTime() - i * 1000 * 60 * 60 * 24,
        price: Math.random() * 10000
      }))
    )

  }, [
    openedCoin
  ]);


  return (
    <Card>
      {
        coins && coins.length > 0 ? (
          <Tabs value={openedCoin} onValueChange={setOpenedCoin}>
            <TabsList>
              {
                coins.map((coin, index) => (
                  <TabsTrigger key={index} value={coin.value}>
                    {coin.label}
                  </TabsTrigger>
                ))
              }
            </TabsList>
            {
              coins.map((coin, index) => (
                <TabsContent key={index} value={coin.value} className={"mt-4"}>
                  {
                    // coinData && coinData.length && (
                    <div>
                      <Chart
                        options={{
                          xaxis: {
                            type: "datetime",
                          },
                          yaxis: {
                            labels: {
                              formatter: (value: number) => `$${value.toFixed(2)}`,
                            },
                          },
                          tooltip: {
                            enabled: true
                          },
                          dataLabels: {
                            enabled: false
                          }
                        }}
                        series={[
                          {
                            name: "Price",
                            data: !coinData ? [] : coinData.map(
                              ({
                                 date,
                                 price,
                               }: {
                                date: number;
                                price: number;
                              }) => ({
                                x: date,
                                y: price,
                              })
                            ),
                          },
                        ]}
                        type="area"
                        height={350}
                      />
                    </div>
                    // )
                  }

                </TabsContent>
              ))
            }
          </Tabs>
        ) : (
          <div>
            <p className="text-muted-foreground text-center">Select a coin to see its chart</p>
          </div>
        )
      }
    </Card>
  )
}

export default CoinsCharts;
