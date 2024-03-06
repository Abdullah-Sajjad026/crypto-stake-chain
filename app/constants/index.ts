import ASSETS from "@/app/assets";

export const AppNetworks = [
  // Ehtereum, Binance Smart Chain, Aptos, Arbitrum, Optimism
  {
    isActive: true,
    label: "Ethereum",
    value: "eth",
    icon: ASSETS.icons.eth
  },
  {
    isActive: true,
    label: "Binance Smart Chain",
    value: "bnb-chain",
    icon: ASSETS.icons.bnbChain
  },
  {
    isActive: false,
    label: "Aptos",
    value: "aptos",
    icon: ASSETS.icons.aptos
  },
  {
    isActive: false,
    label: "Arbitrum",
    value: "arbitrum",
    icon: ASSETS.icons.arbitrum
  },
  {
    isActive: false,
    label: "Optimism",
    value: "optimism",
    icon: ASSETS.icons.optimism
  }
]

export const AllSupportedTokens = [
  "ethereum", "weth", "binancecoin", "binance-usd", "pancakeswap-token", "baby-doge-coin", "trust-wallet-token", "stepn", "coin98", "tether", "usd-coin", "uniswap", "chainlink", "wrapped-bitcoin", "apecoin"
]

export const NetworkSupportedTokens = {
  "bnb-chain": [
    "binancecoin", "binance-usd", "pancakeswap-token", "baby-doge-coin", "trust-wallet-token", "stepn", "coin98", "wrapped-bitcoin"
  ],
  "eth": [
    "ethereum", "weth", "tether", "usd-coin", "uniswap", "chainlink", "wrapped-bitcoin", "apecoin"
  ]
}
