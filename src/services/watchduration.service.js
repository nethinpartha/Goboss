import axiosApiInstance from "./axiosinterceptor.service";
import { browserName, fullBrowserVersion } from "react-device-detect";
import { wathduration } from "./config";


var deviceID = browserName;

export const watchDurationService = {
  WatchDuration,
};

async function WatchDuration(contentId, duration) {
  return axiosApiInstance
    .post(`${wathduration.url}${wathduration.path}?device=web`, {
      contentId,
      duration,
      deviceId: `${deviceID}-${fullBrowserVersion}`,
    })
    .then((response) => {
      return response.data;
    })
}
