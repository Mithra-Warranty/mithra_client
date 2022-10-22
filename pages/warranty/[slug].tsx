import type { NextPage } from 'next';

// styles
import styles from '../../styles/components/warrantyPage.module.scss';

// components
import Meta from '../../components/utils/Meta';
import Image from 'next/image';
import Button from '../../components/reusables/Button';
import Table from '../../components/tables/Table';
import { useState } from 'react';

// mock data
import MockWarranty from '../mocks/MockWarranty.json';

// variables / constants

const mockWarranty = MockWarranty

const warrantyHistory = {
  "event": "Event",
  "to": "To",
  "from": "From",
  "date": "Date",
  "txn": "Transaction"
}

const meta = {
  title: 'Warranty Card',
  description: 'Warranty Card for your product.',
};

const WarrantyCard: NextPage = () => {
  const [warranty, setWarranty] = useState<any>(mockWarranty)

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
          <Table headers={warrantyHistory} data={warranty.history} /> 
        </div>
      </div>
    </>
  );
};
export default WarrantyCard;
