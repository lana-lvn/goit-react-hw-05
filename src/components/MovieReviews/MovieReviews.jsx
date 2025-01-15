import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchReviewsById } from "../../services/api";
import s from './MovieReviews.module.css';

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
    <ul className={s.reviewList}>
      {!reviews.length && <h2 className={s.noReview}>We don&apos;t have any reviews for this movie.</h2>}
      {reviews.map(item => (<li key={item.id} className={s.reviewItem}>
        <h5 className={s.author}>{item.author}</h5>
        <p className={s.content}>{item.content}</p>
     </li>))}
    </ul>
  );
};

export default MovieReviews;
