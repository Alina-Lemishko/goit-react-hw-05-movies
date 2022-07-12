import moment from 'moment';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  AfterTitle,
  DescrTitle,
  DescrWrap,
  DetailWrap,
  Link,
  LinkWrap,
  OverviewTitle,
  Title,
} from './MovieDetailsView.styled';

const MovieDetailsView = ({ movie }) => {
  const { title, release_date, poster_path, vote_average, genres, overview } =
    movie;

  const location = useLocation();
  const navigate = useNavigate();

  const GoBack = () => {
    navigate(location?.state?.from || '/');
  };

  return (
    <div>
      <div>
        <button type="button" onClick={GoBack}>
          Go Back
        </button>
      </div>

      <DetailWrap>
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt={title}
          width={300}
        />
        <DescrWrap>
          <Title>
            {title} <span>({moment(release_date).format('YYYY')})</span>
          </Title>
          <AfterTitle>User Score: {vote_average * 10}%</AfterTitle>
          <DescrTitle>Overview</DescrTitle>
          <OverviewTitle>{overview}</OverviewTitle>
          <DescrTitle>Genres</DescrTitle>
          <AfterTitle>{genres?.map(({ name }) => name).join(', ')}</AfterTitle>
        </DescrWrap>
      </DetailWrap>
      <AfterTitle>Addition information</AfterTitle>
      <LinkWrap>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </LinkWrap>
    </div>
  );
};

export default MovieDetailsView;

// MovieDetailsView.propTypes = {
//   movie: PropTypes.node,
// };
