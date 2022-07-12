import { useEffect, useState } from 'react';
import { Section } from '../MoviesListHome/HomePage.styled';
import { fetchTrendingMovies } from 'services/ApiFetch';
import MoviesListHome from 'components/MoviesListHome';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies()
      .then(({ results }) => setMovies(results))
      .catch(error => console.log(error.message));
  }, []);

  return (
    <Section>
      <h1>Trending today</h1>
      <MoviesListHome movies={movies} />
    </Section>
  );
};

export default HomePage;
