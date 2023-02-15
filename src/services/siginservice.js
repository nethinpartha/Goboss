import {
  signIn,
  signOut,
  preSignInEmailVal,
  resetPass,
  resetPassEmail,
  rotateSignInKey,
} from "./config";
import { pathOr, pickAll } from "ramda";
import { store } from "../helpers/store";
import { encrypt, encryptValue } from "../helpers";
import { browserName, isMobile, fullBrowserVersion } from "react-device-detect";
import Cookies from "js-cookie";
import axiosApiInstance from "./axiosinterceptor.service";
import { loggerService } from "./loggingService";
export const signinService = {
  preSignInAuth,
  signin,
  signout,
  resetPassword,
  rstPwdEmail,
  rotateAccessKey,
};

export const getCookie = (name) => Cookies.get(name);

async function preSignInAuth({ username, accessToken, isSocialLogin }) {
  var { isFacebookUser, isGoogleUser, isAppleUser } = isSocialLogin;
  var requestobj = {
    email: username,
  };
  if (isFacebookUser) {
    requestobj = {
      email: username,
      access_token: accessToken,
      isFacebookUser,
    };
  } else if (isGoogleUser) {
    requestobj = {
      email: username,
      access_token: accessToken,
      isGoogleUser,
    };
  } else if (isAppleUser) {
    requestobj = {
      email: username,
      access_token: accessToken,
      isAppleUser,
    };
  }

  return axiosApiInstance
    .post(
      `${preSignInEmailVal.apiUrl}${preSignInEmailVal.getApiToken}`,
      requestobj,
      {
        params: {
          device: "web",
        },
      }
    )
    .then((userExists) => {
      return userExists.data;
    });
}

async function signin({ username, password, accessToken, isSocialLogin }) {
  var { isFacebookUser, isGoogleUser, isAppleUser } = isSocialLogin;
  const pwd = password ? await encrypt(password) : "";
  var deviceID = browserName;
  var requestobj = {
    email: username,
    password: pwd,
    deviceId: `${deviceID}-${fullBrowserVersion}`,
    deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`,
  };
  if (isFacebookUser) {
    requestobj = {
      email: username,
      access_token: accessToken,
      deviceId: `${deviceID}-${fullBrowserVersion}`,
      deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`,
      isFacebookUser: isFacebookUser,
    };
  } else if (isGoogleUser) {
    requestobj = {
      email: username,
      access_token: accessToken,
      deviceId: `${deviceID}-${fullBrowserVersion}`,
      devicName: `${isMobile ? "mobile" : "web"} ${deviceID}`,
      isGoogleUser: isGoogleUser,
    };
  } else if (isAppleUser) {
    requestobj = {
      email: username,
      access_token: accessToken,
      deviceId: `${deviceID}-${fullBrowserVersion}`,
      deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`,
      isAppleUser: isAppleUser,
    };
  }
  return axiosApiInstance
    .post(`${signIn.apiUrl}${signIn.getApiToken}`, requestobj, {
      params: {
        device: "web",
      },
    })
    .then(async (user) => {
      const pickSome = pickAll(
        [
          "responseCode",
          "message",
          "idToken",
          "refreshToken",
          "expiresIn",
          "userId",
          "isVerified",
          "email",
        ],
        user.data
      );
      const signInValue = await encryptValue(JSON.stringify(pickSome));
      Cookies.set("signInStatus", JSON.stringify(signInValue), { expires: 7 });
      Cookies.set("userId", JSON.stringify(user.data.userId), { expires: 7 });
      Cookies.set("username", JSON.stringify(username), { expires: 7 });
      return { ...user.data, isFacebookUser, isGoogleUser };
    });
}

async function signout(cb) {
  try {
    var deviceID = browserName;
    return axiosApiInstance
      .post(
        `${signOut.apiUrl}${signOut.getApiToken}`,
        {
          deviceId: `${deviceID}-${fullBrowserVersion}`,
          deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`,
        },
        {
          params: {
            device: "web",
          },
        }
      )
      .then((res) => {
        Cookies.remove("username");
        Cookies.remove("signInStatus");
        Cookies.remove("userId");
        if (cb) {
          cb();
        }
        return res.data;
      })
      .catch((err) => {
        Cookies.remove("signInStatus");
        Cookies.remove("username");
        Cookies.remove("userId");
        loggerService.logger(err, "signout failure - signout service");
        return Promise.reject(err);
      });
    // localStorage.removeItem("apiToken");
  } catch (err) {
    loggerService.logger(err, "signout failure - signout service");
  }
}

async function rstPwdEmail(email) {
  var deviceID = browserName;
  return axiosApiInstance
    .post(
      `${resetPassEmail.apiUrl}${resetPassEmail.resetPassword}`,
      {
        email,
        deviceId: `${deviceID}-${fullBrowserVersion}`,
        deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`,
      },
      {
        params: {
          device: "web",
        },
      }
    )
    .then((userExists) => {
      return userExists.data;
    })
    .catch((e) => {
      loggerService(e, "reset password failed");
      return Promise.reject(e);
    });
}

async function resetPassword(code, pd) {
  var deviceID = browserName;
  const pwd = await encrypt(pd);
  return axiosApiInstance
    .post(
      `${resetPass.apiUrl}${resetPass.getApiToken}`,
      {
        code,
        newPassword: pwd,
        deviceId: `${deviceID}-${fullBrowserVersion}`,
        deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`,
      },
      {
        params: {
          device: "web",
        },
      }
    )
    .then((userExists) => {
      return userExists.data;
    })
    .catch((e) => {
      loggerService(e, "reset password failed");
      return Promise.reject(e);
    });
}

async function rotateAccessKey() {
  let state = store.getState();
  var deviceID = browserName;
  let email =
    getCookie("username") &&
    typeof getCookie("username") === "string" &&
    getCookie("username") !== "undefined"
      ? JSON.parse(getCookie("username"))
      : "";
  let userId =
    getCookie("userId") &&
    typeof getCookie("userId") === "string" &&
    getCookie("userId") !== "undefined"
      ? JSON.parse(getCookie("userId"))
      : "";
  // let email = pathOr('', ['userAuth', 'signInstatus', 'username'])(state);
  let payload = { email, deviceId: `${deviceID}-${fullBrowserVersion}` };
  return axiosApiInstance
    .post(`${rotateSignInKey.apiUrl}${rotateSignInKey.getAccessKeyToken}  `, {
      ...payload,
    })
    .then(async (user) => {
      const pickSome = pickAll(
        ["responseCode", "message", "idToken", "refreshToken", "isVerified"],
        user.data
      );
      const signInValue = await encryptValue(
        JSON.stringify({ ...pickSome, email, userId })
      );
      Cookies.set("signInStatus", JSON.stringify(signInValue), { expires: 7 });
      store.dispatch({
        type: "REFRESH_TOKEN_SUCCESS",
        user: { ...user.data, email, userId },
      });
      return user.data;
    })
    .catch((error) => {
      signout();
      return Promise.reject(error);
    });
}

export function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        // auto signout if 401 response returned from api
        signout(() => {
          window.location.pathname = "/";
          return window.location.reload();
        });
      }
      const error =
        (data && (data.error || data.message)) || response.statusText;
      return Promise.reject(error);
    }
    return data;
  });
}
