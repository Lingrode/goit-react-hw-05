import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});

  const backLinkHref = location.state ?? "/movies";
  console.log(location);

  useEffect(() => {
    const getMovieById = async () => {
      const movieDetails = await fetchMovieById(movieId);
      setMovie(movieDetails);
    };

    getMovieById();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <h2>{movie.title}</h2>
      <Link to="cast">cast</Link>
      <Link to="reviews">reviews</Link>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
