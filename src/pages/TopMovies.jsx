import { useEffect, useState } from "react";
import {
  getTopMovies,
  getTopMoviesByGenre,
  getUniqueListNames,
} from "../services/api";
import MovieCard from "../components/MovieCard";

const TopMovies = () => {
  const [selectedGenre, setselectedGenre] = useState("");
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
      <h1>DEF TOP MOVIES LISTS</h1>
      {genreList.map((genre, index) => (
        <button
          key={index}
          className={selectedGenre === genre ? "button active" : "button"}
          onClick={() => setselectedGenre(genre)}
        >
          {genre}
        </button>
      ))}

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : selectedGenre === "" ? (
        <h2>Select a category agove to see my category rankings</h2>
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
