import { removePaymentMethod } from './config';
import axiosApiInstance from "./axiosinterceptor.service";


export const removePaymentMethodService = {
  removePaymentMet,
};

async function removePaymentMet({ paymentMethod }) {
  return axiosApiInstance.post(`${removePaymentMethod.url}${removePaymentMethod.path}`,
    { paymentMethod },
    {
      params: {
        device: 'web'
      }
    })
    .then((res) => res.data);
}
