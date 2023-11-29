import { Link } from 'react-router-dom';
import { URL_PATH } from '../../../constants/urls';
import styles from './Navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.nav}>
			<Link to={URL_PATH.home}>홈</Link>
			<Link to={URL_PATH.memoization}>메모이제이션</Link>
		</nav>
	);
};

export default Navbar;
