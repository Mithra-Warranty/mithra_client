// styles
import styles from '../styles/components/dashboard.module.scss';
import Button from './reusables/Button';

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.card__image_container}>
        <img src="/cardTemp.png" />
      </div>
      <div className={styles.card__details}>
        <div className={styles.card__details__items}>
          <h4>Product</h4>
          <p>Air Jordans</p>
        </div>
        <div className={styles.card__details__items}>
          <h4>Owner</h4>
          <p className={styles.owner_address}>0xAbsd786nascm...</p>
        </div>
        <div className={styles.card__details__items}>
          <h4>Sale Date</h4>
          <p>10.08.2022</p>
        </div>
        <div className={styles.card__details__claimed}>
          <a href="#">Warranty claimed: hashmi.adnan791@gmail.com</a>
        </div>
        <Button type="button" modifier="small" href="">
          Approve
        </Button>
      </div>
    </div>
  );
}

export default Card;
