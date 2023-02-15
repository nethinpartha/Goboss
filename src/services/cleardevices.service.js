import { cleardevices } from './config';
import axiosApiInstance from "./axiosinterceptor.service";

export const clearDevicesService = {
  cleardevice
}

async function cleardevice() {
  return axiosApiInstance.post(`${cleardevices.url}${cleardevices.path}?device=web`).then((res) => res.data);
};

