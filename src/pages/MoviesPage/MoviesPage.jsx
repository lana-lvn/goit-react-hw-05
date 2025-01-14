import { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { fetchMovieByQuery } from "../../services/api";
import { useSearchParams } from "react-router-dom";
import MovieList from "../../components/MovieList/MovieList";



const MoviesPage = () => {
  
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';


  const handleChangeQuery = (newQuery) => {
    if (!newQuery) {
      return setSearchParams({});
    }
    searchParams.set('query', newQuery);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    const getData = async () => {
      const movies = await fetchMovieByQuery(query);
      setMovies(movies);
    }
    getData();
  }, [query]);
  return (
    <div>
      <SearchBar handleChangeQuery={handleChangeQuery} query={query} />
     <MovieList movies={movies}/>
    </div>
  );
};

export default MoviesPage;
