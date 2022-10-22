import Image from 'next/image';
import styles from '../../styles/components/WarrantyStatusForm.module.scss';
import Button from '../reusables/Button';

function WarrantyStatusForm() {
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
          <p>Product ID</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/tag.svg"
                height={18}
                width={18}
                alt="product id logo"
              />
            </div>
            <input type="text" required placeholder="XY82Yxhy764han8Hbas897" />
          </div>
        </label>
      </fieldset>
      <div className={styles.form__option}>
        <h3>--------</h3>
        <h2>OR</h2>
        <h3>--------</h3>
      </div>
      <fieldset>
        <label>
          <p>Your Name</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/user.svg"
                height={18}
                width={18}
                alt="user logo"
              />
            </div>
            <input type="text" required placeholder="John Doe" />
          </div>
        </label>

        <label>
          <p>Product Name</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/gift.svg"
                height={18}
                width={18}
                alt="product name logo"
              />
            </div>
            <input type="text" required placeholder="Apple Watch" />
          </div>
        </label>
      </fieldset>
      <fieldset>
        <label>
          <p>Date of Purchase</p>
          <div className={styles.form__inputContainer}>
            <div className={styles.form__inputContainer__logo}>
              <Image
                src="/calendar.svg"
                height={18}
                width={18}
                alt="date logo"
              />
            </div>
            <input type="email" required placeholder="02.08.2022" />
          </div>
        </label>
      </fieldset>
      <Button href="" type="submit" modifier="form-submit">
        Get Details
      </Button>
    </form>
  );
}

export default WarrantyStatusForm;
