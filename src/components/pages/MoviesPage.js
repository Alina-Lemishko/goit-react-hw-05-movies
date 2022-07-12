import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MovieView from 'components/MovieView';
import { fetchMoviesBySearch } from 'services/ApiFetch';

const MoviesPage = ({ onSubmit, queryForSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [moviesBySearch, setMoviesBySearch] = useState([]);

  const handleSubmitForm = e => {
    e.preventDefault();

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  const handleValueChange = e => {
    setSearchQuery(e.target.value.trim());
  };

  useEffect(() => {
    if (queryForSearch === null) {
      return;
    }

    fetchMoviesBySearch(queryForSearch)
      .then(({ results }) => setMoviesBySearch(results))
      .catch(error => console.log(error.message));
  }, [queryForSearch]);

  return (
    <section>
      <form onSubmit={handleSubmitForm}>
        <label>
          <input
            type="text"
            value={searchQuery}
            onChange={handleValueChange}
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>

      {queryForSearch !== null ? (
        <MovieView movies={moviesBySearch} />
      ) : (
        <h2>You can find the movies by keywords</h2>
      )}
    </section>
  );
};

export default MoviesPage;

MoviesPage.propTypes = {
  queryForSearch: PropTypes.string,
  onSubmit: PropTypes.func,
};
