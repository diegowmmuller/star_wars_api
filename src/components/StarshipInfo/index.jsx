import styles from './starship-info.module.css';

export const StarshipInfo = ({ starship }) => {
	return (
		<div className={styles.container}>
			<section className={styles.hero}>
				<h2>TECHNICAL SPECIFICATIONS</h2>
			</section>

			<section className={styles.content}>
				<div className={styles.card}>
					<span>COST</span>
					<p>{starship.cost_in_credits}</p>
				</div>

				<div className={styles.card}>
					<span>CREW</span>
					<p>{starship.crew}</p>
				</div>

				<div className={styles.card}>
					<span>PASSENGERS</span>
					<p>{starship.passengers}</p>
				</div>

				<div className={styles.card}>
					<span>CARGO</span>
					<p>{starship.cargo_capacity}</p>
				</div>

				<div className={styles.card}>
					<span>LENGTH</span>
					<p>{starship.length}</p>
				</div>

				<div className={styles.card}>
					<span>ATMOSPHERIC SPEED</span>
					<p>{starship.max_atmosphering_speed}</p>
				</div>

				<div className={styles.card}>
					<span>HYPERDRIVE</span>
					<p>{starship.hyperdrive_rating}</p>
				</div>

				<div className={styles.card}>
					<span>MGLT</span>
					<p>{starship.MGLT}</p>
				</div>
			</section>
		</div>
	);
};
