import { useState } from 'react';
import Searchbar from '../../components/Searchbar';
import FilmsStatus from '../FilmsStatus';
import s from './MoviesPage.module.css';

export default function MoviesPage() {
  const [filmName, setFilmName] = useState('');
  const [films, setFilms] = useState([]);

  const onSubmit = name => {
    setFilmName(name);
    setFilms([]);
  };

  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <FilmsStatus filmName={filmName} />
    </>
  );
}
