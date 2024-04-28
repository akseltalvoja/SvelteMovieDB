import { writable } from 'svelte/store';

export const topRatedData = writable(null);

const options = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization:
			'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmQ4MGViYTA3ZGI2NjZhMGU5NzQxMjQ1MjA0ZWNjNyIsInN1YiI6IjY1ZjFiYWU1MDZmOTg0MDE0ODQyOTg3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._tCm83PFPiHD93iSIICsxsPcgcFTm0VO-06ffKojDmY'
	}
};

fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
	.then((response) => response.json())
	.then((response) => {
		// Append base URL to each poster path to form complete image URL
		const baseUrl = 'https://image.tmdb.org/t/p/w500'; // Adjust image size if needed
		response.results.forEach((movie) => {
			movie.posterUrl = baseUrl + movie.poster_path;
		});
		topRatedData.set(response);
	})
	.catch((err) => console.error(err));
