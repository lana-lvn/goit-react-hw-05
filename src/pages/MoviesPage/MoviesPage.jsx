
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovieByQuery } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";
import { UseHttp } from "../../hooks/UseHttp";
import s from './MoviesPage.module.css';



const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  };

  const [movies] = UseHttp(fetchMovieByQuery, query);

  return (
    <div className={s.container}>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
     <MovieList movies={movies}/>
    </div>
  );
};

export default MoviesPage;
