import styles from './home.module.css';

export const Home = () => {
	return (
		<div>
			<div className={styles.container}>
				<div className={styles.stars}></div>

				<div className={styles.crawlContainer}>
					<div className={styles.crawl}>
						<h1>STAR WARS API</h1>

						<p>A long time ago in a galaxy far, far away....</p>

						<p>Explore characters, planets, starships and vehicles from the Star Wars universe using the SWAPI.</p>

						<p>Browse iconic heroes, discover legendary planets and navigate through the galaxy.</p>
					</div>
				</div>
			</div>
		</div>
	);
};
