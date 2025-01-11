import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/api";
import style from "./Home.module.css";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await fetchMovies();
        setMovies(results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <div className={style.container}>
        <h1 className={style.title}>Trending movies today</h1>
      </div>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
