import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const movie = await fetchMoviesById(movieId);
      setMovie(movie);
    };
    getData();
  }, [movieId]);
  
  if (!movie) {
    return <h2>Loading...</h2>;
  }
  
  return (
    <div>
      <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
      <h2>{movie.title}</h2>
      <p>User Score: {movie.vote_average}</p>
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <h3>Genres</h3>
      <ul>
        {movie.genres?.map(genre => (<li key={genre.id}>
          {genre.name}
        </li>))}
      </ul>
      <div>
        <h4>Additional information</h4>
        <nav>
          <ul>
            <li> <Link to='cast'>Cast</Link></li>
            <li><Link to='reviews'>Reviews</Link></li>
          </ul>
      </nav>
      <Outlet />
      </div>
     
    </div>
  );
}

export default MovieDetailsPage;
