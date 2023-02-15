import { updatePasswordConf } from "./config";
import { encrypt } from "../helpers";
import { browserName, isMobile, fullBrowserVersion } from "react-device-detect";
import { __decrypttoken } from "../helpers/aes";
import axiosApiInstance from "./axiosinterceptor.service";

var deviceID = browserName;

export const updatePasswordService = {
  updatepassword,
};

async function updatepassword({
  emailid,
  oldPassword,
  newPassword
}) {
  const auth = __decrypttoken();
  const encryptoldPassword = oldPassword ? await encrypt(oldPassword) : "";
  const encryptednewpwd = newPassword ? await encrypt(newPassword) : "";
  const requestoptions = {
    email: emailid,
    oldPassword: encryptoldPassword,
    newPassword: encryptednewpwd,
    deviceId: `${deviceID}-${fullBrowserVersion}`,
    deviceName: `${isMobile ? "mobile" : "web"} ${deviceID}`
  };
  return axiosApiInstance.post(`${updatePasswordConf.url}${updatePasswordConf.path}?device=web`, requestoptions)
    .then((emailupdatestatus) => {
      return emailupdatestatus;
    });
}
