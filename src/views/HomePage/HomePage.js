import { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import * as moviesApi from '../../services/movies-api';
import s from './HomePage.module.css';
// import PageHeading from '../components/PageHeading/PageHeading';

export default function HomePage() {
  const { url } = useRouteMatch();
  const [films, setFilms] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(request => setFilms(request.results));
  }, []);

  return (
    <>
      {/* <PageHeading text="Книги" /> */}

      {films && (
        <ul className={s.list}>
          {films.map(film => (
            <li key={film.id} className={s.item}>
              <Link to={`${url}/${film.id}`} className={s.link}>
                <img
                  className={s.image}
                  src={moviesApi.POSTER_URL + film.poster_path}
                  alt={film.title}
                />
                <p className={s.title}>{film.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
