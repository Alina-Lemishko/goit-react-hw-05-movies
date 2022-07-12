import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from 'services/ApiFetch';

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
              <p>{el.author_details.username}</p>
              <br />
              <p>{el.content}</p>
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

// author_details: {name: '',
// username: 'a7a8524',
// avatar_path: '/https://www.gravatar.com/avatar/6e7edad7bbe0c599dfce11e289c2c82e.jpg',
// rating: null}
// content: "Pretty good ngl. Something new i enjoyed it"
// created_at: "2022-05-05T20:05:40.542Z"
// id: "62742e148e2e0000a97e3876"
// updated_at: "2022-06-15T19:19:20.718Z"
// url: "https://www.themoviedb.org/review/62742e148e2e0000a97e3876"
