
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";
import { UseHttp } from "../../hooks/UseHttp";
import s from './MovieCast.module.css';


const MovieCast = () => {
  const { movieId } = useParams();
  
  const [cast] = UseHttp(fetchCastById, movieId);
  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';


  return (
    <ul className={s.castList}>
      {cast.map(item => (<li key={item.id} className={s.castItem}>
        <img src={item.profile_path ? `https://image.tmdb.org/t/p/w300/${item.profile_path}` : defaultImg} alt="portrait" className={s.photo} />
        <h5 className={s.text}>{item.name}</h5>
        <p className={s.text}>{item.character}</p>
      </li>))}
    </ul>
  );
};

export default MovieCast;
