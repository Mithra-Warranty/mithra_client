import styles from '../styles/components/Layout.module.scss';
import Footer from './Footer';
import Navbar from './Navbar';

interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
