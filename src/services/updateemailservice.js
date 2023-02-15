import { updateEmail } from "./config";
import { encrypt } from "../helpers";
import { browserName, isMobile, fullBrowserVersion } from "react-device-detect";
import { handleResponse } from "./siginservice";
import { __decrypttoken } from "../helpers/aes";

var deviceID = browserName;

export const updateEmailService = {
  updateemail,
};

async function updateemail(emailid, password) {
  const auth = __decrypttoken();
  const encryptedpwd = await encrypt(password);
  const requestoptions = {
    method: "POST",
    headers: new Headers({
      Authorization: `Bearer ${auth}`,
      "Content-Type": "application/json",
    }),
    body: JSON.stringify({
      newemail: emailid,
      password: encryptedpwd,
      deviceId: `${deviceID}-${fullBrowserVersion}`,
      deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`,
    }),
  };

  return fetch(`${updateEmail.url}${updateEmail.path}?device=web`, requestoptions)
    .then(handleResponse)
    .then((emailupdatestatus) => {
      return emailupdatestatus;
    });
}
