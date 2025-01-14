import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchReviewsById } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const reviews = await fetchReviewsById(movieId);
      setReviews(reviews);
    };

    getData();

  }, [movieId]);
  return (
    <ul>
      {!reviews.length && <h2>We don't have any reviews for this movie.</h2>}
      {reviews.map(item => (<li key={item.id}>
        <h5>{item.author}</h5>
        <p>{item.content}</p>
     </li>))}
    </ul>
  );
};

export default MovieReviews;
