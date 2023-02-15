import axios from "axios";
import { loggerApi } from "./config";
import { browserName } from "react-device-detect";

export const loggerService = {
  logger,
};

async function getIpAdress() {
  return axios
    .get("https://ipapi.co/json/")
    .then((res) => res?.data?.ip)
    .catch((e) => e);
}

async function logger(message, errorcause) {
  const ipadd = await getIpAdress();
  return axios
    .post(`${loggerApi.url}${loggerApi.path}`, {
      ip: ipadd,
      message,
      errorcause,
      browserName,
    })
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
}
