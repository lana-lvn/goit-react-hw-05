import { Link, useLocation } from "react-router-dom";
import s from './MovieList.module.css';

const MovieList = ({ movies }) => {
  const location = useLocation();
 
  return (
     <ul className={s.movieList}>
        {movies.map(item => (<li key={item.id} className={s.movieItem}><Link to={`/movies/${item.id}`} state={location} className={s.movieLink}>
         {item.title}
        </Link> 
        </li>))}
      </ul>
  );
}

export default MovieList;
