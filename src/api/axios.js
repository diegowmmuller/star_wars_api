import axios from 'axios';

export const getAllStarShips = () => {
	return axios.get('https://swapi.info/api/starships');
};

export const getStarshipById = (id) => {
	return axios.get(`https://swapi.info/api/starships/${id}`);
};
