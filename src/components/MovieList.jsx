import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

export default function MovieList() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchMovies() {
      setLoading(true)
      setError(null)
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch movies`);
        }

        const json = await response.json();
        setMovies(json.results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies()
  }, []);

  if (loading) return <p>Loading...</p>
  if (error) return <p>There was an issue fetching your data: {error.message}</p>

  return (
    <div>
      <h1>Popular Movies</h1>
      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
}
