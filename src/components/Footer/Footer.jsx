import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { Icons } from '../../components/Icons/icons';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.pos_cont}>
          <p className={styles.text}>&copy; 2021</p>
          <p className={styles.text}>All Rights Reserved</p>
          <p className={styles.textlast}>Developed with</p>
          <Icons
            className={styles.icons}
            name="heart"
            color="#FF6B09"
            width="13"
            height="13"
          />
        </div>
        <div className={styles.pos_cont_two}>
          <p className={styles.textLast_by}>by</p>
          <Link className={styles.link} to="/contacts">GoIT Students</Link>
        </div>
      </div>
    </footer>
  );
}
