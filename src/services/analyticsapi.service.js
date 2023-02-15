import { analyticsApi } from "./config";
import {
  getdeviceDetails,
  getuserlocation,
  identifyUser,
} from "../utils/Analytics";
import axiosApiInstance from "./axiosinterceptor.service";
import { loggerService } from './loggingService';
export const analyticsService = {
  addeventanalytics,
  contentalaytics,
};

async function contentalaytics(eventType, eventName, contentId) {
  const location = await getuserlocation();
  const deviceDetails = getdeviceDetails();
  const userId = identifyUser();
  const customData = {
    eventName,
  };
  const requestBody = {
    eventType,
    ...userId,
    deviceDetails,
    location,
    customData,
    contentId,
  };
  return axiosApiInstance
    .post(`${analyticsApi.url}${analyticsApi.path}`, {
      ...requestBody,
    })
    .then((res) => {
      return;
    })
    .catch((err) => {
      loggerService(err, "Content analytics service promise error");
      return Promise.reject(err);
    });
}

async function addeventanalytics(eventType, pageName) {
  const location = await getuserlocation();
  const deviceDetails = getdeviceDetails();
  const userId = identifyUser();
  const requestBody = {
    eventType,
    ...userId,
    deviceDetails,
    pageName,
    location,
  };

  return axiosApiInstance
    .post(`${analyticsApi.url}${analyticsApi.path}`, {
      ...requestBody,
    })
    .then((res) => {
      return;
    })
    .catch((err) => {
      loggerService(e, "Add event analytics service rejection");
      return Promise.reject(e);
    });
}

export function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // apiTokenService.login();
      }
      const error =
        (data && (data.error || data.message)) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
