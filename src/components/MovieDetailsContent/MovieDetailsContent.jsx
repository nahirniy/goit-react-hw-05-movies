import GoBackBtn from 'components/GoBackBtn/GoBackBtn';
import CardContent from './CardContent/CardContent';
import AddContent from './AddContent/AddContent';
// import css from './MovieDetailsCart.module.css';

const MovieDetailsContent = ({ details }) => {
  const { title, poster_path, vote_average, overview, genres } = details;
  const userRate = (vote_average * 10).toFixed(1);
  const image = 'https://image.tmdb.org/t/p/w500' + poster_path;

  return (
    <>
      <GoBackBtn />
      <CardContent movieData={{ title, userRate, overview, genres, image }} />
      <AddContent />
    </>
  );
};

export default MovieDetailsContent;
