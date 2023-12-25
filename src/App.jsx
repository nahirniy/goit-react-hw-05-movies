import Movies from 'pages/Movies/Movies';
import Home from 'pages/Home/Home';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';
import MovieDetails from 'pages/MovieDetails/MovieDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
