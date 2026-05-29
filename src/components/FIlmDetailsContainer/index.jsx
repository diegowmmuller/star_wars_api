import styles from './film-details-container.module.css';
export const FilmDetailsContainer = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};
