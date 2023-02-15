import { updatePaymentMethods } from './config';
import axiosApiInstance from "./axiosinterceptor.service";
import { loggerService } from './loggingService';

export const updatePaymentMethodService = {
  updatePaymentMethod,
};

async function updatePaymentMethod({ updateCardDetails }) {
  return axiosApiInstance.post(`${updatePaymentMethods.url}${updatePaymentMethods.path}`,
    updateCardDetails,
    {
      params: {
        device: 'web'
      }
    })
    .then((res) => res.data)
    .catch((err) => {
      loggerService(err, "payment method update failed - update payment method service");
      return Promise.reject(err);
    });
}
