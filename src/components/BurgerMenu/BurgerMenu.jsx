import { Icons } from 'components/Icons/icons';
import styles from './BurgerMenu.module.css';

export const BurgerMenu = ({ handlerMenu, isActive }) => {
  return (
    <button
      className={`${styles.burger} ${isActive ? styles.active : ''}`}
      type="button"
      onClick={handlerMenu}
      aria-expanded="false"
      aria-controls="menu"
      data-menu-button
    >
      <Icons
        name="threeHorizontalStripes"
        className={styles.burger__open}
        color="currentColor"
        width="20"
        height="20"
      />
      <Icons
        name="crossForClosing"
        className={styles.burger__close}
        color="currentColor"
        width="26"
        height="26"
      />
    </button>
  );
};

export default BurgerMenu;
