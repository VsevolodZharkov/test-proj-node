import Main from 'components/Main/Main';
import QuestionButton from 'components/QuestionButton/QuestionButton';
import { useEffect } from 'react';
import { userGet } from 'redux/Auth/user-operations';
import { useDispatch, useSelector } from 'react-redux';
import {
  getToken,
  getVerify,
  getLoading,
} from '../../redux/Auth/auth-selector';
import { tokenAuth } from '../../services/API';
import { Modal } from 'components/AuthForm/AuthModal';
import styles from './MainPage.module.css';

export default function MainPage() {
  const token = useSelector(getToken);
  const verify = useSelector(getVerify);
  const isLoading = useSelector(getLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    tokenAuth.set(token);
    if (!verify) {
      dispatch(userGet());
    }
  }, [dispatch, token, verify]);
  return (
    <>
      <section className={styles.mainContainer}>
        <Main />
        <QuestionButton />
        {!verify && !isLoading && <Modal />}
      </section>
    </>
  );
}
