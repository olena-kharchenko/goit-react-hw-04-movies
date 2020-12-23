import { Link, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { POSTER_URL } from '../../services/movies-api';
import s from './FilmGallery.module.css';

function FilmGallery({ films }) {
  const { url } = useRouteMatch();

  return (
    <ul className={s.list}>
      {films.map(film => (
        <li key={film.id} className={s.item}>
          <Link to={`${url}/${film.id}`} className={s.link}>
            <img
              className={s.image}
              src={POSTER_URL + film.poster_path}
              alt={film.title}
            />
            <p className={s.title}>{film.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
}

// ImageGallery.propTypes = {
//   images: PropTypes.array.isRequired,
// };

export default FilmGallery;
