import type { NextPage } from 'next';

// components
import Meta from '../components/utils/Meta';
import FormDescription from '../components/forms/FormDescription';
import WarrantyStatusForm from '../components/forms/WarrantyStatusForm';

// styles
import styles from '../styles/components/FormDescription.module.scss';

// variables / constants

const meta = {
  title: 'Status',
  description:
    'Status for minted warranty. Users can check the status of their warranty tokens here.',
};

const formDescription = {
  title: "Check your Product's Warranty status ?",
  description:
    'Fill the Following Form to check the status of your Product’s Warranty Card using NFT technology.',
  buttonText: 'My Warranties',
  buttonLink: '/check-warranty',
};

const Register: NextPage = () => {
  return (
    <>
      <Meta {...meta} />
      <div className={styles.container}>
        <FormDescription {...formDescription} />
        <WarrantyStatusForm />
      </div>
    </>
  );
};

export default Register;
