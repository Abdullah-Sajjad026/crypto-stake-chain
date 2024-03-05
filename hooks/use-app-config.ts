import {create} from 'zustand';

type AppConfig = {
  selectedNetwork: {
    name: string
  };
  setSelectedNetwork: (network: AppConfig['selectedNetwork']) => void;
}

export const useAppConfig = create<AppConfig>((set) => ({
  selectedNetwork: {
    name: "Ethereum"
  },
  setSelectedNetwork: (network: AppConfig['selectedNetwork']) => set({selectedNetwork: network})
}));
