import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/components/Navbar.module.scss';
import Button from './reusables/Button';

function Navbar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.navbar_container}>
      <nav className={styles.navbar}>
        <Link href="/">
          <h1 className={styles.navbar__logo}>
            <span className={styles['navbar__logo-span']}>मि</span>thra
          </h1>
        </Link>
        <ul className={styles.navList}>
          <Link href="/register" passHref>
            <li className={styles.navList__item}>
              <a>Register</a>
            </li>
          </Link>
          <Link href="/status" passHref>
            <li className={styles.navList__item}>
              <a>Warranty Status</a>
            </li>
          </Link>
          <Link href="/dashboard" passHref>
            <li className={styles.navList__item}>
              <a>Dashboard</a>
            </li>
          </Link>
          <Button type="submit" modifier="" href="">
            Connect Wallet
          </Button>
        </ul>
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      <nav className={`${styles.mobileNav} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.mobileNav__navList}>
          <Link href="/register" passHref>
            <li className={styles.mobileNav__navList__item}>
              <a>Register</a>
            </li>
          </Link>
          <Link href="/register" passHref>
            <li className={styles.mobileNav__navList__item}>
              <a>Warranty</a>
            </li>
          </Link>
          <Link href="/dashboard" passHref>
            <li className={styles.mobileNav__navList__item}>
              <a>Dashboard</a>
            </li>
          </Link>
          <Button type="submit" modifier="responsive-nav" href="">
            Connect Wallet
          </Button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

interface hamburgerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}
function Hamburger({ isOpen, setIsOpen }: hamburgerProps): JSX.Element {
  return (
    <button
      className={`${styles.hamburger} ${isOpen ? styles.open : ''}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <span
        className={styles.hamburger__line + ' ' + styles['hamburger__line-one']}
      />
      <span
        className={styles.hamburger__line + ' ' + styles['hamburger__line-two']}
      />
      <span
        className={
          styles.hamburger__line + ' ' + styles['hamburger__line-three']
        }
      />
    </button>
  );
}
