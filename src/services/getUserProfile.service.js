import { getUserProfile } from "./config";
import axiosApiInstance from "./axiosinterceptor.service";


export const userprofiledetailsService = {
  userprofiledetails
}

async function userprofiledetails() {
  return axiosApiInstance.get(`${getUserProfile.url}${getUserProfile.path}`, {
    params: {
      device: 'web'
    }
  })
    .then((res) => res.data)
}

