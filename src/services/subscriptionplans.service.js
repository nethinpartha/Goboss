import { subscriptionPlan } from './config';
import axiosApiInstance from "./axiosinterceptor.service";
import { CurrencyCode as cc } from '../helpers/getCurrencyCode';

export const subscriptionPlanService = {
  getSubscription,
};

async function getSubscription() {
  const currencyCode = cc();
  return axiosApiInstance(`${subscriptionPlan.url}${subscriptionPlan.path}`, {
    params: {
      device: 'web',
      currencycode: currencyCode
    }
  })
    .then((res) => res.data);
}
