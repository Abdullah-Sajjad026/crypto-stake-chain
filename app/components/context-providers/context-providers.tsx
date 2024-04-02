import {ReactQueryClientProvider} from "./react-query-client-provider";
import Web3ModalProvider from "@/app/components/context-providers/web3-modal-provider";
import {headers} from "next/headers";
import {cookieToInitialState} from "wagmi";
import {wagmiConfig} from "@/app/constants/wagmi-config";
import {Toaster} from "react-hot-toast";

export default function ContextProviders({children}: { children: React.ReactNode }) {
  const initialState = cookieToInitialState(wagmiConfig, headers().get('cookie'))

  return (
    <Web3ModalProvider initialState={initialState}>
      <ReactQueryClientProvider>
        {children}
        <Toaster/>
      </ReactQueryClientProvider>
    </Web3ModalProvider>
  )
}
