import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'add734c9ba93e1d4898310e536d5eaa9';

export const getPopularMovies = async () => {
  const END_POINT = 'trending/all/day';

  const { data } = await axios.get(`/${END_POINT}?api_key=${API_KEY}`);

  return data.results;
};

export const getCurrentMovies = async value => {
  const END_POINT = 'search/movie';

  const { data } = await axios.get(`/${END_POINT}?api_key=${API_KEY}&query=${value}`);

  return data.results;
};

export const getDetailsMovie = async id => {
  const END_POINT = 'movie';

  const { data } = await axios.get(`/${END_POINT}/${id}?api_key=${API_KEY}`);

  return data;
};
