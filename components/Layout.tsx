interface Props {
  children: React.ReactNode;
}

import styles from '../styles/components/Layout.module.scss';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }: Props) {
  return (
    <div className={styles.layout}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
