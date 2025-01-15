import { useRef } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { UseHttp } from "../../hooks/UseHttp";
import { fetchMoviesById } from "../../services/api";
import s from './MovieDetailsPage.module.css';


const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie] = UseHttp(fetchMoviesById, movieId);
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/movies');
  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';

  
  if (!movie) {
    return <h2>Loading...</h2>;
  }
  
  return (
    <div className={s.container}>
    
      <Link to={goBackRef.current} className={s.goBackBtn}>GO BACK</Link>

      
      <div className={s.card}>
        <img src={movie.poster_path ? `http://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg} alt="poster" className={s.image} />
      <div className={s.cardInfo}>
      <h2 className={s.movieTitle}>{movie.title}</h2>
      <p className={s.score}>User Score: {movie.vote_average}</p>
      <h3 className={s.subTitle}>Overview</h3>
      <p className={s.overviewText}>{movie.overview}</p>
      <h3 className={s.subTitle}>Genres</h3>
      <ul className={s.genresList}>
        {movie.genres?.map(genre => (<li key={genre.id} className={s.genre}>
          {genre.name}
        </li>))}
      </ul>
      </div>
</div>
      <div className={s.infoContainer}>
        <h4 className={s.info}>Additional information</h4>
        <nav>
          <ul className={s.details}>
            <li> <Link to='cast' className={s.detailsLink}>⭐️ Cast</Link></li>
            <li><Link to='reviews' className={s.detailsLink}>💬 Reviews</Link></li>
          </ul>
      </nav>
        <Outlet />
      </div>
     
    </div>
  );
}

export default MovieDetailsPage;
