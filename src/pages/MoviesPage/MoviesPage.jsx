import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "../../services/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import MovieList from "../../components/MovieList/MovieList";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const movieName = searchParams.get("query") ?? "";

  useEffect(() => {
    const getMovieByQuery = async () => {
      // if (!searchValue.trim()) {
      //   setSearchParams({});
      //   setMovies([]);
      //   return;
      // }

      const { results } = await fetchMovieByQuery(searchValue);
      searchParams.set("query", searchValue);

      setSearchParams(searchParams);
      setMovies(results);
    };

    getMovieByQuery();
  }, [searchParams, searchValue, setSearchParams]);

  return (
    <div>
      <SearchBar value={movieName} setSearchValue={setSearchValue} />

      <MovieList movies={movies} />
    </div>
  );
};

export default MoviesPage;
