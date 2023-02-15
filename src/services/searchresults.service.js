import { contentdetailApi } from './config';
import axiosApiInstance from './axiosinterceptor.service';

export const getsearchresultservice = {
  searchresults
}

async function searchresults(keyword) {
  return axiosApiInstance.get(`${contentdetailApi.url}${contentdetailApi.path}`, {
    params: {
      device: 'web',
      keyword
    }
  }).then((res) => res.data)
}