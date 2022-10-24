// styles
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/components/FormDescription.module.scss';

interface Props {
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

function FormDescription({
  title,
  description,
  buttonText,
  buttonLink,
}: Props): JSX.Element {
  return (
    <header className={styles.header}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.header__pattern}>
        <Image
          src="/asset1.svg"
          height={130}
          width={130}
          alt="abstract pattern"
        />
      </div>
      <button>
        <div className={styles.ellipse}>
          <Image src="/ellipsis.svg" height={30} width={30} alt="Circle" />
        </div>
        <Link href={buttonLink}>
          <a>{buttonText}</a>
        </Link>
        <div className={styles.arrow}>
          <Image src="/arrow.svg" height={35} width={40} alt="Arrow" />
        </div>
      </button>
    </header>
  );
}

export default FormDescription;
