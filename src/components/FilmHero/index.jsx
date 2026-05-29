import styles from './film-hero.module.css';
export const FilmHero = ({ film }) => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<img className={styles.image} src={`/${film.title}.jpg`} alt="" />
			</div>
			<div className={styles.infoContent}>
				<h2>{film.title}</h2>
				<p>Director: {film.director}</p>
				<p>Producer: {film.producer}</p>
				<p>Release: {film.release_date}</p>
			</div>
		</div>
	);
};
