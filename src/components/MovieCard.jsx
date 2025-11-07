import "../styles/MovieCard.scss";

function MovieCard({ movie, rank }) {
  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img
          src={`${import.meta.env.VITE_IMG_BASE_URL}/posters/${
            movie.imdbID
          }.webp`}
          alt={movie.title}
        />
        <div className="movie-overlay"></div>
      </div>
      <div className="movie-info">
        <h3><span className="rank">{rank}</span> {movie.Title}</h3>
        <p>{movie.Year}</p>
        <p>DK rating: {movie.score}/10</p>
      </div>
    </div>
  );
}

export default MovieCard;
