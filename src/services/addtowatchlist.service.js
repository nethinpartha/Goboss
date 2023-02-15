import { watchList } from "./config";
import axiosApiInstance from "./axiosinterceptor.service";

export const addtowatchlistService = {
  addtowatchlist,
};

async function addtowatchlist(contentId) {
  return axiosApiInstance
    .post(
      `${watchList.url}${watchList.path}`,
      { contentId },
      {
        params: {
          device: "web",
        },
      }
    )
    .then((res) => res.data);
}
