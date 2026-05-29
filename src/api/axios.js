import axios from 'axios';

export const getAllStarShips = () => {
	return axios.get('https://swapi.info/api/starships');
};

export const getStarshipById = (id) => {
	return axios.get(`https://swapi.info/api/starships/${id}`);
};

export const getAllFilms = () => {
	return axios.get('https://swapi.info/api/films');
};

export const getFilmByUrl = (url) => {
	return axios.get(url);
};

export const getCharacterByUrl = (url) => {
	return axios.get(url);
};

export const getFilmById = (id) => {
	return axios.get(`https://swapi.info/api/films/${id}`);
};
