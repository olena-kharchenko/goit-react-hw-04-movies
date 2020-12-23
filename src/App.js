import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import AppBar from './components/AppBar';
import Container from './components/Container';
import HomePage from './views/HomePage';
import MoviesPage from './views/MoviesPage';
import NotFoundView from './views/NotFoundView';
import MovieDetailsPage from './views/MovieDetailsPage/MovieDetailsPage';

export default function App() {
  return (
    <Container>
      <AppBar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies" exact>
          <MoviesPage />
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsPage />
        </Route>
        <Route>
          <NotFoundView />
        </Route>
      </Switch>
      <ToastContainer autoClose={3000} />
    </Container>
  );
}
