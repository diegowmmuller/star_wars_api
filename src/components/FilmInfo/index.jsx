import styles from './film-info.module.css';
export const FilmInfo = ({ film }) => {
	return (
		<div className={styles.container}>
			<p>{film.opening_crawl}</p>
		</div>
	);
};
