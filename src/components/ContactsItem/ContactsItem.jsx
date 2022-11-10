import React from 'react';
import styles from './ContactsItem.module.css';
import sprite from '../../svg/symbol-defs.svg';

const ContactsCard = ({
  name,
  photo,
  position,
  tasks,
  email,
  linkedin,
  github,
}) => {
  return (
    <div className={styles.container}>
      <img src={photo} className={styles.image} alt="profile" />
      <div className={styles.box}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.position}>{position}</p>
        <p className={styles.description}>{tasks}</p>

        <ul className={styles.contacts}>
          <li className={styles.contactsWrapper}>
            <a href={linkedin} target="_blank" rel="noreferrer">
              &nbsp;
              <svg className={styles.contactsLogo}>
                <use href={sprite + '#linkedin-logo'} />
              </svg>
            </a>
          </li>
          <li className={styles.contactsWrapper}>
            <a href={github} target="_blank" rel="noreferrer">
              &nbsp;
              <svg className={styles.contactsLogo}>
                <use href={sprite + '#github-logo'} />
              </svg>
            </a>
          </li>
          <li className={styles.contactsWrapper}>
            <a href={`mailto:${email}`}>
              <svg className={styles.contactsLogo}>
                <use href={sprite + '#email-logo'} />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactsCard;
