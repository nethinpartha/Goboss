import { getFilterCounts } from './config';
import axiosApiInstance from "./axiosinterceptor.service";

export const getfiltercountService = {
  getfiltercount
}

async function getfiltercount({ filterType, keyword }) {
  let queryParam = keyword ? `?device=web&keyword=${keyword}` : `?device=web`;
  return axiosApiInstance.post(`${getFilterCounts.url}${getFilterCounts.path}${queryParam}`, filterType)
    .then((res) => res.data);
};

