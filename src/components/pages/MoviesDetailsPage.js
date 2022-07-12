import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMoviesById } from 'services/ApiFetch';
import MovieDetailsView from 'components/MovieDetailsView';

export const API_KEY = 'e7e97d56d25ec1e4b049a81d5db4fb3b';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchMoviesById(movieId)
      .then(({ data }) => setMovie(data))
      .catch(error => console.log(error.message));
  }, [movieId]);

  return (
    <div>
      <MovieDetailsView movie={movie} />
      <br />
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
