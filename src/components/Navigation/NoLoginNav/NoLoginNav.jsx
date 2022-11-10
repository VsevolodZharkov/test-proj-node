import styles from './NoLoginNav.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const NoLoginNav = () => {
  const location = useLocation();

	return (
		<>
			<nav>
				<NavLink to="/contacts" state={location} className={styles.link}>
        	Contacts
      	</NavLink>
			</nav>
		</>
	)
}

export default NoLoginNav;