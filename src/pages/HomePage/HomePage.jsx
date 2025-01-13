import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchAllMovies } from '../../services/api';
const HomePage = () => {

   const [movies, setMovies] = useState([]);
    useEffect(() => {
      const getData = async () => {
        const data = await fetchAllMovies();
        setMovies(data);
      };
      getData();
    }, []);
  
  return (
    <div>
      <h1>Trending today</h1>
      <MovieList movies={movies} />
    </div>
  );
}

export default HomePage;
