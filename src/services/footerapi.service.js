import { footerApi } from './config';
import axiosApiInstance from "./axiosinterceptor.service";


export const FooterApiService = {
  footerContent
};

async function footerContent() {
  return axiosApiInstance.get(`${footerApi.url}${footerApi.path}`, {
    params: {
      device: 'web'
    }
  }).then(response => {
    return response.data;
  });
}
