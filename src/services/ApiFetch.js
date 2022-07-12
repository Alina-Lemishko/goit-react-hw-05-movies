import axios from 'axios';

const API_KEY = 'e7e97d56d25ec1e4b049a81d5db4fb3b';

export const fetchTrendingMovies = () => {
  return axios
    .get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`)
    .then(({ data }) => data);
};

export const fetchMoviesById = id => {
  return axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
};

export const fetchMoviesBySearch = query => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=1&query=${query}&include_adult=false`
    )
    .then(({ data }) => data);
};

export const fetchReviewsById = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(({ data }) => data);
};

export const fetchCreditsById = id => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US&page=1`
    )
    .then(({ data }) => data);
};
