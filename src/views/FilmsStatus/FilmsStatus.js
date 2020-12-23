import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { fetchMoviesByName } from '../../services/movies-api';
import FilmErrorView from '../FilmErrorView';
import FilmPendingView from '../FilmPendingView';
import FilmGallery from '../FilmGallery';
import s from './FilmStatus.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

function FilmsStatus({ filmName }) {
  const [error, setError] = useState({});
  const [status, setStatus] = useState(Status.IDLE);
  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (filmName === '') {
      return;
    }

    setStatus(Status.PENDING);

    fetchMoviesByName(filmName)
      .then(newFilms => {
        if (newFilms.total_results > 0) {
          setFilms(newFilms.results);
          setStatus(Status.RESOLVED);
        } else return Promise.reject(new Error('Invalid request'));
      })
      .catch(err => {
        setError(err);
        setStatus(Status.REJECTED);
      });
  }, [filmName]);

  if (status === Status.IDLE) {
    return <p className={s.message}>Please enter your search term</p>;
  }

  if (status === Status.PENDING) {
    return <FilmPendingView />;
  }

  if (status === Status.REJECTED) {
    return <FilmErrorView message={error.message} />;
  }

  if (status === Status.RESOLVED) {
    return (
      <>
        <FilmGallery films={films} />
      </>
    );
  }
}

// FilmsStatus.propTypes = {
//   imageName: PropTypes.string.isRequired,
//   images: PropTypes.array.isRequired,
//   page: PropTypes.number.isRequired,
//   setImages: PropTypes.func.isRequired,
//   setPage: PropTypes.func.isRequired,
// };

export default FilmsStatus;
