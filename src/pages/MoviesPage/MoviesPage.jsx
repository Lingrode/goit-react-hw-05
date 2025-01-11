import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchMovieByQuery } from "../../services/api";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const movieName = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!movieName.trim()) {
      setSearchParams({});
      setMovies([]);
      return;
    }

    const getMovieByQuery = async () => {
      try {
        setIsError(false);
        setIsLoading(true);
        const { results } = await fetchMovieByQuery(movieName);
        setMovies(results);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getMovieByQuery();
  }, [movieName, searchParams, setSearchParams]);

  const handleSearch = (value) => {
    setSearchParams(value.trim() ? { query: value } : {});
  };

  return (
    <div>
      <Header />

      <SearchBar value={movieName} setSearchValue={handleSearch} />

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

export default MoviesPage;
