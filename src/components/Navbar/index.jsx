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
					Naves
				</Link>
				<Link className={styles.link} to="/vehicles">
					Veículos
				</Link>
				<Link className={styles.link} to="/species">
					Espécies
				</Link>
				<Link className={styles.link} to="/planets">
					Planetas
				</Link>
				<Link className={styles.link} to="/people">
					Personagens
				</Link>
				<Link className={styles.link} to="/films">
					Filmes
				</Link>
			</nav>
		</div>
	);
};
