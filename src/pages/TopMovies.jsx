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
  const [selectedList, setSelectedList] = useState("default");
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
    const tempMovies = getTopMoviesByGenre(movies, selectedList);
    setFilteredMovies(tempMovies);
  }, [selectedList, movies]);

  return (
    <>
      <h1>DEF TOP MOVIES/TV LISTS</h1>
      {genreList.map((genre, index) => (
        <button
          key={index}
          className={selectedList === genre ? "button active" : "button"}
          onClick={() => setSelectedList(genre)}
        >
          {genre}
        </button>
      ))}

      {error && <div className={styles.errorMessage}>{error}</div>}

      {loading ? (
        <div className={styles.loading}>Loading...</div>
      ) : selectedList === "default" ? (
        <>
          <h2>&uarr; Select a category above to see my category rankings &uarr;</h2>
          <div className={styles.moviesGridDefault}>
            {filteredMovies.map((movie, index) => (
              <MovieCard movie={movie} rank={index+1} key={movie.id} />
            ))}
            <div className={styles.banner}>
              <h2>ARE YOUR FAVORITES IN SYNC WITH MINE?</h2>
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>
            Top {filteredMovies.length} {selectedList}
          </h2>
          <div className={styles.moviesGrid}>
            {[...filteredMovies].reverse().map((movie, index) => (
              <MovieCard movie={movie} rank={filteredMovies.length - index} key={movie.id} />
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default TopMovies;
