import { signup } from "./config";
import { encrypt, encryptValue } from "../helpers";
import { browserName, isMobile, fullBrowserVersion } from "react-device-detect";
import { pickAll } from 'ramda';
import Cookies from "js-cookie";
import axiosApiInstance from "./axiosinterceptor.service";

export const signUpService = {
  signUp,
};

async function signUp({
  username,
  password,
  accessToken,
  isSocialLogin
}) {
  var { isFacebookUser, isGoogleUser, isAppleUser } = isSocialLogin;
  const pwd = password ? await encrypt(password) : "";
  var deviceID = browserName;
  var requestobj = {
    email: username,
    password: pwd,
    deviceId: `${deviceID}-${fullBrowserVersion}`,
    deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`
  };
  if (isFacebookUser) {
    requestobj = {
      email: username,
      access_token: accessToken,
      deviceId: `${deviceID}-${fullBrowserVersion}`,
      deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`,
      isFacebookUser: isFacebookUser
    }
  } else if (isGoogleUser) {
    requestobj = {
      email: username,
      access_token: accessToken,
      deviceId: `${deviceID}-${fullBrowserVersion}`,
      deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`,
      isGoogleUser: isGoogleUser
    }
  } else if (isAppleUser) {
    requestobj = {
      email: username,
      access_token: accessToken,
      deviceId: `${deviceID}-${fullBrowserVersion}`,
      deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`,
      isAppleUser: isAppleUser
    }
  }
  return axiosApiInstance
    .post(`${signup.apiUrl}${signup.getApiToken}`, requestobj, {
      params: {
        device: 'web'
      }
    })
    .then(async (user) => {
      const pickSome = pickAll([
        'responseCode',
        'message',
        'idToken',
        'refreshToken',
        'expiresIn',
        'userId',
        'isVerified',
        'email'
      ], user.data);
      const signInValue = await encryptValue(JSON.stringify(pickSome));
      Cookies.set("signInStatus", JSON.stringify(signInValue), { expires: 7 });
      Cookies.set("userId", JSON.stringify(user.data.userId), { expires: 7 });
      Cookies.set("username", JSON.stringify(username), { expires: 7 });
      return user.data;
    })
}
