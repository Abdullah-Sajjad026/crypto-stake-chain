import {AccordionContent, AccordionItem, AccordionTrigger} from "@/components/ui/accordion";
import Image from "next/image";
import Link from "next/link";
import {ExternalLink, EyeIcon} from "lucide-react";
import {MarketTokenItem} from "@/app/actions/token-actions";
import {
  type BaseError,
  useAccount,
  useReadContract,
  useWaitForTransactionReceipt,
  useWriteContract
} from "wagmi";
import {TTokenPools} from "@/app/constants";
import {useEffect, useState} from "react";
import {parseEther} from "viem";
import toast from "react-hot-toast";

export default function PoolItem(
  {
    tokenData,
    pool,
    poolMeta: {
      poolContract: poolContractAddr,
      poolAbi,
      tokenContract: tokenContractAddr,
    }
  }: {
    poolMeta: Omit<TTokenPools, "pools" | "symbol">,
    tokenData: MarketTokenItem,
    pool: TTokenPools["pools"][0]
  }
) {
  const tokenSymbol = tokenData.symbol.toUpperCase();

  const {address, isConnecting, isDisconnected} = useAccount()
  const {
    writeContract,
    data: hash,
    isPending,
    error,
  } = useWriteContract();

  const [stakeAmount, setStakeAmount] = useState<string>();

  // const result = useReadContract({
  //   abi: poolAbi,
  //   address: poolContractAddr,
  //   functionName: 'getBalance',
  //   args: [address!]
  // })

  const isConnected = !isConnecting && !isDisconnected

  const onStake = async () => {
    if (!isConnected) return alert('Please connect your wallet first');

    if (!stakeAmount) return alert('Please enter stake amount');

    if (Number(stakeAmount) < pool.min || Number(stakeAmount) > pool.max) return alert('Invalid stake amount');

    writeContract({
      abi: poolAbi,
      address: poolContractAddr,
      functionName: 'deposit',
      args: [pool.days, address!],
      value: parseEther(stakeAmount)
    })
  }

  const {isLoading: isConfirming, isSuccess: isConfirmed} =
    useWaitForTransactionReceipt({
      hash,
    })

  useEffect(() => {
    toast.dismiss();
    
    if (isPending) toast.loading('Transaction is pending');

    if (isConfirming) toast.loading('Waiting for confirmation');

    if (isConfirmed) toast.success('Transaction confirmed');

  }, [isPending, isConfirming, isConfirmed]);

  return (
    <AccordionItem value={`${tokenData.id}-${pool.days}`} className="border-0 outline-0 no-underline">

      <AccordionTrigger className="p-4 rounded-xl bg-primary-light hover:no-underline">
        <div
          className="w-full flex flex-col sm:flex-row flex-wrap sm:justify-between items-center gap-4 me-4">

          <div>
            <h4 className="text-sm font-medium flex items-center">
              <Image src={tokenData?.image || ""} alt="Token Logo" width={30} height={30}/>
              {tokenSymbol} {pool.days} Days Staking Pool
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
                          {pool.min} - {pool.max} {tokenSymbol}
                        </span>
            </div>
            <div className="flex flex-col">
                        <span className="text-muted-foreground mb-1 text-xs">
                          Periodic %Profit
                        </span>
              <span className="text-sm">
                          {pool.profit}%
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
              href={`/analytics/pools/${tokenData.id}/${pool.days}`}
            >
              See Pool Info <ExternalLink size={16}/>
            </Link>
            <Link
              className="text-primary flex items-center gap-2"
              href={`https://etherscan.io/address/${tokenContractAddr}`}
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
              <div>

                <div className="flex gap-4 mt-2">
                  <input
                    type="number"
                    className="w-full rounded-xl p-2 border-2 border-primary"
                    placeholder="Enter Amount"
                    onChange={(e) => setStakeAmount(e.target.value)}
                    value={stakeAmount}
                  />
                  <button
                    className="border-2 border-primary font-semibold text-primary rounded-xl px-4 py-2"
                    onClick={onStake}
                    disabled={isPending || isConfirming}
                  >
                    Stake
                  </button>
                </div>
                {error && (
                  <div className="mt-2 text-red-500">Error: {(error as BaseError).shortMessage || error.message}</div>
                )}
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
}
