import httpService from "./httpService";
import config from "../config.json";

const apiEndpoint = config.apiUrl + "/movies";
export function getMovies() {
  return httpService.get(apiEndpoint);
}

export function deleteMovie(movieId) {
  return httpService.delete(apiEndpoint + "/" + movieId);
}

export function getMovie(id) {
  return httpService.get(apiEndpoint + "/" + id);
}

const movieUrl = (movieId) => {
  return apiEndpoint + "/" + movieId;
};

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return httpService.put(movieUrl(movie._id), body);
  }
  return httpService.post(apiEndpoint, movie);
}
