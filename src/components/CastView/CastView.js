import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsById } from 'services/ApiFetch';

const CastView = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchCreditsById(movieId).then(({ cast }) => setCast(cast.slice(0, 12)));
  }, [movieId]);

  return (
    <div>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}
      >
        {cast?.map(el => (
          <li
            key={el.id}
            style={{
              width: '260px',
              display: 'flex',
              flexDirection: 'column',
              marginBottom: '20px',
            }}
          >
            <img
              src={
                el.profile_path !== null
                  ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                  : 'https://www.seekpng.com/png/full/423-4235598_no-image-for-noimage-icon.png'
              }
              alt={el.name}
              width="80"
            />

            <p>{el.name}</p>
            <p>Character: {el.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CastView;
