import { cancelsubscriptions } from "./config";
import { __decrypttoken } from "../helpers/aes";
import { browserName, isMobile, fullBrowserVersion } from "react-device-detect";
import axiosApiInstance from "./axiosinterceptor.service";

var deviceID = browserName;

export const cancelsubscriptionService = {
  cancelsubscription,
};

async function cancelsubscription(briefinfo, cancellationreason) {
  const auth = __decrypttoken();



  return axiosApiInstance.post(
    `${cancelsubscriptions.url}${cancelsubscriptions.path}?device=web`, {
    reason: `${cancellationreason} ${briefinfo}`
  }
  )
    .then(res => res.data)

}
