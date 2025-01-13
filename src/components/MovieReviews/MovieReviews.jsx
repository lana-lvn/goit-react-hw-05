import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchReviewsById } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams;
  console.log(movieId);
  
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const reviews = await fetchReviewsById(movieId);
      setReviews(reviews);
      console.log(reviews);
      
    };

    getData();

  }, [movieId])
  return (
    <div>
      Movie Reviews
    </div>
  )
}

export default MovieReviews
