import { Route, Routes } from 'react-router-dom';

import Movies from 'pages/Movies/Movies';
import Home from 'pages/Home/Home';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import Cast from 'components/MovieDetailsContent/AddContent/Cast/Cast';
import Reviews from 'components/MovieDetailsContent/AddContent/Reviews/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
