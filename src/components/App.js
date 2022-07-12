import { lazy, Suspense } from 'react';
import { Route, Routes, useNavigate, useSearchParams } from 'react-router-dom';
import { Container } from './AppBar/AppBar.styled';
import AppBar from './AppBar';

const HomePage = lazy(() => import('./pages/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('./pages/MoviesDetailsPage'));
const CastView = lazy(() => import('./CastView'));
const Reviews = lazy(() => import('./Reviews'));

const App = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchQuery = searchParams.get('query');

  const handleSubmit = movie => {
    navigate({ search: `query=${movie}` });
  };

  return (
    <Container>
      <AppBar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="movies"
            element={
              <MoviesPage
                onSubmit={handleSubmit}
                queryForSearch={searchQuery}
              />
            }
          />
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastView />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

export default App;
