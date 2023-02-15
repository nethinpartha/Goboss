import { searchfiltercontent } from './config';
import axiosApiInstance from './axiosinterceptor.service';

export const getsearchresultsfilterervice = {
  searchresultsfilter
}

async function searchresultsfilter({ filterType, keyword }) {
  let queryParam = keyword ? `?device=web&keyword=${keyword}` : `?device=web`;
  return axiosApiInstance.post(`${searchfiltercontent.url}${searchfiltercontent.path}${queryParam}`,
    filterType
  ).then((res) => res.data)
}