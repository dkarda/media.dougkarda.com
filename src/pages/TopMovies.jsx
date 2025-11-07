import { useEffect, useState } from "react";
import "../styles/styles.scss";
import styles from "../styles/TopMovies.module.scss";
import {
  getTopMovies,
  getTopMoviesByGenre,
  getUniqueListNames,
} from "../services/api";
import MovieCard from "../components/MovieCard";

const TopMovies = () => {
  const [selectedGenre, setselectedGenre] = useState("default");
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTopMovies = async () => {
      try {
        const topMovies = await getTopMovies();
        setMovies(topMovies);
        setFilteredMovies(topMovies);
      } catch (err) {
        console.log(err);
        setError("Failed to load movies");
      } finally {
        setLoading(false);
      }
    };

    loadTopMovies();
  }, []);

  const genreList = getUniqueListNames(movies).filter(
    (item) => item !== "default"
  );

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

      {error && <div className={styles.errorMessage}>{error}</div>}

      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : selectedGenre === "default" ? (
        <>
          <h2>&uarr; Select a category agove to see my category rankings &uarr;</h2>
          <div className={styles.moviesGridDefault}>
            {filteredMovies.map((movie, index) => (
              <MovieCard movie={movie} rank={index} key={movie.id} />
            ))}
            <div className={styles.banner}>
              <h2>ARE YOUR FAVORITES IN SYNC WITH MINE?</h2>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>
            Top {filteredMovies.length} {selectedGenre} Movies
          </h2>
          <div className={styles.moviesGrid}>
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
