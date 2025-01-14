import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMoviesById } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/movies');
  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  

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
    
      <Link to={goBackRef.current}>GO BACK</Link>

      <img src={movie.poster_path ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg} alt="poster" />
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
