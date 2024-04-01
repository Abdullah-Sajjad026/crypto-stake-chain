import {defaultWagmiConfig} from '@web3modal/wagmi/react/config'

import {cookieStorage, createStorage} from 'wagmi'
import {mainnet, sepolia, bsc} from 'wagmi/chains'

// Get projectId at https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: '100k Stake',
  description: '100k Stake is a decentralized platform for staking and yield farming.',
  url: 'http://localhost:3000', // origin must match your domain & subdomain
  icons: ['http://localhost:3000/favicon.ico']
}

// Create wagmiConfig
const chains = [mainnet, sepolia, bsc] as const
export const wagmiConfig = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})
