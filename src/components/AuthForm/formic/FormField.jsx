import React from 'react';
import { ErrorMessage, useField } from 'formik';
import styles from './FormField.module.css';

export const FormField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2">
      <label className={styles.label} htmlFor={field.name}>
        {label}
      </label>
      <input
        className={`form-control shadow-none ${
          meta.touched && meta.error && 'is-invalid'
        }`}
        {...field}
        {...props}
        autoComplete="on"
      />
      <ErrorMessage
        component="div"
        name={field.name}
        className={styles.error}
      />
    </div>
  );
};
