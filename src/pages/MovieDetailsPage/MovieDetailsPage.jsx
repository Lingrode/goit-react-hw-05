import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "../../services/api";
import { formatYear } from "../../helpers/formatDate";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const backLinkHref = useRef(location.state ?? "/movies");

  useEffect(() => {
    const getMovieById = async () => {
      try {
        setIsLoading(true);
        const movieDetails = await fetchMovieById(movieId);
        setMovie(movieDetails);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieById();
  }, [movieId]);

  const roundScore = (score) => {
    return Math.round(score * 10);
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={style.details}>
            <div className={style.container}>
              <Link to={backLinkHref.current}>Go back</Link>
              <div className={style.wrapper}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                />
                <div className={style.content}>
                  <h2 className={style.title}>
                    {movie.title}{" "}
                    <span>({formatYear(movie.release_date)})</span>
                  </h2>
                  <p className={style.genres}>
                    Genres: <span> </span>
                    <span>
                      {movie.genres?.map((item) => item.name).join(", ")}
                    </span>
                  </p>
                  <p className={style.score}>
                    User score: <span>{roundScore(movie.vote_average)}%</span>
                  </p>
                  <p className={style.tagline}>{movie.tagline}</p>
                  <div className={style.overview}>
                    <h3>Overview</h3>
                    <p>{movie.overview}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.info}>
            <div className={style.container}>
              <h3>Additional Info</h3>
              <div className={style.links}>
                <Link to="cast" className={style.link}>
                  Cast
                </Link>
                <Link to="reviews" className={style.link}>
                  Reviews
                </Link>
              </div>
            </div>
            <Outlet />
          </div>
        </>
      )}
    </>
  );
};

export default MovieDetailsPage;
