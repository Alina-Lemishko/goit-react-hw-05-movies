import { List } from 'components/MoviesListHome/HomePage.styled';
import moment from 'moment';
import { Link } from 'components/AppBar/AppBar.styled';
import { useLocation, useNavigate } from 'react-router-dom';

const MovieDetailsView = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, genres, overview } =
    movie;

  const location = useLocation();
  const navigate = useNavigate();

  const GoBack = () => {
    navigate(location?.state?.from || '/');
  };

  return (
    <List>
      <button type="button" onClick={GoBack}>
        Go Back
      </button>
      <div>
        <h2>
          {title} <span>({moment(release_date).format('YYYY')})</span>
        </h2>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width={250}
        />
        <p>User Score: {vote_average * 10}%</p>
        <h3>Overview</h3>
        <span>{overview}</span>
        <h3>Genres</h3>
        <p>{genres?.map(({ name }) => name).join(', ')}</p>
      </div>
      <h2>Addition information</h2>
      <Link to="cast">
        <h3>Cast</h3>
      </Link>
      <Link to="reviews">
        <h3>Reviews</h3>
      </Link>
    </List>
  );
};

export default MovieDetailsView;
