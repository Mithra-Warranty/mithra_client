import { ethers, ContractFactory } from 'ethers';
import WarrantyABI from '../abi/Warranty.json';

export const useDeployContract = async (
  tokenName: string,
  tokenSymbol: string,
  address: string
): Promise<any> => {
  try {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const signer = provider.getSigner(address);
    console.log(signer);

    const factory = new ContractFactory(
      WarrantyABI.abi,
      WarrantyABI.bytecode,
      signer
    );

    const contract = await factory.deploy(tokenName, tokenSymbol);

    await contract.deployTransaction.wait();

    console.log(contract);

    return await Promise.resolve({ contract, address });
  } catch (error) {
    return await Promise.reject(error);
  }
};
