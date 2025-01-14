import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchCastById } from "../../services/api";


const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const cast = await fetchCastById(movieId);
      setCast(cast);
    }
    getData();
  }, [movieId]);


  return (
    <ul>
      {cast.map(item => (<li key={item.id}>
        <img src={`https://image.tmdb.org/t/p/w300/${item.profile_path}`} alt="" />
        <h5>{item.name}</h5>
        <p>{item.character}</p>
      </li>))}
    </ul>
  )
}

export default MovieCast
