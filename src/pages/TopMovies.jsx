import { useEffect, useState } from "react";
import { getTopMovies, getTopMoviesByGenre } from "../services/api";
import MovieCard from "../components/MovieCard";

const TopMovies = () => {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setselectedGenre] = useState("Sports");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTopMovies = async () => {
      try {
        const topMovies = await getTopMovies();
        setMovies(topMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadTopMovies();
  }, []);

  getTopMoviesByGenre(movies, selectedGenre);

  //   console.log('movies = ', movies)

  return (
    <>
      <h1>DEF Top Movie Lists</h1>

      <select>
        <option></option>
      </select>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}
    </>
  );
};

export default TopMovies;
