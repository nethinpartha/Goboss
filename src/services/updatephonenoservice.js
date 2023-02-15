import { updatePhoneNo } from "./config";
import { encrypt } from "../helpers";
import { browserName, isMobile, fullBrowserVersion } from "react-device-detect";
import { handleResponse } from "./siginservice";
import { __decrypttoken } from "../helpers/aes";
var deviceID = browserName;

export const updatePhoneNoService = {
  updatephonenumber,
};

async function updatephonenumber(phonenumber, password) {
  const auth = __decrypttoken();
  const encryptednewpwd = await encrypt(password);
  const requestoptions = {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      phonenumber: phonenumber,
      password: encryptednewpwd,
      deviceId: `${deviceID}-${fullBrowserVersion}`,
      deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`
    }),
  };

  return fetch(`${updatePhoneNo.url}${updatePhoneNo.path}?device=web`, requestoptions)
    .then(handleResponse)
    .then((emailupdatestatus) => {
      return emailupdatestatus;
    });
}
