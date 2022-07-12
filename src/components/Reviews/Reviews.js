import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/ApiFetch';
import { OverView, Title } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchReviewsById(movieId).then(({ results }) => setReviews(results));
  }, [movieId]);

  return (
    <div>
      {reviews?.length ? (
        <ul>
          {reviews?.map(el => (
            <li key={el.id}>
              <br />
              <Title>{el.author_details.username}</Title>
              <br />
              <OverView>{el.content}</OverView>
            </li>
          ))}
        </ul>
      ) : (
        <>
          <br />
          <h3>No REVIEWS</h3>
        </>
      )}
    </div>
  );
};

export default Reviews;
