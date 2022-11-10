import ContactsItem from '../../components/ContactsItem';
import Appear from 'components/common/Appear';
import { nanoid } from 'nanoid';
import { contacts } from '../../components/data/contacts.js';

import styles from './ContactsPage.module.css';

const ContactsPage = () => {
  return (
    <Appear time={600}>
      <div className={styles.wrapper}>
        <div className={styles.headContainer}>
          <h2 className={styles.head}>Our team</h2>
        </div>
        <ul className={styles.ourTeam}>
          {contacts.map(item => (
            <li key={nanoid()} className={styles.ourTeam_Item}>
              <ContactsItem {...item} />
            </li>
          ))}
        </ul>
      </div>
    </Appear>
  );
};

export default ContactsPage;
