import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../../services/movies-api';
import { POSTER_URL } from '../../services/movies-api';

import s from './MovieDetailsPage.module.css';

export default function MovieDetailsPage() {
  const { movieId } = useParams();
  const [film, setFilm] = useState({});

  useEffect(() => {
    fetchMovieDetails(movieId).then(setFilm);
  }, [movieId]);

  return (
    <div className={s.wrapper}>
      <img
        className={s.image}
        src={POSTER_URL + film.poster_path}
        alt={film.title}
        widht="300"
        height="450"
      />
      <div className={s.rightPart}>
        <h2 className={s.title}>{film.title}</h2>
        <span className={s.subtitle}>Rating </span>
        <span>{film.vote_average}</span>
        <p className={s.subtitle}>Overview</p>
        <p>{film.overview}</p>
        <p className={s.subtitle}>Genres</p>
        <p>{film.genres && film.genres.map(item => item.name + ' ')}</p>
      </div>
    </div>
  );
}
