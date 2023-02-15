import { castDetails } from './config';
import axiosApiInstance from "./axiosinterceptor.service";

export const getCastDetails = {
  castdetailservice,
};

async function castdetailservice(id) {
  return axiosApiInstance.get(`${castDetails.url}${castDetails.path}`, {
    params: {
      id: id,
      device: 'web'
    }
  }).then(response => {
    return response.data;
  });
}
