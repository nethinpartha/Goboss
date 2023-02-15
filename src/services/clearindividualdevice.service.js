import { clearIndividualDevice } from './config';
import axiosApiInstance from "./axiosinterceptor.service";
import { browserName } from "react-device-detect";

export const clearIndividualDeviceService = {
  clearindividevice
}

async function clearindividevice({ deviceId }) {
  return axiosApiInstance.post(`${clearIndividualDevice.url}${clearIndividualDevice.path}?device=${browserName}`, {
    deviceId
  })
    .then((res) => res.data);
};

