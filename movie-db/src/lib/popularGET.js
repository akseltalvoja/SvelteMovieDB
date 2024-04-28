import { writable } from 'svelte/store';

export const popularData = writable(null);

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmQ4MGViYTA3ZGI2NjZhMGU5NzQxMjQ1MjA0ZWNjNyIsInN1YiI6IjY1ZjFiYWU1MDZmOTg0MDE0ODQyOTg3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._tCm83PFPiHD93iSIICsxsPcgcFTm0VO-06ffKojDmY'
	}
};

fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
	.then((response) => response.json())
	.then((response) => {
		popularData.set(response);
	})
	.catch((err) => console.error(err));
