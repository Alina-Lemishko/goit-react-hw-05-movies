import PropTypes from 'prop-types';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Card,
  Img,
  List,
  Title,
} from 'components/MoviesListHome/HomePage.styled';

const MovieView = ({ movies }) => {
  const location = useLocation();

  return (
    <div>
      <ul>
        <List>
          {movies.map(el => (
            <Card key={el.id}>
              <NavLink to={`/movies/${el.id}`} state={{ from: location }}>
                <Img
                  src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                  alt={el.title}
                />
                <Title>{el.title}</Title>
              </NavLink>
            </Card>
          ))}
        </List>
      </ul>
    </div>
  );
};

export default MovieView;

MovieView.propTypes = {
  movies: PropTypes.array,
};
