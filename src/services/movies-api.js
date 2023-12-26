import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'add734c9ba93e1d4898310e536d5eaa9';

const END_POINTS = {
  TRENDING: 'trending/movie/day',
  SEARCH: 'search/movie',
  MOVIE: 'movie',
  CREDITS: 'credits',
  REVIEWS: 'reviews',
};

export const getPopularMovies = async () => {
  const { data } = await axios.get(`/${END_POINTS.TRENDING}?api_key=${API_KEY}`);

  return data.results;
};

export const getCurrentMovies = async value => {
  const { data } = await axios.get(
    `/${END_POINTS.SEARCH}?api_key=${API_KEY}&query=${value}`
  );

  return data.results;
};

export const getDetailsMovie = async id => {
  const { data } = await axios.get(`/${END_POINTS.MOVIE}/${id}?api_key=${API_KEY}`);

  return data;
};

export const getCurrentCast = async id => {
  const { data } = await axios.get(
    `/${END_POINTS.MOVIE}/${id}/${END_POINTS.CREDITS}?api_key=${API_KEY}`
  );

  return data.cast;
};

export const getCurrentReviews = async id => {
  const { data } = await axios.get(
    `/${END_POINTS.MOVIE}/${id}/${END_POINTS.REVIEWS}?api_key=${API_KEY}`
  );

  return data.results;
};
