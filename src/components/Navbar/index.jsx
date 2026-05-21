import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
export const Navbar = () => {
	return (
		<div className={styles.container}>
			<div>
				<img className={styles.image} src="/logo.png" alt="Logo" />
			</div>
			<nav className={styles.links_container}>
				<Link className={styles.link} to="/">
					Home
				</Link>
				<Link className={styles.link} to="/starships">
					Ships
				</Link>
				<Link className={styles.link} to="/vehicles">
					Vehicles
				</Link>
				<Link className={styles.link} to="/species">
					Species
				</Link>
				<Link className={styles.link} to="/planets">
					Planets
				</Link>
				<Link className={styles.link} to="/people">
					People
				</Link>
				<Link className={styles.link} to="/films">
					Films
				</Link>
			</nav>
		</div>
	);
};
