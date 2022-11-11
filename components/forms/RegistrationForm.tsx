import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useStateContext } from '../../context/stateContext';
import { useCheckWeb3 } from '../../hooks/useCheckWeb3';
import { useDeployContract } from '../../hooks/useDeployContract';
import styles from '../../styles/components/RegistrationForm.module.scss';
import Button from '../reusables/Button';

function RegistrationForm(): JSX.Element {
  const [email, setEmail] = useState<string>('');
  const [brandName, setBrandName] = useState<string>('');
  const [tokenName, setTokenName] = useState<string>('');
  const [tokenSymbol, setTokenSymbol] = useState<string>('');

  const context = useStateContext();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<any> => {
    e.preventDefault();
    if (context === null) return;

    const {
      userAddress,
      setUserAddress,
      setContractAddress,
      contract,
      setContract,
      contractAddress,
    } = context;

    try {
      const currentAccountAddress = await useCheckWeb3();
      setUserAddress(currentAccountAddress);

      console.log(userAddress);

      const deployPromise = useDeployContract(
        tokenName,
        tokenSymbol,
        currentAccountAddress
      );

      const deployResponse = await toast.promise(deployPromise, {
        pending: 'Deploying contract...',
        success: 'Contract deployed successfully!',
        error: 'Error deploying contract',
      });

      console.log(deployResponse);
      setContract(deployResponse.contract);
      setContractAddress(deployResponse.contract.address);

      if (contract === null) return;

      const symbol = await contract.symbol();

      console.log(symbol);

      const serverResponse = await fetch(
        `http://localhost:5050/api/v1/brand/init/${userAddress}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            ethAddress: currentAccountAddress,
            name: brandName,
            email,
            tokenSymbol,
            tokenName,
            contractAddress,
          }),
        }
      );

      if (!serverResponse.ok) {
        throw new Error('Server error');
      }

      toast.success('Brand registered successfully!');

      setEmail('');
      setBrandName('');
      setTokenName('');
      setTokenSymbol('');
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('user rejected')) {
          toast.error('Please approve the transaction in metamask');
          return;
        }
        toast.error(error.message);
      } else {
        toast.error('Unexpected error');
      }

      console.log(error);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.form__pattern}>
        <Image
          src="/assetDots.svg"
          height={230}
          width={150}
          alt="abstract pattern"
        />
      </div>
      <fieldset>
        <label>
          <p>Brand Name</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/brandname.svg"
                height={18}
                width={18}
                alt="brand name logo"
              />
            </div>
            <input
              type="text"
              required
              placeholder="Nike"
              value={brandName}
              onChange={(e) => setBrandName(e.target.value)}
            />
          </div>
        </label>
      </fieldset>
      <fieldset>
        <label>
          <p>Token Name</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/tokenName.svg"
                height={18}
                width={18}
                alt="brand name logo"
              />
            </div>
            <input
              type="text"
              required
              placeholder="NIKE"
              value={tokenName}
              onChange={(e) => setTokenName(e.target.value)}
            />
          </div>
        </label>

        <label>
          <p>Token Symbol</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/tokenSymbol.svg"
                height={18}
                width={18}
                alt="brand name logo"
              />
            </div>
            <input
              type="text"
              required
              placeholder="NKE"
              value={tokenSymbol}
              onChange={(e) => setTokenSymbol(e.target.value)}
            />
          </div>
        </label>
      </fieldset>
      <fieldset>
        <label>
          <p>Email address</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/email.svg"
                height={18}
                width={18}
                alt="brand name logo"
              />
            </div>
            <input
              type="email"
              required
              placeholder="contact@nike.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </label>
      </fieldset>
      <Button href="" type="submit" modifier="form-submit">
        Submit
      </Button>
    </form>
  );
}

export default RegistrationForm;
