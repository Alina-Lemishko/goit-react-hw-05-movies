import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Img, List, Title } from './HomePage.styled';

const MoviesListHome = ({ movies }) => {
  return (
    <List>
      {movies?.map(({ id, poster_path, title }) => (
        <Card key={id}>
          <NavLink to={`/movies/${id}`}>
            <Img
              src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
              alt={title}
            />
            <Title>{title}</Title>
          </NavLink>
        </Card>
      ))}
    </List>
  );
};

export default MoviesListHome;

MoviesListHome.propTypes = {
  movies: PropTypes.array,
};
