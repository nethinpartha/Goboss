import {
  browserName,
  browserVersion,
  isMobile,
  mobileVendor,
  mobileModel,
  engineVersion,
  osVersion,
  osName,
} from "react-device-detect";
import { pathOr } from "ramda";
import Cookies from "js-cookie";
import axios from "axios";
import { decryptValue } from "../helpers/aes";

export function getdeviceDetails() {
  return {
    name: `${isMobile ? `${mobileVendor}` : `${browserName}`}`,
    model: `${isMobile ? `${mobileModel}` : `${browserVersion}`}`,
    deviceId: `${engineVersion}`,
    osVersion: `${osVersion}`,
    osName: `${osName}`,
  };
}

export async function getuserlocation() {
  const response = await axios.get("https://ipapi.co/json/").catch(err => err);
  const city = pathOr("", ["data", "city"])(response);
  const state = pathOr("", ["data", "region"])(response);
  return {
    city,
    state,
  };
}
const getCookie = (name) => Cookies.get(name);

const cookiedata =
  getCookie("signInStatus") && typeof getCookie("signInStatus") === "string"
    && getCookie("signInStatus") !== "undefined"
    ? decryptValue(getCookie("signInStatus"))
    : "";

export function identifyUser(userId) {
  const __parseData = cookiedata ? JSON.parse(cookiedata) : "";

  const userid = pathOr("", ["userId"])(__parseData);
  return {
    userId: `${userid ? `${userid}` : "guest"}`,
  };
}
