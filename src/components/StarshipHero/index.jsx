import styles from './starship-hero.module.css';
export const StarshipHero = ({ starship }) => {
	const { name, model, manufacturer, starship_class } = starship;
	return (
		<div className={styles.container}>
			<div className={styles.image}>
				<img src={`/${name}.png`} />
			</div>
			<div className={styles.info}>
				<h2>{name}</h2>
				<p>
					<span>Model:</span> {model}
				</p>
				<p>
					<span>Manufacturer:</span> {manufacturer}
				</p>
				<p>
					<span>Class:</span> {starship_class}
				</p>
			</div>
		</div>
	);
};
