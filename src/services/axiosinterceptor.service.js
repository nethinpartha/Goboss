import axios from "axios";
import { store } from '../helpers/store';
import { __decrypttoken } from "../helpers/aes";
import { getZipcode } from '../helpers/geolocation';
import { getBrowserDetails } from '../helpers/browserdetails';
import { apiTokenService } from "./api.service";
import { signinService } from './siginservice';
import { isSignedIn } from '../helpers/authentication';
import { deleteCookie } from '../helpers/authentication';
import { browserName, isMobile, fullBrowserVersion } from "react-device-detect";
import Cookies from "js-cookie";
import { decryptValue } from "../helpers/aes";
import { pathOr } from "ramda";

export const getCookie = (name) => Cookies.get(name);

const axiosApiInstance = axios.create({
  // timeout: 5000,
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  async (config) => {
    let refreshtoken;
    let zipcode = getZipcode();
    let deviceModel = getBrowserDetails();
    const cookiedata =
      getCookie("signInStatus") && typeof getCookie("signInStatus") === "string"
        && getCookie("signInStatus") !== "undefined"
        ? decryptValue(getCookie("signInStatus"))
        : "";
    const value = await __decrypttoken();
    const __parseData = cookiedata ? JSON.parse(cookiedata) : "";
    const token = await pathOr("", ["idToken"])(__parseData);
    if (config.url.includes('refresh-token') || config.url.includes('activate-device')) {
      refreshtoken = await pathOr("", ["refreshToken"])(__parseData);
    }
    config.headers = {
      Authorization: `Bearer ${value}`,
      Accept: "application/json",
      idToken: `${token}`,
      refreshtoken,
      zipcode,
      deviceModel,
      deviceId: `${browserName}-${fullBrowserVersion}`
    };
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

function Signoutuser() {
  deleteCookie('signInStatus');
  deleteCookie('username');
  store.dispatch({ type: "SIGNOUT" })
  return;
}

// Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && error.response.data.error === "API_TOKEN_EXPIRED" && !originalRequest._retry) {
      originalRequest._retry = true;
      const response = await apiTokenService.login();
      const apiToken = await __decrypttoken();
      // data ==> can be undefined and might prevent the retry flow, hence the check
      if (originalRequest.data) {
        originalRequest.data = await JSON.parse(originalRequest.data);
      }
      originalRequest.headers["Authorization"] = apiToken
        ? `Bearer ${apiToken}`
        : "";
      return axiosApiInstance(originalRequest);
    }
    originalRequest._retry = false;
    if (error.response.status === 401 && error.response.data.error === "IDTOKEN_EXPIRED" && !originalRequest._retry) {
      originalRequest._retry = true;
      let cookiedata =
        getCookie("signInStatus") && typeof getCookie("signInStatus") === "string"
          && getCookie("signInStatus") !== "undefined"
          ? decryptValue(getCookie("signInStatus"))
          : "";
      await __decrypttoken();
      let __parseData = cookiedata ? JSON.parse(cookiedata) : "";
      let token = await pathOr("", ["refreshToken"])(__parseData);
      await signinService.rotateAccessKey(token);

      // data ==> can be undefined and might prevent the retry flow, hence the check
      if (originalRequest.data) {
        originalRequest.data = await JSON.parse(originalRequest.data);
      }
      cookiedata =
        getCookie("signInStatus") && typeof getCookie("signInStatus") === "string"
          && getCookie("signInStatus") !== "undefined"
          ? decryptValue(getCookie("signInStatus"))
          : "";
      await __decrypttoken();
      __parseData = cookiedata ? JSON.parse(cookiedata) : "";
      token = await pathOr("", ["idToken"])(__parseData);
      originalRequest.headers["idToken"] = token
        ? `${token}`
        : "";
      return axiosApiInstance(originalRequest);

    }
    // if (error.response.status === 400) {
    //   let { data } = error.response;
    //   if (data && data.error === "Email already exists") {
    //     return { data: { error: data.error || data.message } };
    //   }
    // }
    let { data, status } = error.response;
    if (status === 400 && data.error === "refreshtoken is required in header") {
      Signoutuser();
    } else if (status === 400 && data.error === "SESSION_EXPIRED") {
      Signoutuser();
    }
    let errorMsg = data.error || data.message || data.responseCode;
    return Promise.reject(errorMsg);
  }
);

export default axiosApiInstance;
