'use client';

import Footer from "@/app/components/footer";
import TitleBox from "@/components/ui/title-box";
import SwapCalculator from "./components/swap-calculator";
import CoinsCharts from "./components/coins-charts";
import {useState} from "react";
import {useAppConfig} from "@/hooks/use-app-config";
import {NetworkSupportedTokens, TSupportedToken} from "@/app/constants";
import {useQuery} from "@tanstack/react-query";
import {getTokensMarketData} from "@/app/actions/token-actions";
import {Alert} from "@/components/ui/alert";
import {useWeb3ModalAccount} from "@web3modal/ethers/react";

export default function PageSwap() {
  const appNetwork = useAppConfig().selectedNetwork;
  const availableTokens = NetworkSupportedTokens[appNetwork.value as keyof typeof NetworkSupportedTokens]

  const [token1, setToken1] = useState<TSupportedToken>(
    availableTokens[0]
  )
  const [token2, setToken2] = useState<TSupportedToken>(
    availableTokens[1]
  )

  const {isSuccess, data: tokensData, isLoading, isError, error} = useQuery({
      queryKey: ['availableTokensData'],
      queryFn: () => getTokensMarketData({ids: availableTokens.map(token => token.id).join(",")}),

    }
  )

  return (
    <section className="main-bg min-h-screen pt-32">
      <div className="container pb-16">
        <TitleBox title="Lightning cryptocurrency exchange"/>
        {
          isError && (
            <Alert variant={"destructive"}>
              {error?.message}
            </Alert>
          )
        }
        {
          isLoading && (
            <p>Loading ... </p>
          )
        }
        {
          isSuccess && (
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mt-8">
              <div className="md:col-span-3">
                <CoinsCharts
                  token1={tokensData.find(token => token.id === token1.id)!}
                  token2={tokensData.find(token => token.id === token2.id)!}
                />
              </div>
              <div className="md:col-span-2">
                <SwapCalculator
                  token1={token1}
                  token2={token2}
                  setToken1={setToken1}
                  setToken2={setToken2}
                  tokensData={tokensData}
                />
              </div>
            </div>
          )
        }

      </div>
      <Footer/>
    </section>
  )
}
