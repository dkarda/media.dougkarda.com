import "../styles/MovieFavorites.scss";
import { useMovieContext } from "../contexts/MovieContext";
import MovieProjectCard from "../components/MovieProjectCard";

const MovieFavorites = () => {
  const { favorites } = useMovieContext();

  if (favorites) {
    return (
      <>
        <div className="favorites">
          <h1>Your favorite movies</h1>
          <div className="movies-grid">
            {favorites.map((movie) => (
              <MovieProjectCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </>
    );
  }

  return (
    <div className="favorites-empty">
      <h2>No favorite movies yet</h2>
      <p>Start adding movies to your favorite and they will appear here.</p>
    </div>
  );
};

export default MovieFavorites;
