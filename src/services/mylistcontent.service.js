import { watchList, clearAllList } from "./config";
import axiosApiInstance from "./axiosinterceptor.service";

export const getwatchlistservice = {
  watchlist,
  clearwatchlist

}

async function watchlist() {
  return axiosApiInstance.get(`${watchList.url}${watchList.path}`, {
    params: {
      device: 'web'
    }
  })
    .then((res) => res.data)
}


async function clearwatchlist() {
  return axiosApiInstance.post(`${clearAllList.url}${clearAllList.path}?device=web`)
    .then(res => res.data)
}