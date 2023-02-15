import { paymentMethods } from './config';
import axiosApiInstance from "./axiosinterceptor.service";

export const getPaymentMethodService = {
  getPaymentMethods,
};

async function getPaymentMethods() {
  return axiosApiInstance(`${paymentMethods.url}${paymentMethods.path}`, {
    params: {
      device: 'web'
    }
  })
    .then((res) => res.data);
}
