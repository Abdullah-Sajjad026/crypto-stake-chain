'use client'

import {createWeb3Modal, defaultConfig} from '@web3modal/ethers/react'

// 1. Get projectId at https://cloud.walletconnect.com
const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!;

// 2. Set chains
const chains = [
  // eth mainnet
  {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
  },
  // eth sepolia
  {
    chainId: 11155111,
    name: 'Sepolia',
    currency: 'SepoliaETH',
    explorerUrl: 'https://sepolia.etherscan.io',
    rpcUrl: 'https://rpc2.sepolia.org'
  },
  // Binance Smart Chain
  {
    chainId: 56,
    name: 'Binance Smart Chain',
    currency: 'BNB',
    explorerUrl: 'https://bscscan.com',
    rpcUrl: 'https://bsc-dataseed.binance.org'
  },
]


// 3. Create modal
const metadata = {
  name: '100k Stake',
  description: '100k Stake is a decentralized platform for staking and yield farming.',
  url: 'http://localhost:3000', // origin must match your domain & subdomain
  icons: ['https://avatars.mywebsite.com/']
}

createWeb3Modal({
  ethersConfig: defaultConfig({metadata}),
  chains,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  themeMode: 'light', // Optional - defaults to 'light'
  themeVariables: {
    "--w3m-accent": "#69C3FF",
  }
})

export default function Web3ModalProvider({children}: {
  children: React.ReactNode
}) {
  return children
}
