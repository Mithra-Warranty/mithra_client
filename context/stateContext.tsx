import React, { createContext, useState, useContext } from 'react';
import { Contract } from 'ethers';
interface AppCtx {
  userAddress: string;
  setUserAddress: (address: string) => void;
  contractAddress: string;
  setContractAddress: (address: string) => void;
  contract: Contract | null;
  setContract: (contract: Contract) => void;
}

interface ContextProps {
  children: React.ReactNode;
}

const Context = createContext<AppCtx | null>(null);

export const StateContext = ({ children }: ContextProps): JSX.Element => {
  const [userAddress, setUserAddress] = useState('');
  const [contractAddress, setContractAddress] = useState('');
  const [contract, setContract] = useState<Contract | null>(null);

  return (
    <Context.Provider
      value={{
        userAddress,
        setUserAddress,
        contractAddress,
        setContractAddress,
        contract,
        setContract,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = (): AppCtx | null => useContext(Context);
