import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCreditsById } from 'services/ApiFetch';
import { List, ListItem } from './CastView.styled';

const CastView = () => {
  const [cast, setCast] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    fetchCreditsById(movieId).then(({ cast }) => setCast(cast.slice(0, 12)));
  }, [movieId]);

  return (
    <div>
      <List>
        {cast?.map(el => (
          <ListItem key={el.id}>
            <img
              src={
                el.profile_path !== null
                  ? `https://image.tmdb.org/t/p/w500/${el.profile_path}`
                  : 'https://www.seekpng.com/png/full/423-4235598_no-image-for-noimage-icon.png'
              }
              alt={el.name}
              width="250"
            />

            <p>{el.name}</p>
            <p>Character: {el.character}</p>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default CastView;
