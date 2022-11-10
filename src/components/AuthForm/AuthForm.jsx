import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn, signIn } from '../../redux/Auth/auth-operations';
import styles from './authForm.module.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormField } from './formic/FormField';
import { GoogleAuth } from './GoogleAuth';

export const AuthForm = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onChange = event => {
    switch (event.target.name) {
      case 'email':
        setEmail(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleLogin = event => {
    const credentials = { email, password };

    dispatch(logIn(credentials));
  };
  const handleRegister = () => {
    const credentials = { email, password };

    dispatch(signIn(credentials))
      .unwrap()
      .then(() => dispatch(logIn(credentials)))
      .catch(rejectedValueOrSerializedError =>
        console.log(rejectedValueOrSerializedError)
      );
  };
  const onHandleSigIn = async () => {
    window.location.replace('http://localhost:3001/api/googleAuth/google');
  };

  const schema = Yup.object({
    email: Yup.string()
      .email('Invalid e-mail')
      .max(50, 'E-mail must be less than 50 symbols')
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        'Invalid e-mail'
      )
      .required('Email is required'),
    password: Yup.string()
      .max(20, 'Password must be less than 20 symbols')
      .min(16, 'Password must be more than 16 symbols')
      .required('Password is required'),
  });

  GoogleAuth();
  return (
    <>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={schema}
      >
        {formik => (
          <div className={styles.formWrapper}>
            <Form className={styles.signUpForm} onChange={onChange}>
              <p className={styles.formText}>
                You can use your Google Account to authorize:
              </p>
              <button onClick={onHandleSigIn} className={styles.googleButton}>
                Google
              </button>
              <p className={styles.formText}>
                Or login to our app using e-mail and password:
              </p>
              <FormField
                className={styles.input}
                name="email"
                type="email"
                value={email}
                placeholder="E-mail"
                autoComplete="on"
              />
              <FormField
                className={styles.input}
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                autoComplete="on"
              />
              <div className={styles.formButtonWrapper}>
                <button
                  type="button"
                  to="/home"
                  className={styles.formButton}
                  onClick={handleLogin}
                >
                  Sign in
                </button>
                <button
                  type="button"
                  to="/home"
                  className={styles.formButton}
                  onClick={handleRegister}
                >
                  Sign up
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};
