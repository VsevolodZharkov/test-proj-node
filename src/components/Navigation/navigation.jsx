import { NavLink, useLocation } from 'react-router-dom';
import styles from './navigation.module.css';
import Logout from 'components/Loguot/logout';
import { useMediaQuery } from 'usehooks-ts';

const Navigation = ({ handlerMenu, isLogin, isActive }) => {
  const location = useLocation();

  const matches = useMediaQuery('(max-width:767px)');

  return (
    <nav
      className={`${styles.nav} ${isActive ? styles.active : ''}`}
    >
      <ul className={styles.list}>
        {isLogin && (
          <li className={styles.nav_item}>
            <NavLink
              to="/home"
              state={location}
							className={({isActive}) => isActive ? styles.link_btn_active : styles.link_btn }
              onClick={handlerMenu}
            >
              Home
            </NavLink>
          </li>
        )}

        {isLogin && (
          <li className={styles.nav_item}>
            <NavLink
              to="/materials"
              state={location}
							className={({isActive}) => isActive ? styles.link_btn_active : styles.link_btn }
              onClick={handlerMenu}
            >
              Materials
            </NavLink>
          </li>
        )}
        <li className={styles.nav_item}>
          <NavLink
            to="/contacts"
            state={location}
            className={({isActive}) => isActive ? styles.link_btn_active : styles.link_btn }
            onClick={handlerMenu}
          >
            Contacts
          </NavLink>
        </li>
        {isLogin && matches && (
          <li className={styles.nav_item}>
            <NavLink
              to="/auth"
              state={location}
              className={styles.link_btn}
              onClick={handlerMenu}
            >
              <Logout />
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Navigation;
