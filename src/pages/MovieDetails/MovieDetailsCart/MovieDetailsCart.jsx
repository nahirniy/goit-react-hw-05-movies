const MovieDetailsCart = ({ details }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
  const { title, poster_path, vote_average, overview, genres } = details;

  return <img src={BASE_IMG + poster_path} alt={title} loading="lazy" />;
};

export default MovieDetailsCart;
