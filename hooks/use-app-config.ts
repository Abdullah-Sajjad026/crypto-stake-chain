import {create} from 'zustand';
import {AppNetworks} from "@/app/constants";

type AppConfig = {
  selectedNetwork: typeof AppNetworks[0];
  setSelectedNetwork: (network: AppConfig['selectedNetwork']) => void;
}

export const useAppConfig = create<AppConfig>((set) => ({
  selectedNetwork: AppNetworks[0],
  setSelectedNetwork: (network: AppConfig['selectedNetwork']) => set({selectedNetwork: network})
}));
