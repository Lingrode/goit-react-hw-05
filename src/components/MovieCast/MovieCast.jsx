import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast } from "../../services/api";

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
    <div>
      {movieCast.map((item) => {
        return (
          <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default MovieCast;
