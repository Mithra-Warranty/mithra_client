import Image from 'next/image';
import styles from '../../styles/components/RegistrationForm.module.scss';
import Button from '../reusables/Button';

function RegistrationForm() {
  return (
    <form className={styles.form}>
      <div className={styles.form__pattern}>
        <Image
          src="/assetDots.svg"
          height={230}
          width={150}
          alt="abstract pattern"
        />
      </div>
      <fieldset>
        <label>
          <p>Brand Name</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/brandname.svg"
                height={18}
                width={18}
                alt="brand name logo"
              />
            </div>
            <input type="text" required placeholder="Nike" />
          </div>
        </label>
      </fieldset>
      <fieldset>
        <label>
          <p>Token Name</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/tokenName.svg"
                height={18}
                width={18}
                alt="brand name logo"
              />
            </div>
            <input type="text" required placeholder="NIKE" />
          </div>
        </label>

        <label>
          <p>Token Symbol</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/tokenSymbol.svg"
                height={18}
                width={18}
                alt="brand name logo"
              />
            </div>
            <input type="text" required placeholder="NKE" />
          </div>
        </label>
      </fieldset>
      <fieldset>
        <label>
          <p>Email address</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/email.svg"
                height={18}
                width={18}
                alt="brand name logo"
              />
            </div>
            <input type="email" required placeholder="contact@nike.com" />
          </div>
        </label>
      </fieldset>
      <Button href="" type="submit" modifier="form-submit">
        Submit
      </Button>
    </form>
  );
}

export default RegistrationForm;
