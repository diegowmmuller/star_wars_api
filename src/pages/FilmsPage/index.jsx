import { useEffect, useState } from 'react';
import styles from './films-page.module.css';
import { getAllFilms } from '../../api/axios';
import { FilmCard } from '../../components/FIlmCard';

export const FilmsPage = () => {
	const [films, setFilms] = useState([]);
	useEffect(() => {
		async function getFilms() {
			const response = await getAllFilms();

			if (response) {
				setFilms(response.data);
			}
		}

		getFilms();
	}, []);

	return (
		<div className={styles.container}>
			{films.map((film, index) => (
				<FilmCard key={index} film={film} />
			))}
		</div>
	);
};
