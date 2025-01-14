
import MovieList from '../../components/MovieList/MovieList';
import { fetchAllMovies } from '../../services/api';
import { UseHttp } from '../../hooks/UseHttp';

const HomePage = () => {
  
  const [movies] = UseHttp(fetchAllMovies);
   
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
