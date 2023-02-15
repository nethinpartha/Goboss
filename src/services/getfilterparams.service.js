import { getFilterParams } from './config';
import axiosApiInstance from "./axiosinterceptor.service";

export const getfilterparamsService = {
  getfilterparams
}

async function getfilterparams() {
  return axiosApiInstance.get(`${getFilterParams.url}${getFilterParams.path}?device=web`)
    .then((res) => res.data);
};

