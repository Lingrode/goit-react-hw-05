import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Header from "../../components/Header/Header";
import { fetchMovies } from "../../services/api";
import style from "./Home.module.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { results } = await fetchMovies();
        setMovies(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <Header />
      <div className={style.container}>
        <h1 className={style.title}>Trending movies today</h1>
      </div>

      {isLoading && <Loader />}

      {isError && <ErrorMessage />}

      {!isLoading && !isError && movies.length === 0 ? (
        <p style={{ textAlign: "center" }}>No movies 😕</p>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default Home;
