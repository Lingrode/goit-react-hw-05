import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import MoviesPage from "./pages/MoviesPage/MoviesPage";
import NotFound from "./pages/NotFound/NotFound";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import Navigation from "./components/Navigation/Navigation";

import style from "./App.module.css";

const App = () => {
  return (
    <div className={style.container}>
      <header>
        <Navigation />
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
