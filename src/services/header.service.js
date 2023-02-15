import { headerApi } from './config';
import axiosApiInstance from "./axiosinterceptor.service";


export const HeaderApiService = {
  HeaderContent
};

async function HeaderContent() {
  return axiosApiInstance.get(`${headerApi.url}${headerApi.path}`, {
    params: {
      device: 'web'
    }
  }).then(response => {
    return response.data;
  });
}
