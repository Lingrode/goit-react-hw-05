import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieReviewItem from "../MovieReviewItem/MovieReviewItem";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchMovieReviews } from "../../services/api";
import style from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { results } = await fetchMovieReviews(Number(movieId));
        setMovieReviews(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieReviews();
  }, [movieId]);

  return (
    <div>
      <div className={style.container}>
        <ul className={style.list}>
          {isLoading && <Loader />}

          {isError && <ErrorMessage />}

          {!isLoading && !isError && movieReviews.length === 0 ? (
            <p>No reviews 😕</p>
          ) : (
            movieReviews.map(
              ({
                id,
                author,
                author_details: { avatar_path },
                content,
                created_at,
              }) => (
                <li key={id} className={style.item}>
                  <MovieReviewItem
                    author={author}
                    imageUrl={avatar_path}
                    content={content}
                    created={created_at}
                  />
                </li>
              )
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default MovieReviews;
