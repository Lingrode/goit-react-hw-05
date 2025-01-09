import React, { useEffect, useState } from "react";
import { fetchMovieReviews } from "../../services/api";
import { useParams } from "react-router-dom";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  console.log(movieId);

  useEffect(() => {
    const getMovieReviews = async () => {
      const { results } = await fetchMovieReviews(Number(movieId));
      setMovieReviews(results);
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      {movieReviews.map((item, index) => (
        <h2 key={index}>{item.author}</h2>
      ))}
    </div>
  );
};

export default MovieReviews;
