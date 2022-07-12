import { Card, List } from 'components/MoviesListHome/HomePage.styled';
import { NavLink, useLocation } from 'react-router-dom';

const MovieView = ({ movies }) => {
  const location = useLocation();
  console.log('location', location);
  return (
    <div>
      <ul>
        <List>
          {movies.map(el => (
            <Card key={el.id}>
              <NavLink to={`/movies/${el.id}`} state={{ from: location }}>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${el.poster_path}`}
                  alt={el.title}
                />
                <p>{el.title}</p>
              </NavLink>
            </Card>
          ))}
        </List>
      </ul>
    </div>
  );
};

export default MovieView;
