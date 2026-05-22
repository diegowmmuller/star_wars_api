import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getStarshipById } from '../../api/axios';
import { StarshipDetailsContainer } from '../../components/StarshipDetailsContainer';
import { StarshipHero } from '../../components/StarshipHero';
import { StarshipInfo } from '../../components/StarshipInfo';
import { StarshipFilms } from '../../components/StarshipFilms';

export const StarshipDetails = () => {
	const { id } = useParams();
	const [starship, setStarship] = useState({});

	useEffect(() => {
		async function getStarship() {
			const response = await getStarshipById(id);
			const starship = response.data;
			setStarship(starship);
		}

		getStarship();
	}, [id]);
	return (
		<StarshipDetailsContainer>
			<StarshipHero starship={starship} />
			<StarshipInfo starship={starship} />
			<StarshipFilms starship={starship} />
		</StarshipDetailsContainer>
	);
};
