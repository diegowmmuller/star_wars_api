import { useEffect, useState } from 'react';
import { getAllStarShips } from '../../api/axios';
import { StarshipCard } from '../../components/StarshipCard';
import styles from './starship-page.module.css';
export const StarShipPage = () => {
	const [starships, setStarships] = useState([]);
	const [classes, setClasses] = useState([]);
	const [selectedClasse, setSelectedClasse] = useState('');
	const [models, setModels] = useState([]);
	const [selectedModel, setSelectedModel] = useState('');

	useEffect(() => {
		async function fetchShips() {
			const response = await getAllStarShips();
			const starships = response.data;
			setStarships(starships);

			const uniqueClasses = [...new Set(starships.map((ship) => ship.starship_class).filter(Boolean))];
			// console.log(uniqueClasses);
			setClasses(uniqueClasses);

			const uniqueModels = [...new Set(starships.map((ship) => ship.model).filter(Boolean))];
			// console.log(uniqueModels);
			setModels(uniqueModels);
		}

		fetchShips();
	}, []);

	const filteredShips = starships.filter((ship) => {
		const matchClasse = selectedClasse === '' || ship.starship_class === selectedClasse;

		const matchModel = selectedModel === '' || ship.model === selectedModel;

		return matchClasse && matchModel;
	});
	return (
		<div>
			<div>
				<select value={selectedClasse} onChange={(e) => setSelectedClasse(e.target.value)}>
					<option value="">All Classes</option>

					{classes.map((classe, index) => (
						<option key={index} value={classe}>
							{classe}
						</option>
					))}
				</select>
			</div>
			<div>
				<select value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
					<option value="">All Models</option>
					{models.map((model, index) => (
						<option key={index} value={model}>
							{model}
						</option>
					))}
				</select>
			</div>
			<div className={styles.container}>
				{filteredShips.map((ship, index) => {
					return <StarshipCard key={index} starship={ship} />;
				})}
			</div>
		</div>
	);
};
