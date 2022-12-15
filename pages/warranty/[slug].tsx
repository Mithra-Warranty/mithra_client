/* eslint-disable @typescript-eslint/no-floating-promises */
import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

// styles
import styles from '../../styles/components/warrantyPage.module.scss';

// components
import Meta from '../../components/utils/Meta';
import Button from '../../components/reusables/Button';
import Table from '../../components/tables/Table';

// mock data
import MockWarranty from '../mocks/MockWarranty.json';

// variables / constants

const mockWarranty = MockWarranty;

const warrantyHistory = {
  event: 'Event',
  to: 'To',
  from: 'From',
  date: 'Date',
  txn: 'Transaction',
};

const meta = {
  title: 'Warranty Card',
  description: 'Warranty Card for your product.',
};

interface Transaction {
  event: string;
  date: string;
  from: string;
  to: string;
  email: string;
  price: string;
  txnId: string;
  txnHash: string;
}

interface Product {
  name: string;
  owner: string;
  tokenId: number;
  nonce: string;
  claim: boolean;
  productId: string;
  brand: string;
  brandAddress: string;
  contractAddress: string;
  metaHash: string;
  tokenUri: string;
  minter: string;
  mintedOn: Date;
  period: Date;
  description: number;
  forSale: boolean;
  approval: Transaction;
  approvalStatus: boolean;
  transactions: [Transaction];
  saleDate: string;
  email: string;
}

const WarrantyCard: NextPage = () => {
  const [product, setProduct] = useState<any>(mockWarranty);

  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (slug === undefined) return;

    const fetchData = async (): Promise<any> => {
      try {
        const response = await fetch(
          'http://localhost:5050/api/v1/token/single',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ productId: slug }),
          }
        );

        const data = await response.json();
        console.log(data);
        setProduct(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [slug]);

  return (
    <>
      <Meta {...meta} />
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.card}>
            <div className={styles.card__header}>
              <p>Nike</p>
              <p>@John</p>
            </div>
            <div className={styles.card__image}>
              <img src="/cardTemp.png" />
            </div>
            <div className={styles.card__footer}>
              <p>10d: 20h: 35m</p>
              <p>Remaining Time</p>
            </div>
          </div>
          <div className={styles.top__desc}>
            <h2>Air Jordan</h2>
            <div className={styles.top__desc__item}>
              <h3>Miner</h3>
              <p>Nike</p>
            </div>
            <div className={styles.top__desc__item}>
              <h3>Owner</h3>
              <p>0xaasdA7asjAndaAjdc234 </p>
            </div>
            <div className={styles.top__desc__item}>
              <h3>Latest Sale</h3>
              <p>1.08.2022</p>
            </div>
            <div className={styles.top__desc__item}>
              <h3>Description</h3>
              <p className={styles.text}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                asperiores praesentium harum nostrum eveniet vero hic? Eius
                aliquid repellat sapiente reprehenderit, rerum ullam rem
                voluptas neque ipsa quos non ad.
              </p>
            </div>
            <Button type="button" modifier="secondary" href="">
              Claim Warranty
            </Button>
          </div>
        </div>
        <div className={styles.top__table}>
          <Table headers={warrantyHistory} data={product.history} />
        </div>
      </div>
    </>
  );
};
export default WarrantyCard;
