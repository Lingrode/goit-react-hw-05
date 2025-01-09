import { useEffect, useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import { fetchMovies } from "../../services/api";

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
      <h1>Home</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default Home;
