// next/react imports
import Link from 'next/link';
import { ReactElement } from 'react';

// styles
import styles from '../../styles/components/Button.module.scss';

interface Props {
  type: 'button' | 'submit' | 'reset';
  modifier: string;
  children: string | ReactElement;
  href: string;
}

function Button({ type, modifier, children, href }: Props): JSX.Element {
  if (type === 'submit') {
    return (
      <button className={`${styles.btn} ${styles[modifier]}`} type={type}>
        {children}
      </button>
    );
  } else {
    return (
      <Link href={href} passHref>
        <button className={`${styles.btn} ${styles[modifier]}`} type={type}>
          {children}
        </button>
      </Link>
    );
  }
}

export default Button;
