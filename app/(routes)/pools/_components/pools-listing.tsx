'use client';

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import {poolsMap} from "@/app/constants";
import {MarketTokenItem} from "@/app/actions/token-actions";
import Image from "next/image";
import Link from "next/link";
import {ExternalLink, EyeIcon} from "lucide-react";
import {useWeb3ModalAccount, useWeb3ModalProvider} from "@web3modal/ethers/react";
import {abiUsdtStakingContract} from "@/app/constants/contract-abis";
import {useAccount, useReadContract} from "wagmi";

export default function PoolsListing(
  {
    tokensData
  }: {
    tokensData: MarketTokenItem[]
  }
) {

  const {address, isConnecting, isDisconnected} = useAccount()


  const result = useReadContract({
    abi: abiUsdtStakingContract,
    address: "0xEE2b31B564E5B7D3E5f71Ad5cdfD54B5Ef52D8eC",
    functionName: 'getDepositInfo',
    args: [address]
  })

  console.log({address, result})

  return (
    <Accordion type="single" collapsible className="no-underline">
      <div className="flex flex-col gap-4">
        {
          Object.entries(poolsMap).map(([key, value]) => {
            const tokenSymbol = value.symbol.toUpperCase();
            const tokenData = tokensData.find(t => t.id === key);

            return value.pools.map(p => {


              return (<AccordionItem value={`${key}-${p.days}`} key={key} className="border-0 outline-0 no-underline">

                  <AccordionTrigger className="p-4 rounded-xl bg-primary-light hover:no-underline">
                    <div
                      className="w-full flex flex-col sm:flex-row flex-wrap sm:justify-between items-center gap-4 me-4">

                      <div>
                        <h4 className="text-sm font-medium flex items-center">
                          <Image src={tokenData?.image || ""} alt="Token Logo" width={30} height={30}/>
                          {tokenSymbol} {p.days} Days Staking Pool
                        </h4>
                      </div>

                      <div className="flex gap-6 items-center font-medium">
                        <div className="flex flex-col">
                        <span className="text-muted-foreground mb-1 text-xs">
                          Coin Staked
                        </span>
                          <span className="text-sm">
                          {0} {tokenSymbol}
                        </span>
                        </div>
                        <div className="flex flex-col">
                        <span className="text-muted-foreground mb-1 text-xs">
                          Stake Limit
                        </span>
                          <span className="text-sm">
                          {p.min} - {p.max} {tokenSymbol}
                        </span>
                        </div>
                        <div className="flex flex-col">
                        <span className="text-muted-foreground mb-1 text-xs">
                          Periodic %Profit
                        </span>
                          <span className="text-sm">
                          {p.profit}%
                        </span>
                        </div>
                      </div>

                    </div>
                  </AccordionTrigger>

                  <AccordionContent className="mt-2 bg-[#E4F4FF] rounded-lg">
                    <div className="p-4 grid md:grid-cols-2 gap-8">

                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground font-semibol">
                          Total Locked
                        </span>
                          <span className="text-sm">
                          {10032} {tokenSymbol}
                        </span>
                        </div>
                        <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground font-semibol">
                          Last Claim Time
                        </span>
                          <span className="text-sm">
                          {0}
                        </span>
                        </div>
                        <div className="flex justify-between gap-4">
                        <span className="text-muted-foreground font-semibol">
                          Rewards Collected
                        </span>
                          <span className="text-sm">
                          {10} {tokenSymbol}
                        </span>
                        </div>

                        <Link
                          className="flex items-center gap-2 text-primary"
                          href={`/analytics/pools/${key}/${p.days}`}
                        >
                          See Pool Info <ExternalLink size={16}/>
                        </Link>
                        <Link
                          className="text-primary flex items-center gap-2"
                          href={`https://etherscan.io/address/${value.tokenContract}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Contract <EyeIcon size={16}/>
                        </Link>
                      </div>

                      <div className="flex flex-col gap-4">

                        <div
                          className="border border-primary p-4 rounded-xl flex flex-col sm:flex-row justify-between gap-4">

                          <div>
                            <div className="text-neutral-700">
                              <div>
                                Recent Coin Profit
                              </div>
                              <div>
                                {10} {tokenSymbol}
                              </div>
                            </div>

                            <div className="mt-2 text-muted-foreground">
                              {tokenSymbol}
                            </div>
                          </div>

                          <button className="border-2 border-primary font-semibold text-primary rounded-xl px-4 py-2">
                            Claim Rewards
                          </button>
                        </div>

                        <div className="border border-primary p-4 rounded-xl">
                          <h4 className="text-sm font-medium">
                            Start Staking
                          </h4>
                          <div className="flex gap-4 mt-2">
                            <input type="number" className="w-full rounded-xl p-2 border-2 border-primary"/>
                            <button className="border-2 border-primary font-semibold text-primary rounded-xl px-4 py-2">
                              Stake
                            </button>
                          </div>
                        </div>
                        <button className="border-2 border-primary font-semibold text-primary rounded-xl px-4 py-2">
                          Transfer Funds
                        </button>

                      </div>

                    </div>
                  </AccordionContent>

                </AccordionItem>
              )
            })
          })
        }
      </div>
    </Accordion>
  )
}
