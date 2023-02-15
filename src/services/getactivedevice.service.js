import { getActiveDevice } from './config';
import { browserName, isMobile } from "react-device-detect";
import axiosApiInstance from "./axiosinterceptor.service";

export const getactivatedeviceservice = {
  getactivateDevice
}

async function getactivateDevice() {
  return axiosApiInstance.get(`${getActiveDevice.url}${getActiveDevice.path}?device=${browserName}`).then((res) => res.data);
};

