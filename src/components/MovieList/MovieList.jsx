import { Link, useLocation } from "react-router-dom";
import MovieItem from "../MovieItem/MovieItem";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map((obj) => {
        return (
          <li key={obj.id}>
            <Link to={`/movies/${obj.id.toString()}`} state={location}>
              <MovieItem title={obj.title} imageUrl={obj.backdrop_path} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
