import axios from "axios";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZmRiYzkxMzkyZmNmZjM5ZjUyOTMyMzk2ZjU4MzY4YyIsIm5iZiI6MTczMTIxODY2OS43MjIsInN1YiI6IjY3MzA0Y2VkNmJlMzJlMzA1NWQzYTkyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RKzp0fHZvJEUpwYgMRMGPtAuXw4Q3oM0za6v_TuU8Vk";
const API_KEY = "1af9bae05d77a15934a4fdac02d5f730";
axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = { api_key: API_KEY };
// axios.defaults.headers.common["Authorization"] = `${API_KEY}`;

export const fetchMovies = async () => {
  const { data } = await axios.get("/trending/movie/day");
  return data;
};

export const fetchMovieById = async (id) => {
  const { data } = await axios.get(`/movie/${id}`);
  return data;
};

export const fetchMovieReviews = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews`);
  return data;
};

export const fetchMovieCast = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits`);
  return data;
};

export const fetchMovieByQuery = async (str) => {
  const { data } = await axios.get(`/search/movie?query=${str}`);
  return data;
};
