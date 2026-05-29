import { useEffect, useState } from 'react';
import styles from './film-characters.module.css';
import { getCharacterByUrl } from '../../api/axios';
import { CharacterCard } from '../CharacterCard';
export const FilmCharacters = ({ film }) => {
	const charactersUrls = film.characters;
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		if (!film?.characters) return;
		async function fetchCharacters() {
			const requests = charactersUrls.map((url) => getCharacterByUrl(url));
			const responses = await Promise.all(requests);
			const charactersData = responses.map((response) => response.data);
			if (charactersData) {
				setCharacters(charactersData);
			}
		}
		fetchCharacters();
	}, [film]);

	useEffect(() => {
		console.log(characters);
	}, [characters]);

	return (
		<div>
			<h2 className={styles.title}>Characters</h2>
			<div className={styles.container}>
				{characters.map((character, index) => (
					<CharacterCard key={index} character={character} />
				))}
			</div>
		</div>
	);
};
