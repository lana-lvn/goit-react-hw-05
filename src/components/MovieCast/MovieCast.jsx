
import { useParams } from "react-router-dom";
import { fetchCastById } from "../../services/api";
import { UseHttp } from "../../hooks/UseHttp";


const MovieCast = () => {
  const { movieId } = useParams();
  
  const [cast] = UseHttp(fetchCastById, movieId);
  const defaultImg = 'https://dl-media.viber.com/10/share/2/long/vibes/icon/image/0x0/95e0/5688fdffb84ff8bed4240bcf3ec5ac81ce591d9fa9558a3a968c630eaba195e0.jpg';


  return (
    <ul>
      {cast.map(item => (<li key={item.id}>
        <img src={item.profile_path ? `https://image.tmdb.org/t/p/w300/${item.profile_path}` : defaultImg} alt="portrait" />
        <h5>{item.name}</h5>
        <p>{item.character}</p>
      </li>))}
    </ul>
  );
};

export default MovieCast;
