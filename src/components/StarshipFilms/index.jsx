import { useEffect, useState } from 'react';
import styles from './starship-films.module.css';
import { getFilmByUrl } from '../../api/axios';

export const StarshipFilms = ({ starship }) => {
	const [films, setFilms] = useState([]);

	useEffect(() => {
		if (!starship.films) return;

		async function getFilms() {
			for (let url of starship.films) {
				const response = await getFilmByUrl(url);
				const film = response.data;
				setFilms((prev) => [...prev, film]);
			}
		}
		getFilms();
	}, [starship]);

	useEffect(() => {
		if (!films) return;

		console.log(films);
	});

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>FILM APPEARANCES</h2>
			// need to implements a card for the films appearence
			<div className={styles.grid}>
				{films.map((film, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.imageContainer}>
							<img className={styles.image} src={`/${film.title}.jpg`} alt="" />
						</div>
						<div className={styles.filmInfo}>
							<h2 className={styles.filmTitle}>{film.title}</h2>
							<p className={styles.episodeId}>Episode: {film.episode_id}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};
