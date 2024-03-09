import {ReactQueryClientProvider} from "./react-query-client-provider";
import Web3ModalProvider from "@/app/components/context-providers/web3-modal-provider";

export default function ContextProviders({children}: { children: React.ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <Web3ModalProvider>
        {children}
      </Web3ModalProvider>
    </ReactQueryClientProvider>
  )
}
