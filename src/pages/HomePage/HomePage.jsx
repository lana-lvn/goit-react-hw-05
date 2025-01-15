
import MovieList from '../../components/MovieList/MovieList';
import { fetchAllMovies } from '../../services/api';
import { UseHttp } from '../../hooks/UseHttp';
import s from './HomePage.module.css';

const HomePage = () => {
  
  const [movies] = UseHttp(fetchAllMovies);
   
  return (
    <div className={s.container}>
      <h1 className={s.homeTitle}>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
