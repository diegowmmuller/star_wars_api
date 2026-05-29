import { Link } from 'react-router-dom';
import styles from './film-card.module.css';

export const FilmCard = ({ film }) => {
	const path = film.url.split('/');
	const [id] = path.slice(-1);

	return (
		<Link className={styles.card} to={`/films/${id}`}>
			<div>
				<h2 className={styles.filmName}>{film.title}</h2>
			</div>
			<div className={styles.imageContainer}>
				<img className={styles.image} src={`/${film.title}.jpg`} alt="" />
			</div>
		</Link>
	);
};
