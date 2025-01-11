import { useRef } from "react";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import clsx from "clsx";
import Header from "../../components/Header/Header";
import GoBackBtn from "../../components/GoBackBtn/GoBackBtn";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchMovieById } from "../../services/api";
import { useHttp } from "../../hooks/useHttp";
import { formatYear } from "../../helpers/formatDate";
import style from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state ?? "/movies");

  const [movie, loading, error] = useHttp(fetchMovieById, movieId);

  const getNavLinkClass = (isActive) =>
    clsx(style.link, { [style.active]: isActive });

  const roundScore = (score) => {
    return Math.round(score * 10);
  };

  if (error) return <ErrorMessage />;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className={style.details}>
            <Header />
            <div className={style.container}>
              <GoBackBtn link={backLinkHref.current}>Go back</GoBackBtn>
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
                <NavLink
                  to="cast"
                  className={({ isActive }) => getNavLinkClass(isActive)}
                >
                  Cast
                </NavLink>
                <NavLink
                  to="reviews"
                  className={({ isActive }) => getNavLinkClass(isActive)}
                >
                  Reviews
                </NavLink>
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
