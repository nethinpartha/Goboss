import crypto from "crypto";
import { config } from "../services/config";

let resizedKey = Buffer.alloc(32, config.cryptoCipherKey || "VueData");
let resizedIV = Buffer.alloc(16, config.cryptoCipherIv || "VueData@123");

export const encrypt = async (str) => {
  const mykey = crypto.createCipheriv("aes256", resizedKey, resizedIV);
  var mystr = mykey.update(str, "utf8", "base64");
  mystr += mykey.final("base64");
  return mystr;
};

export const encryptValue = (str) => {
  const mykey = crypto.createCipheriv("aes256", resizedKey, resizedIV);
  var mystr = mykey.update(str, "utf8", "base64");
  mystr += mykey.final("base64");
  return mystr;
};

export const decryptValue = (str) => {
  try {
    var mykey = crypto.createDecipheriv("aes256", resizedKey, resizedIV);
    var mystr = mykey.update(str, "base64", "utf8");
    mystr += mykey.final("utf8");
    return mystr;
  } catch (e) {
    return "";
  }
};

export const decrypt = async (str) => {
  var mykey = crypto.createDecipheriv("aes256", resizedKey, resizedIV);
  var mystr = mykey.update(str, "base64", "utf8");
  mystr += mykey.final("utf8");
  return mystr;
};

const token = () =>
  localStorage.getItem("apiToken")
    ? decryptValue(localStorage.getItem("apiToken"))
    : "";

export const __decrypttoken = () => {
  const __parseData = token() ? JSON.parse(token()) : "";
  return __parseData;
};
