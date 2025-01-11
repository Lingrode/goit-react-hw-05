import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Header from "../../components/Header/Header";
import { fetchMovies } from "../../services/api";
import { useHttp } from "../../hooks/useHttp";
import style from "./Home.module.css";

const Home = () => {
  const [movies, loading, error] = useHttp(fetchMovies);
  const { results } = movies;

  if (loading) return <Loader />;

  if (error) return <ErrorMessage />;

  return (
    <div>
      <Header />
      <div className={style.container}>
        <h1 className={style.title}>Trending movies today</h1>
      </div>

      {!loading && !error && movies.length === 0 ? (
        <p style={{ textAlign: "center" }}>No movies 😕</p>
      ) : (
        <MovieList movies={results} />
      )}
    </div>
  );
};

export default Home;
