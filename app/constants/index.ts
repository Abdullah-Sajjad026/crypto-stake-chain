import ASSETS from "@/app/assets";
import {abiEthStakingContract} from "@/app/constants/contract-abis";

export type TSupportedToken = {
  id: string,
  address: string,
}


export const AppNetworks = [
  {
    isActive: true,
    label: "Ethereum",
    value: "eth",
    icon: ASSETS.icons.eth,
    chainId: 1
  },
  {
    isActive: true,
    label: "Binance Smart Chain",
    value: "bnb-chain",
    icon: ASSETS.icons.bnbChain,
    chainId: 56
  },
  {
    isActive: false,
    label: "Aptos",
    value: "aptos",
    icon: ASSETS.icons.aptos,
    chainId: 43114
  },
  {
    isActive: false,
    label: "Arbitrum",
    value: "arbitrum",
    icon: ASSETS.icons.arbitrum,
    chainId: 42161
  },
  {
    isActive: false,
    label: "Optimism",
    value: "optimism",
    icon: ASSETS.icons.optimism,
    chainId: 10
  }
]

export const AllSupportedTokens = [
  "ethereum", "weth", "binancecoin", "binance-usd", "pancakeswap-token", "baby-doge-coin", "trust-wallet-token", "stepn", "coin98", "tether", "usd-coin", "uniswap", "chainlink", "wrapped-bitcoin", "apecoin"
]

export const NetworkSupportedTokens = {
  "bnb-chain": [
    // {
    //   "id": "binancecoin",
    //   address: "0xb8c77482e45f1f44de1745f52c74426c631bdd52",
    //   "decimal_place": 18,
    // },
    {
      "id": "binance-usd",
      "address": "0xe9e7cea3dedca5984780bafc599bd69add087d56"

    },
    {
      "id": "pancakeswap-token",
      "address": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"

    },
    {
      "id": "baby-doge-coin",
      address: "0xc748673057861a797275cd8a068abb95a902e8de"
    },
    {
      "id": "trust-wallet-token",
      address: "0x4b0f1812e5df2a09796481ff14017e6005508003\n"
    },
    {
      "id": "stepn",
      address: "0x3019BF2a2eF8040C242C9a4c5c4BD4C81678b2A1"
    },
    {
      "id": "coin98",
      address: "0xaec945e04baf28b135fa7c640f624f8d90f1c3a6"
    },
    {
      "id": "wrapped-bitcoin",
      address: "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c"
    }

  ],
  "eth": [
    // {
    //   "id": "ethereum",
    //   address: "0x"
    // },
    {
      "id": "weth",
      address: "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
    },
    {
      "id": "tether",
      address: "0xdac17f958d2ee523a2206206994597c13d831ec7"
    },
    {
      "id": "usd-coin",
      address: "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48"
    },
    {
      "id": "uniswap",
      address: "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984"
    },
    {
      "id": "chainlink",
      address: "0x514910771af9ca656af840dff83e8264ecf986ca"
    },
    {
      "id": "wrapped-bitcoin",
      address: "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
    },
    {
      "id": "apecoin",
      address: "0x4d224452801aced8b2f0aebe155379bb5d594381"
    }
  ]
}

export const poolsMap = {
  "ethereum": {
    symbol: "ETH",
    tokenContract: "0xfFb78b2D039dfa18eDABbF93A987Fc3D9094aFdd",
    poolContract: "0xEE2b31B564E5B7D3E5f71Ad5cdfD54B5Ef52D8eC",
    poolAbi: abiEthStakingContract,
    pools: [
      {
        days: 14,
        min: 0.5,
        max: 5,
        profit: 0.8
      },
      {
        days: 30,
        min: 5,
        max: 10,
        profit: 2
      },
      {
        days: 60,
        min: 8,
        max: 25,
        profit: 5
      },
      {
        days: 90,
        min: 15,
        max: 50,
        profit: 8.5
      }
    ]
  }
}
