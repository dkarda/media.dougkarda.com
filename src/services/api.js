export const getPopularMovies = async () => {
  const response = await fetch(
    `${import.meta.env.VITE_TMDB_BASE_URL}/movie/popular?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`
  );
  const data = await response.json();
  return data.results;
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${import.meta.env.VITE_TMDB_BASE_URL}/search/movie?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&query=${encodeURIComponent(query)}`
  );
  const data = await response.json();
  return data.results;
};

export const getTopMovies = async (genre) => {
  const response = await fetch(
    `${import.meta.env.VITE_DATA_BASE_URL}/movies.json`
  );
  const data = await response.json();
  const filteredData = data.filter((movie) => movie.toplists);
  return filteredData;
};

export const getUniqueListNames = (movies) => {
  const all = movies.flatMap((movie) =>
    movie.toplists.map((item) => item.listName)
  );
  return [...new Set(all)].sort((a, b) => a.localeCompare(b));
};

export const getTopMoviesByGenre = (movies, genre) => {
  const filteredGenre = movies
    .filter(movie => movie.toplists.some((toplist) => toplist.listName == genre))
    .sort((a, b) => {
      const rankA = a.toplists.find(t => t.listName === genre)?.listRank || 9999;
      const rankB = b.toplists.find(t => t.listName === genre)?.listRank || 9999;
      return rankA - rankB;
    })
  return filteredGenre;
};
