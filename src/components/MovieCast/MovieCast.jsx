import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCastItem from "../MovieCastItem/MovieCastItem";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchMovieCast } from "../../services/api";
import style from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { cast } = await fetchMovieCast(movieId);
        setMovieCast(cast);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieCast();
  }, [movieId]);

  return (
    <div className={style.container}>
      <div className={style.list}>
        {isLoading && <Loader />}

        {isError && <ErrorMessage />}

        {!isLoading && !isError && movieCast.length === 0 ? (
          <p>No cast info 😕</p>
        ) : (
          movieCast.map(({ id, name, profile_path, character }) => {
            return (
              <MovieCastItem
                key={id}
                name={name}
                imageUrl={profile_path}
                character={character}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default MovieCast;
