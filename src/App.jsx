import Movies from 'components/Movies/Movies';
import Home from 'components/Home/Home';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};

export default App;
