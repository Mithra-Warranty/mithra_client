import type { NextPage } from 'next';

// components
import Meta from '../components/utils/Meta';
import FormDescription from '../components/forms/FormDescription';
import RegistrationForm from '../components/forms/RegistrationForm';

// styles
import styles from '../styles/components/FormDescription.module.scss';

// variables / constants

const meta = {
  title: 'Register',
  description:
    'Brand registration for Mithra. Brands can register and deploy a contract here.',
};

const formDescription = {
  title: 'Register & Deploy a contract with us !!',
  description:
    'Register your Brand here to gain Admin Access to your Minted NFTs.',
  buttonText: 'Check warranty',
  buttonLink: '/check-warranty',
};

const Register: NextPage = () => {
  return (
    <>
      <Meta {...meta} />
      <div className={styles.container}>
        <FormDescription {...formDescription} />
        <RegistrationForm />
      </div>
    </>
  );
};

export default Register;
