'use client';

import Footer from "@/app/components/footer";
import TitleBox from "@/components/ui/title-box";
import SwapCalculator from "./components/swap-calculator";
import CoinsCharts from "./components/coins-charts";
import {useState} from "react";
import {SelectOption} from "@/components/ui/select";
import ASSETS from "@/app/assets";

export default function PageSwap() {

  const coinsOptions = [
    // Dummy options: eth, bnb-chain, aptos, arbitrum, optimism
    {
      label: "Ethereum",
      value: "eth",
      icon: ASSETS.icons.eth
    },
    {
      label: "Binance Chain",
      value: "bnb-chain",
      icon: ASSETS.icons.bnbChain
    },
    {
      label: "Aptos",
      value: "aptos",
      icon: ASSETS.icons.aptos
    },
    {
      label: "Arbitrum",
      value: "arbitrum",
      icon: ASSETS.icons.arbitrum
    },
    {
      label: "Optimism",
      value: "optimism",
      icon: ASSETS.icons.optimism
    }
  ]

  const [coin1, setCoin1] = useState<SelectOption>(
    coinsOptions[0]
  )
  const [coin2, setCoin2] = useState<SelectOption>(
    coinsOptions[1]
  )

  return (
    <section className="main-bg min-h-screen pt-32">
      <div className="container pb-16">
        <TitleBox title="Lightning cryptocurrency exchange"/>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-8">
          <div className="md:col-span-3">
            <CoinsCharts coins={(coin1 && coin2) ? [coin1, coin2] : undefined}/>
          </div>
          <div className="md:col-span-2">
            <SwapCalculator {...{coin1: coin1.value, coin2: coin2.value, setCoin1, setCoin2, coinsOptions}} />
          </div>
        </div>
      </div>
      <Footer/>
    </section>
  )
}
