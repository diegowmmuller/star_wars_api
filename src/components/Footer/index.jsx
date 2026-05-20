import styles from './footer.module.css';

function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.topLine}></div>

			<div className={styles.content}>
				<div className={styles.left}>
					<h2>Star Wars Api</h2>

					<p>Explore the Star Wars universe through characters, planets, vehicles and starships.</p>
				</div>

				<div className={styles.center}>
					<span>Status: ONLINE</span>
					<span>Galaxy Network: ACTIVE</span>
				</div>

				<div className={styles.right}>
					<p>Criação: Diego Muller</p>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
