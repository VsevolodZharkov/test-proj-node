import React from 'react';
import { Icons } from '../../components/Icons/icons';
import styles from './logout.module.css';
import { logOut } from '../../redux/Auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'usehooks-ts';

const Logout = () => {
  const dispath = useDispatch();

  const handlerLogOut = () => {
    dispath(logOut());
  };

  const matches = useMediaQuery('(min-width:767px)');

  return (
    <button
      className={`${styles.button} ${matches ? styles.border : ''}`}
      type="button"
      onClick={handlerLogOut}
    >
      <Icons
        name="logout"
        className=""
        color="currentColor"
        width="16"
        height="16"
      />
    </button>
  );
};

export default Logout;
