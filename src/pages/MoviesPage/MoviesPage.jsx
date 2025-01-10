import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // const [searchValue, setSearchValue] = useState(movieName);
  const [movies, setMovies] = useState([]);
  const movieName = searchParams.get("query") ?? "";

  useEffect(() => {
    if (!movieName.trim()) {
      setSearchParams({});
      setMovies([]);
      return;
    }
    const getMovieByQuery = async () => {
      const { results } = await fetchMovieByQuery(movieName);
      // searchParams.set("query", movieName);

      // setSearchParams(searchParams);
      setMovies(results);
    };

    getMovieByQuery();
  }, [movieName, searchParams, setSearchParams]);

  const handleSearch = (value) => {
    setSearchParams(value.trim() ? { query: value } : {});
  };

  return (
    <div>
      <SearchBar value={movieName} setSearchValue={handleSearch} />

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
