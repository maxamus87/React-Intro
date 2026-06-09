import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

export default function MovieList() {
  const [movies, setMovies] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favoriteMovie, setFavoriteMovie] = useState(() => {
    const saved = localStorage.getItem("favoriteMovie")
    return saved ? JSON.parse(saved) : null
  }
  );

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

  function saveFavorite(movie) {
    localStorage.setItem("favoriteMovie", JSON.stringify(movie));
    setFavoriteMovie(movie);
  }

  function removeFavorite() {
    localStorage.removeItem("favoriteMovie");
    setFavoriteMovie(null);
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>There was an issue fetching your data: {error.message}</p>

  return (
    <div>
      <h1>Popular Movies</h1>

      {favoriteMovie && (
              <div>
                <h2>Current Favorite: {favoriteMovie.title}</h2>
                <p>{favoriteMovie.overview}</p>
                <button onClick={removeFavorite}>Remove Favorite</button>
              </div>
            )}

      {movies.map((movie) => (
        <div key={movie.id}>
          <h2>{movie.title}</h2>
          <button onClick={() => saveFavorite(movie)}>Save as Favorite</button>
        </div>
      ))}
    </div>
  );
}
