import type { NextPage } from 'next';

// styles
import styles from '../../styles/components/dashboard.module.scss';

// components
import Meta from '../../components/utils/Meta';
import { useState } from 'react';
import Card from '../../components/Card';

// variables / constants

const meta = {
  title: 'Brand Dashboard',
  description: 'Mithra Dashboard for brands.',
};

const Dashboard: NextPage = () => {
  const [tab, setTab] = useState('Pending');

  const [products] = useState<any>({
    Approved: [{}, {}, {}, {}],
    Pending: [{}, {}, {}, {}],
  });

  return (
    <>
      <Meta {...meta} />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>
            <span>Nike</span> Admin Dashboard
          </h2>
          <div className={styles.tabs}>
            <div
              onClick={(e) => {
                setTab('Approved');
              }}
              className={`${styles.tabs__tab} ${
                tab === 'Approved' ? styles.active : ''
              }`}
            >
              <h3>Approved</h3>
            </div>
            <div
              onClick={(e) => {
                setTab('Pending');
              }}
              className={`${styles.tabs__tab} ${
                tab === 'Pending' ? styles.active : ''
              }`}
            >
              <h3>Pending</h3>
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          {products[tab].map((product: any, index: number) => (
            <Card key={`Card_${index}`} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Dashboard;
