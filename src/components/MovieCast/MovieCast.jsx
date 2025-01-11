import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCastItem from "../MovieCastItem/MovieCastItem";
import { fetchMovieCast } from "../../services/api";
import style from "./MovieCast.module.css";

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      const { cast } = await fetchMovieCast(movieId);
      setMovieCast(cast);
    };

    getMovieCast();
  }, [movieId]);

  return (
    <div className={style.container}>
      <div className={style.list}>
        {movieCast.map(({ id, name, profile_path, character }) => {
          return (
            <MovieCastItem
              key={id}
              name={name}
              imageUrl={profile_path}
              character={character}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MovieCast;
