import { useEffect, useState } from "react";
import {
  getTopMovies,
  getTopMoviesByGenre,
  getUniqueListNames,
} from "../services/api";
import MovieCard from "../components/MovieCard";

const TopMovies = () => {
  const [selectedGenre, setselectedGenre] = useState("War");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTopMovies = async () => {
      try {
        const topMovies = await getTopMovies()
        setMovies(topMovies)
        setFilteredMovies(topMovies)
      } catch (err) {
        console.log(err)
        setError("Failed to load movies")
      } finally {
        setLoading(false)
      }
    };

    loadTopMovies();
  }, []);

  const genreList = getUniqueListNames(movies);

  useEffect(() => {
    const tempMovies = getTopMoviesByGenre(movies, selectedGenre);
    setFilteredMovies(tempMovies);
  }, [selectedGenre, movies]);

  return (
    <>
      <h1>DEF Top Movie Lists</h1>
      {genreList.map((genre, index) => (
        <button
          key={index}
          className="button"
          onClick={() => setselectedGenre(genre)}
        >
          {genre}
        </button>
      ))}

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">loading...</div>
      ) : selectedGenre === "" ? (
        <div>Need to select a genre</div>
      ) : (
        <>
        <h2>Top {filteredMovies.length} {selectedGenre} Movies</h2>
        <div className="movies-grid">
          {filteredMovies.map((movie, index) => (
            <MovieCard movie={movie} rank={index} key={movie.id} />
          ))}
        </div>
        </>
      )}
    </>
  );
};

export default TopMovies;
