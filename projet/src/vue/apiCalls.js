const axios = require("axios");

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: `application/json`,
    "Content-Type": `application/json`,
  },
});

export default {
  UpdateMovieList: () => {
    return apiClient.get("/api/movies/all");
  },
  NewMovie: movie_to_add => {
    return apiClient.post("/api/movies", movie_to_add);
  },
};
