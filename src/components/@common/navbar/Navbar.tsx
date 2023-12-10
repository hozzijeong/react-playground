import { Link } from 'react-router-dom';
import { URL_PATH } from '../../../constants/urls';
import styles from './Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			{Object.entries(URL_PATH).map(([key, value]) => (
				<Link key={key} to={value}>
					{key}
				</Link>
			))}
		</nav>
	);
};

export default Navbar;
