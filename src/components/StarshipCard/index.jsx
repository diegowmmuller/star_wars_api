import styles from './starship-card.module.css';
export const StarshipCard = ({ starship }) => {
	return (
		<article className={styles.card}>
			<h2 className={styles.shipName}>{starship.name}</h2>
			<p className={styles.shipInfo}>
				<span className={styles.span}>Modelo:</span> {starship.model}
			</p>
			<p className={styles.shipInfo}>
				<span className={styles.span}>Classe:</span> {starship.starship_class}
			</p>
			<div className={styles.imageContainer}>
				<img className={styles.image} src={`/${starship.name}.png`} alt={starship.name} />
			</div>
		</article>
	);
};
