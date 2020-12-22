import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBar';
import Container from './components/Container';
import HomePage from './views/HomePage/HomePage';
import MoviesPage from './views/MoviesPage';

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
      </Switch>
    </Container>
  );
}
