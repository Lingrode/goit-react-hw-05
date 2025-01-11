import { useParams } from "react-router-dom";
import MovieReviewItem from "../MovieReviewItem/MovieReviewItem";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchMovieReviews } from "../../services/api";
import { useHttp } from "../../hooks/useHttp";
import style from "./MovieReviews.module.css";

const MovieReviews = () => {
  const { movieId } = useParams();

  const [movieReviews, loading, error] = useHttp(fetchMovieReviews, movieId);
  const results = movieReviews?.results || [];

  if (loading) return <Loader />;

  if (error) return <ErrorMessage />;

  return (
    <div>
      <div className={style.container}>
        <ul className={style.list}>
          {results.length === 0 ? (
            <p>No reviews 😕</p>
          ) : (
            results.map(
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
