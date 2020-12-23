import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import BackToTop from 'react-back-to-top';
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
      {/* <BackToTop
        mainStyle={{
          width: '100%',
          height: '100%',
          background: '#ffffff',
          borderRadius: '4px',
        }}
        percentStyle={{
          width: '100%',
          height: '100%',
        }}
        animate="rotate"
        offsetTop={20}
        step={50}
        percent={true}
        visiblePercent={40}
      /> */}
    </Container>
  );
}
