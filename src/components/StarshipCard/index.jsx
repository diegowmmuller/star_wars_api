import styles from './starship-card.module.css';
export const StarshipCard = ({ starship }) => {
	return (
		<article className={styles.card}>
			<h2>{starship.name}</h2>
			<p>Modelo: {starship.model}</p>
			<p>Classe: {starship.starship_class}</p>
		</article>
	);
};
