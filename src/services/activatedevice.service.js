import { activatedevice } from './config';
import axiosApiInstance from "./axiosinterceptor.service";

export const activatedeviceservice = {
  activateDevice
}

async function activateDevice({ otp }) {
  return axiosApiInstance.post(`${activatedevice.url}${activatedevice.path}`,
    { otp },
    {
      params: {
        device: 'web'
      }
    }).then((res) => res.data).catch(err => Promise.reject(err));
};

