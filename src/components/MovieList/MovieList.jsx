import { useLocation } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";
import style from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={style.list}>
      {movies.map(({ id, title, poster_path, overview, release_date }) => {
        return (
          <li key={id} className={style.item}>
            <MovieItem
              title={title}
              imageUrl={poster_path}
              about={overview}
              release={release_date}
              id={id}
              location={location}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
