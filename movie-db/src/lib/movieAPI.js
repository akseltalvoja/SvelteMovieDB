export async function getMovieDetails(movieId) {
	const options = {
		method: 'GET',
		headers: {
			accept: 'application/json',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NmQ4MGViYTA3ZGI2NjZhMGU5NzQxMjQ1MjA0ZWNjNyIsInN1YiI6IjY1ZjFiYWU1MDZmOTg0MDE0ODQyOTg3ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._tCm83PFPiHD93iSIICsxsPcgcFTm0VO-06ffKojDmY'
		}
	};

	try {
		const response = await fetch(
			`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
			options
		);
		if (!response.ok) {
			throw new Error('Failed to fetch movie details');
		}
		const data = await response.json();
		return data; // Return movie details
	} catch (error) {
		console.error(error);
		return null; // Return null if an error occurs
	}
}
