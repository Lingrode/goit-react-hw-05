import { useParams } from "react-router-dom";
import MovieCastItem from "../MovieCastItem/MovieCastItem";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { fetchMovieCast } from "../../services/api";
import { useHttp } from "../../hooks/useHttp";
import style from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();

  const [movieCast, loading, error] = useHttp(fetchMovieCast, movieId);
  const cast = movieCast?.cast || [];

  if (loading) return <Loader />;

  if (error) return <ErrorMessage />;

  return (
    <div className={style.container}>
      <div className={style.list}>
        {cast.length === 0 ? (
          <p>No cast info 😕</p>
        ) : (
          cast.map(({ id, name, profile_path, character }) => {
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
