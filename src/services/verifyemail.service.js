import axiosApiInstance from "./axiosinterceptor.service";
import { verifyEmail } from "./config";

export const verifyEmailService = {
  VerifyEmail,
};

async function VerifyEmail(code) {
  return axiosApiInstance
    .post(`${verifyEmail.apiUrl}${verifyEmail.path}?device=web`, {
      oobCode: code
    })
    .then((userExists) => {
      return userExists.data;
    })
}
