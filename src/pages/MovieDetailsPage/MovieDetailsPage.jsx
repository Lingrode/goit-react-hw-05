import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});

  const backLinkHref = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getMovieById = async () => {
      const movieDetails = await fetchMovieById(movieId);
      setMovie(movieDetails);
    };

    getMovieById();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref.current}>Go back</Link>
      <h2>{movie.title}</h2>
      <Link to="cast" state={{ from: backLinkHref.current }}>
        cast
      </Link>
      <Link to="reviews" state={{ from: backLinkHref.current }}>
        reviews
      </Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
