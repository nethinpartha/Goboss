import { tos, privacy, about } from "./config";
import axiosApiInstance from "./axiosinterceptor.service";
import { loggerService } from './loggingService';

const patterns = {
  tos,
  privacy,
  about,
};

export const staticInfoService = {
  getInfo,
};

async function getInfo(pattern) {
  return axiosApiInstance(`${tos.url}${pattern}`, {
    params: {
      device: 'web'
    }
  })
    .then((res) => res.data)
    .catch((err) => {
      loggerService(err, "Error in static info service");
      return Promise.reject(err);
    });
}
