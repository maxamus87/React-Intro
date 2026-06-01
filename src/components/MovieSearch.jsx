import { useState } from "react";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

export default function MovieSearch() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMovies() {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
      );

      if (!response.ok) {
        throw new Error(`Movie not found. HTTP error! status: ${response.status}`);
      }

      const json = await response.json();
      setMovies(json.results);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>Movie Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Movie"
      />
      <button onClick={fetchMovies}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>There is an issue fetching your data: {error.message}</p>}
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
}
