import { Link } from 'react-router-dom';
import styles from './PageNotFound.module.css';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getIsLoggedIn } from '../../redux/Auth/auth-selector';

const PageNotFound = () => {
  const isLogin = useSelector(getIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin) {
      navigate('/home');
      return;
    }
  }, [isLogin, navigate]);

  return (
    <>
      <div className={styles.NotFoundBackground}></div>
      <Link to="/home">
        <div className={styles.NotFoundList}>
          <img
            className={styles.NotFoundImg}
            src="https://media.tenor.com/zXKPbuZpW0IAAAAC/memeblog-gachi.gif"
            alt="not found"
          />
          <p className={styles.NotFoundText}>
            I'm sorrry! This page doesn't exist 🤨
          </p>

          <button className={styles.NotFoundButton} type="button">
            Open home page....
          </button>
        </div>
      </Link>
    </>
  );
};

export default PageNotFound;
