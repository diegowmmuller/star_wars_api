import styles from './starship-details-container.module.css';

export const StarshipDetailsContainer = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};
