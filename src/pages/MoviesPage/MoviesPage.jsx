import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { fetchMovieByQuery } from "../../services/api";
import { useHttp } from "../../hooks/useHttp";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!movieName.trim()) {
      setSearchParams({});
      return;
    }
  }, [movieName, setSearchParams]);

  const [movies, loading, error] = useHttp(fetchMovieByQuery, movieName);
  const { results } = movies;

  const handleSearch = (value) => {
    setSearchParams(value.trim() ? { query: value } : {});
  };

  if (loading) return <Loader />;

  if (error) return <ErrorMessage />;

  return (
    <div>
      <Header />

      <SearchBar value={movieName} setSearchValue={handleSearch} />

      {!loading && !error && movies.length === 0 ? (
        <p style={{ textAlign: "center" }}>No movies 😕</p>
      ) : (
        <MovieList movies={results} />
      )}
    </div>
  );
};

export default MoviesPage;
