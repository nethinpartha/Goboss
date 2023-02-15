import axiosApiInstance from "./axiosinterceptor.service";
import { updateProfileInfo } from "./config";

export const updateProfileInfoService = {
  updateProfileInfoMet,
};

async function updateProfileInfoMet(payload) {
  return axiosApiInstance
    .put(`${updateProfileInfo.url}${updateProfileInfo.path}?device=web`, payload)
    .then((userExists) => {
      return userExists.data;
    })
}
