export const useCheckWeb3 = async (): Promise<any> => {
  console.log('check web3 support');

  if (typeof window.ethereum !== 'undefined') {
    const [account] = await window.ethereum.request({
      method: 'eth_requestAccounts',
    });

    return await Promise.resolve(account);
  } else {
    throw new Error('Please download metamask');
  }
};
