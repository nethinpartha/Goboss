import { buySubscription } from './config';
import axiosApiInstance from "./axiosinterceptor.service";


export const buySubscriptionService = {
  purchaseSubscription,
};

async function purchaseSubscription({ planId, paymentMethod, billingDetails }) {
  return axiosApiInstance.post(`${buySubscription.url}${buySubscription.path}`,
    { planId, paymentMethod, billingDetails },
    {
      params: {
        device: 'web'
      }
    })
    .then((res) => res.data)
}
