'use client';

import {useState} from "react";
import {Card} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {SelectOption} from "@/components/ui/select";


const CoinsCharts = ({
                       coins
                     }: {
  coins?: (SelectOption)[]
}) => {

  const [openedCoin, setOpenedCoin] = useState(coins && coins.length > 0 ? coins[0].value : undefined)


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
