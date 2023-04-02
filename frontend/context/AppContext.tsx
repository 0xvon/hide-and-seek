import { createContext, useContext, useState } from 'react';
import { ethers } from 'ethers';
import { HideAndSeek as HideAndSeekType } from '../types/abis/HideAndSeek';

interface AppState {
  provider: ethers.providers.Web3Provider | null;
  signer: ethers.Signer | null;
  address: string | null;
  hideAndSeek: HideAndSeekType | null;
  gamePlayState: any; // gamePlayStateの型を適切に定義してください
}

interface AppProviderProps {
  children: React.ReactNode;
}

const AppContext = createContext<[AppState, React.Dispatch<React.SetStateAction<AppState>>]>([
  {
    provider: null,
    signer: null,
    address: null,
    hideAndSeek: null,
    gamePlayState: null,
  },
  () => {},
]);

export const useAppProvider = () => useContext(AppContext);

export const AppProvider = (props: AppProviderProps) => {
  const [state, setState] = useState<AppState>({
    provider: null,
    signer: null,
    address: null,
    hideAndSeek: null,
    gamePlayState: null,
  });

  return <AppContext.Provider value={[state, setState]}>{props.children}</AppContext.Provider>;
};