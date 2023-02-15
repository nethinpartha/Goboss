import { continueWatchAdd, continueWatchUpdate, getMovieUrl } from "./config";
import axiosApiInstance from "./axiosinterceptor.service";

export const getMovieUrls = {
  fetchMovieUrl,
  addContinueWatch,
  addContinueWatchUpdate,
};

async function fetchMovieUrl({ id, userId }) {
  return axiosApiInstance
    .get(`${getMovieUrl.url}${getMovieUrl.path}/${id}/${userId}`)
    .then((response) => {
      return response.data;
    });
}
async function addContinueWatch(payload) {
  return axiosApiInstance
    .post(`${continueWatchAdd.url}${continueWatchAdd.path}`, payload)
    .then((response) => {
      return response.data;
    });
}
async function addContinueWatchUpdate(payload) {
  return axiosApiInstance
    .post(`${continueWatchUpdate.url}${continueWatchUpdate.path}`, payload)
    .then((response) => {
      return response.data;
    });
}
