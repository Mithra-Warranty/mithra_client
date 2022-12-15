import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import styles from '../../styles/components/WarrantyStatusForm.module.scss';
import Button from '../reusables/Button';

function WarrantyStatusForm(): JSX.Element {
  const [productId, setProductId] = useState<string>('');
  const [walletAddress, setWalletAddress] = useState<string>('');
  const [productName, setProductName] = useState<string>('');
  const [dateOfPurchase, setDateOfPurchase] = useState<string>('');

  const router = useRouter();

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<any> => {
    e.preventDefault();

    let body;

    if (productId !== '') {
      body = JSON.stringify({ productId });
    } else if (
      productName !== '' &&
      walletAddress !== '' &&
      dateOfPurchase !== ''
    ) {
      body = JSON.stringify({
        name: productName,
        owner: walletAddress,
        saleDate: dateOfPurchase,
      });
    } else {
      toast.error('Please fill in all fields correctly');
      return;
    }

    try {
      const fetchPromise = fetch('http://localhost:5050/api/v1/token/single', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body,
      });

      const response = await toast.promise(fetchPromise, {
        pending: 'Fetching data...',
        error: 'Error fetching data',
      });

      console.log(response);

      if (response.ok) {
        const data = await response.json();
        await router.push(`/warranty/${String(data.productId)}`);
      } else {
        throw new Error('Entry not found');
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error('An error occurred.');
      }
    }

    console.log(body);

    setProductId('');
    setWalletAddress('');
    setProductId('');
    setDateOfPurchase('');
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
          <p>Product ID</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/tag.svg"
                height={18}
                width={18}
                alt="product id logo"
              />
            </div>
            <input
              type="text"
              required
              placeholder="XY82Yxhy764han8Hbas897"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>
        </label>
      </fieldset>
      <div className={styles.form__option}>
        <h3>--------</h3>
        <h2>OR</h2>
        <h3>--------</h3>
      </div>
      <fieldset>
        <label>
          <p>Your Wallet Address</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image src="/user.svg" height={18} width={18} alt="user logo" />
            </div>
            <input
              type="text"
              required
              placeholder="0xb794f5ea0ba39494..."
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
            />
          </div>
        </label>

        <label>
          <p>Product Name</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/gift.svg"
                height={18}
                width={18}
                alt="product name logo"
              />
            </div>
            <input
              type="text"
              required
              placeholder="Apple Watch"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
        </label>
      </fieldset>
      <fieldset>
        <label>
          <p>Date of Purchase</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/calendar.svg"
                height={18}
                width={18}
                alt="date logo"
              />
            </div>
            <input
              type="email"
              required
              placeholder="02.08.2022"
              value={dateOfPurchase}
              onChange={(e) => setDateOfPurchase(e.target.value)}
            />
          </div>
        </label>
      </fieldset>
      <Button href="" type="submit" modifier="form-submit">
        Get Details
      </Button>
    </form>
  );
}

export default WarrantyStatusForm;
