import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmById } from '../../api/axios';
import { FilmDetailsContainer } from '../../components/FIlmDetailsContainer';
import { FilmHero } from '../../components/FilmHero';
import { FilmInfo } from '../../components/FilmInfo';
import { FilmCharacters } from '../../components/FilmCharacters';

export const FilmDetails = () => {
	const { id } = useParams();
	const [film, setFilm] = useState({});
	useEffect(() => {
		async function getFilm() {
			const response = await getFilmById(id);
			if (response) {
				setFilm(response.data);
			}
		}
		getFilm();
	}, [id]);

	return (
		<FilmDetailsContainer>
			<FilmHero film={film} />
			<FilmInfo film={film} />
			<FilmCharacters film={film} />
		</FilmDetailsContainer>
	);
};
