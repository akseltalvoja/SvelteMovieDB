<script>
	import { topRatedData } from '$lib/topratedGET'; // Import the top rated data
	import { onMount } from 'svelte';
	import { getMovieDetails } from '$lib/movieAPI'; // Import function to fetch movie details

	let movies = [];
	let selectedMovie = null; // Variable to store the selected movie details

	// Subscribe to changes in topRatedData
	topRatedData.subscribe((value) => {
		if (value) {
			movies = value.results || [];
		}
	});

	// Fetch data on component mount
	onMount(() => {
		topRatedData.update((value) => value); // Trigger fetch
	});

	// Function to handle clicking on a movie thumbnail
	async function handleClick(movieId) {
		selectedMovie = await getMovieDetails(movieId); // Call function to fetch movie details
	}
</script>

<h1>Top Rated movies:</h1>

<div class="top-rated-movies">
	{#each movies as movie}
		<button class="movie" on:click={() => handleClick(movie.id)}>
			{#if movie.poster_path}
				<img src="https://image.tmdb.org/t/p/w500{movie.poster_path}" alt={movie.title} />
			{:else}
				<p>No poster available</p>
			{/if}
			<p>{movie.title}</p>
		</button>
	{/each}
</div>

<!-- Display selected movie details -->
{#if selectedMovie}
	<div class="selected-movie-details">
		<h2>{selectedMovie.title}</h2>
		<p>Overview: {selectedMovie.overview}</p>
		<p>Release Date: {selectedMovie.release_date}</p>
		<p>Rating: {selectedMovie.vote_average}</p>
		<!-- Add other movie details here -->
	</div>
{/if}

<style>
	.top-rated-movies {
		display: flex;
		flex-wrap: wrap;
	}

	.movie {
		margin: 10px;
		text-align: center;
		cursor: pointer; /* Add cursor style for indicating clickable */
	}

	.movie img {
		width: 150px;
		height: auto;
	}

	.selected-movie-details {
		margin-top: 20px;
	}
</style>
