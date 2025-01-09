import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovieById = async () => {
      const movieDetails = await fetchMovieById(movieId);
      setMovie(movieDetails);
    };

    getMovieById();
  }, [movieId]);

  return (
    <div>
      <h2>{movie.title}</h2>
      <Link to="cast">cast</Link>
      <Link to="reviews">reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
