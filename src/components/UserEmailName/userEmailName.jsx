import styles from './UserEmailName.module.css';
import { useSelector } from 'react-redux';

import { getAvatarURL, getEmail } from '../../redux/Auth/auth-selector';

import Logout from 'components/Loguot/logout';
import { useMediaQuery } from 'usehooks-ts';

const UserEmailName = () => {
  const userName = useSelector(getEmail);
  const useAvatarURL = useSelector(getAvatarURL);

  const email = userName.split('@')[0];
  const shortEmail = email.slice(0, 6) + '...';

  const emailLatter = userName.slice(0, 1).toUpperCase();
  const matches = useMediaQuery('(min-width:768px)');
  return (
    <div className={styles.wrapper}>
      <div className={styles.usr_data}>
        {useAvatarURL ? (
          <img className={styles.avatar} src={useAvatarURL} alt="User phpto" />
        ) : (
          <p className={styles.avatar}>{emailLatter}</p>
        )}

        <p className={styles.text}>{email.length > 6 ? shortEmail : email}</p>
      </div>
      {matches && <Logout />}
    </div>
  );
};

export default UserEmailName;
